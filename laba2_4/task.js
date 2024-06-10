let data = () => {
    let names = d3.selectAll("div.content a").nodes()
    res = names.map(el => el.textContent)
    let div = d3.select('body').insert('div', 'h2')
    div.attr('class','menu')
    div.selectAll("div")
    .data(res)
    .enter()
    .append("a").attr('href','#')
    .text(d => d)
    .style('color','blue')
    .style('margin-right','10px')
    .style('padding','3px 5px 3px 5px')
    .style('background-color','LightSkyBlue');
    return res
}

let clicked = false
document.addEventListener("DOMContentLoaded", function() {
	let findButton = document.getElementById('res');
    findButton.addEventListener('click', function () {
        if(!clicked){
            console.log(data())
            clicked = true;
        }
    });
})