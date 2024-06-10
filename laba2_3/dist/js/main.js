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
	console.log(datafilter)
	let tableFilter = data.filter(item => {
		let result = true
		for(let key in datafilter){
			let val = item[correspond[key]]
			if (isNaN(Number(val))) {
				val = val.toLowerCase()
				if(key.includes('Name'))result &&= val.indexOf(datafilter[key]) == 0 
				else result &&= val.indexOf(datafilter[key]) != -1
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
		console.log(sortArr)
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
        console.log(sortInfo())
		sortTable('main_table', table_data)
    });
	let resetButton = document.getElementById('sort_res');
    resetButton.addEventListener('click', function () {
        resetSort(table_data, 'main_table');
    });

	setSortSelects(table_data[0], document.getElementById('sort'));
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


   
   