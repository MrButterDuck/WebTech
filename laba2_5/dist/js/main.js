let createTable = (data, id) =>{
	let names = ['Наименование', 'Графический процессор', 'Год выпуска', 'Шина', 'Память', 'Тактирование процессора(MHz)', 'Тактирование памяти(MHz)', 'Шейдер']
	let table = document.getElementById(id);
	let thead = document.createElement('thead') 
	let tr = document.createElement('tr');
	names.forEach(name =>{
		let th = document.createElement('td');
		th.innerHTML = name;
		tr.append(th);
	})
	thead.append(tr)
	table.append(thead);
	let tbody = document.createElement('tbody')
	data.forEach((info) => {
		let tr = document.createElement('tr');
		let vals = Object.keys(info).map(key => info[key]);
		vals.forEach(el => {
			let td = document.createElement('td');
			td.innerHTML = el;
			tr.append(td);
		})
		tbody.append(tr)
	});
	table.append(tbody);

}

let clearTable = (id) =>{
	let table = document.getElementById(id);
	table.innerHTML = ''
}


let dataFilter = (dataForm) => {
	let dictFilter = {};
	for (let j = 0; j < dataForm.elements.length; j++) {
		let item = dataForm.elements[j];
		let valInput = item.value;
		if (item.type == "text") {
			valInput = valInput.toLowerCase();
		} else if (item.type == "number" || item.id.includes('year')) {
			if (valInput !== "") {
				if(item.id.includes('year'))valInput = Number(valInput.split('-')[0])
				else valInput = parseFloat(valInput);
			} else {
				if (item.id.includes("From")) {
					valInput = Number.NEGATIVE_INFINITY;
				} else if (item.id.includes("To")) {
					valInput = Number.POSITIVE_INFINITY;
				}
			}
		}
		dictFilter[item.id] = valInput;
	}
	return dictFilter;
  }

let filterTable = (data, idTable, dataForm) =>{
	let datafilter = dataFilter(dataForm);
	let tableFilter = data.filter(item => {
		let result = true
		for(let key in datafilter){
			let val = item[correspond[key]]
			if (isNaN(Number(val))) {
				val = val.toLowerCase()
				result &&= val.indexOf(datafilter[key]) != -1
			}
			if (!isNaN(Number(val))) {
				let filt = datafilter[key]
				if(key.includes('From'))result &&= val >= filt
				if(key.includes('To'))result &&= val <= filt
			}
		}
		return result;
	})
	clearTable(idTable)
	createTable(tableFilter, idTable);
   }

let clearFilter = (idTable, formData) => {
	let formElements = formData.elements;
	for (let i = 0; i < formElements.length; i++) {
		let element = formElements[i].value = ''
	}
	clearTable(idTable);
	createTable(table_data, idTable);
}

let createOption = (str, val) => {
	let item = document.createElement('option');
	item.text = str;
	item.value = val;
	return item;
}

let setSortSelect = (head, sortSelect) => {
	sortSelect.append(createOption('Нет', 0));
	for (let i in head) {
		let option = createOption(head[i], Number(i) + 1)
		sortSelect.append(option);
		selectedOptions[option.value] = false
	}
}

let setSortSelects = (data, dataForm) => {
	let head = Object.keys(data).map(key => sortOpt[key]);
	let allSelect = dataForm.getElementsByTagName('select');
	for (let j = 0; j < allSelect.length; j++) {
		setSortSelect(head, allSelect[j]);
		if (j != 0) {
			allSelect[j].disabled = true;
		}
	}
}

let changeNextSelect = (nextSelectId, curSelectId) => {
	let nextSelect = document.getElementById(nextSelectId);
	let curSelect = document.getElementById(curSelectId);
	selectedOptions[curSelect.oldValue] = false
	nextSelect.innerHTML = curSelect.innerHTML;
	if (curSelect.value != 0) {
		selectedOptions[curSelect.value] = true
		nextSelect.remove(Array.from(nextSelect.options).findIndex(opt => opt.value == curSelect.value))
		nextSelect.disabled = false;
	} else {
		nextSelect.disabled = true
	}
	curSelect.oldValue = curSelect.value
}

let sortInfo = () => {
	let info = []
	//Object.keys(sortOpt).find((el,id) => id+1 == sel.value)
	Array.from(document.getElementById('sort').getElementsByTagName('select')).forEach(sel => {
		if(sel.value != 0)info.push({col_key: sel.value - 1, 
				   				reverse: document.getElementById(sel.id + '_check').checked})
	})
	return info
}

let sortTable = (idTable, data) => {

		let sortArr = sortInfo(data);
		if (sortArr.length === 0) {
			return false;
		}
		let table = document.getElementById(idTable);
		let rowData = Array.from(table.rows);
		rowData.shift();
		rowData.sort((first, second) => {
			for(let i in sortArr) {
				let key = sortArr[i].col_key;
				if (key >=5){
					if (Number(first.cells[key].innerHTML) > Number(second.cells[key].innerHTML)) {
						return sortArr[i].reverse ? -1 : 1;
					} 
					else if (Number(first.cells[key].innerHTML) < Number(second.cells[key].innerHTML)){
						return sortArr[i].reverse ? 1 : -1;
					}
				}
				else{
					if (first.cells[key].innerHTML > second.cells[key].innerHTML) {
						return sortArr[i].reverse ? -1 : 1;
					} 
					else if (first.cells[key].innerHTML < second.cells[key].innerHTML){
						return sortArr[i].reverse ? 1 : -1;
					}
				}
			}
			return 0;
		});
	
		table.innerHTML = table.rows[0].innerHTML;
	
		rowData.forEach(item => {
		table.append(item);
		});
}

function resetSort(table_data, idTable) {
    clearTable(idTable);
	createTable(table_data, idTable);
    for (let key in selectedOptions) {
        selectedOptions[key] = false;
    }
    let allSelect = document.getElementById('sort').getElementsByTagName('select');
    for (let j = 0; j < allSelect.length; j++) {
        if (j != 0) {
            allSelect[j].disabled = true;
        }
        allSelect[j].value = 0;
    }
}

function createArrGraph(data, key) {
    const groupObj = d3.group(data, d => d[key]);
    let arrGraph = [];
    for (let entry of groupObj) {
        let values = entry[1].map(d => Number(d['MHz_proc']));
        let minMax = d3.extent(values);
        arrGraph.push({ labelX: entry[0], values: minMax });
    }
	arrGraph.sort((a, b) => {
		if (a.labelX > b.labelX)return 1
		if (a.labelX < b.labelX)return -1
		return 0
	})
    return arrGraph;
}

const createAxis = (data, minCheck, maxCheck) => {
    let firstRange = d3.extent(data.map((d) => Number(d.values[0])));
    let secondRange = d3.extent(data.map((d) => Number(d.values[1])));
	const [minMin, maxMin] = [Math.min(firstRange[0], firstRange[1]), Math.max(firstRange[0], firstRange[1])]
	const [minMax, maxMax] = [Math.min(secondRange[0], secondRange[1]), Math.max(secondRange[0], secondRange[1])]
	let min;
	let max;
	console.log(firstRange, secondRange)
	if (minCheck && maxCheck){min = firstRange[0]; max = secondRange[1]}
	else if (minCheck && !maxCheck){min = firstRange[0]; max = firstRange[1]}
	else if (!minCheck && maxCheck){min = secondRange[0]; max= secondRange[1]}
	console.log([min * 0.9, max * 1.1])
    let scaleX = d3.scaleBand()
        .domain(data.map((d) => d.labelX))
        .range([0, width - 2 * marginX]);

    let scaleY = d3.scaleLinear()
        .domain([min * 0.9, max * 1.1]) 
        .range([height - 2 * marginY, 0]);

    let axisX = d3.axisBottom(scaleX); 
    let axisY = d3.axisLeft(scaleY); 

    svg.append("g")
        .attr("transform", `translate(${marginX}, ${height - marginY})`)
        .call(axisX)
        .selectAll("text")

    svg.append("g")
        .attr("transform", `translate(${marginX}, ${marginY})`)
        .call(axisY);

    return [scaleX, scaleY];
};

function createStolbChart(arrGraph, scaleX, scaleY, index, color) {
    const barWidth = scaleX.bandwidth() / 4;
	for(let i = 0; i < arrGraph.length; i++){console.log(scaleX(arrGraph[i].labelX))}
    svg.selectAll(".bar" + index)
        .data(arrGraph)
        .enter()
        .append("rect")
        .attr("x", (d) => scaleX(d.labelX) + ((index+1) * barWidth))
        .attr("y", (d) => scaleY(d.values[index]))
        .attr("width", barWidth)
        .attr("height", (d) => height - 2 * marginY - scaleY(d.values[index]))
        .attr("transform", `translate(${marginX}, ${marginY})`)
        .style("fill", color);
}

function createPoints(arrGraph, scaleX, scaleY, index, color) {
    const r = 4;
    let ident = index == 0 ? r / 2 : -r / 2;

    svg.selectAll(".dot" + index)
        .data(arrGraph)
        .enter()
        .append("circle")
        .attr("class", "dot" + index)
        .attr("r", r)
        .attr("cx", (d) => scaleX(d.labelX) + scaleX.bandwidth() / 2)
        .attr("cy", (d) => scaleY(d.values[index]) + ident)
        .attr("transform", `translate(${marginX}, ${marginY})`)
        .style("fill", color);
}

function drawGraph(dataId) {
	let data = document.getElementById(dataId)
    const keyX = data.ox.value;
    const isMax = data.oy[0].checked;
	const isMin = data.oy[1].checked;
    const arrGraph = createArrGraph(table_data, keyX);
    svg.selectAll('*').remove();

    if (isMin && !isMax) {
		const [scX, scY] = createAxis(arrGraph, isMin, isMax);
        createPoints(arrGraph, scX, scY, 0, "springgreen");
    }
    if (isMax && !isMin) {
		const [scX, scY] = createAxis(arrGraph, isMin, isMax);
        createPoints(arrGraph, scX, scY, 1, "white");
    }
	if (isMax && isMin) {
		const [scX, scY] = createAxis(arrGraph, isMin, isMax);
        createPoints(arrGraph, scX, scY, 1, "white");
		createPoints(arrGraph, scX, scY, 0, "springgreen");
    }
}

function drawStolbGraph(dataId) {
	let data = document.getElementById(dataId)
    const keyX = data.ox.value;
    const isMin = data.oy[1].checked;
    const isMax = data.oy[0].checked;
    const arrGraph = createArrGraph(table_data, keyX);
    svg.selectAll('*').remove();

	if (isMin && !isMax) {
		const [scX, scY] = createAxis(arrGraph, isMin, isMax);
        createStolbChart(arrGraph, scX, scY, 0, "springgreen");
    }
    if (isMax && !isMin) {
		const [scX, scY] = createAxis(arrGraph, isMin, isMax);
        createStolbChart(arrGraph, scX, scY, 1, "white");
    }
	if (isMax && isMin) {
		const [scX, scY] = createAxis(arrGraph, isMin, isMax);
        createStolbChart(arrGraph, scX, scY, 1, "white");
		createStolbChart(arrGraph, scX, scY, 0, "springgreen");
    }
}

document.addEventListener("DOMContentLoaded", function() {
	createTable(table_data, 'main_table');
	let findButton = document.getElementById('filter_button');
    findButton.addEventListener('click', function () {
        let dataForm = document.getElementById('filter');
        filterTable(table_data, 'main_table', dataForm);
    });
	let clearButton = document.getElementById('clearFilters');
    clearButton.addEventListener('click', function () {
        let formData = document.getElementById('filter');
        clearFilter('main_table', formData);
    });

	let sortbutton = document.getElementById('sort_but');
    sortbutton.addEventListener('click', function () {
		sortTable('main_table', table_data)
    });
	let resetButton = document.getElementById('sort_res');
    resetButton.addEventListener('click', function () {
        resetSort(table_data, 'main_table');
    });
	setSortSelects(table_data[0], document.getElementById('sort'));

	let pointGraphButton = document.getElementById('graph_but');
    pointGraphButton.addEventListener('click', function() {
		svg.attr('display','block')
        drawGraph('graph');
    });
	let stolbGraphButton = document.getElementById('stolb_but');
    stolbGraphButton.addEventListener('click', function() {
		svg.attr('display','block')
        drawStolbGraph('graph');
    });
	let clearGraphButton = document.getElementById('clear_graph');
    clearGraphButton.addEventListener('click', function() {
        svg.selectAll('*').remove();
		svg.attr('display','none')
    });
})



document.getElementById('first_sort').onchange = () => {
    changeNextSelect('second_sort', 'first_sort');
	changeNextSelect('third_sort', 'second_sort');
    if (document.getElementById('first_sort').value == 0) {
        document.getElementById('first_sort_check').checked = false;
    }
	document.getElementById('second_sort_check').checked = false;
	document.getElementById('third_sort_check').checked = false;
}

document.getElementById('second_sort').onchange = () => {
    changeNextSelect('third_sort', 'second_sort');
    if (document.getElementById('second_sort').value == 0) {
        document.getElementById('second_sort_check').checked = false;
    }
	document.getElementById('third_sort_check').checked = false;
}

document.getElementById('third_sort').onchange = () => {
    if (document.getElementById('third_sort').value == 0) {
        document.getElementById('third_sort_check').checked = false;
    }
}


   
   