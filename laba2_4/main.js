const Width = 690;
const Height = 690;

const svg = d3.select("#svg-container").append("svg").attr("width", Width).attr("height", Height);

function generateHillData(numPoints, amplitude, frequency) {
    const data = [];
    for (let j = 4; j > 0; j--) {
        for (let i = numPoints; i > 0; i--) {
            const y = (i+10*(j*5))*3-100;
            const x = (-amplitude * Math.sin(frequency * i)*3 + 300);
            console.log(x, y)
            data.push({x, y});
        }
    }
    return data;
}

const numPoints = 45;
const amplitude = 40;
const frequency = 0.1;
const data = generateHillData(numPoints, amplitude, frequency);

const lineGenerator = d3.line()
    .x(d => d.x) 
    .y(d => d.y); 

const newPath = svg.append("path")
    .attr("d", lineGenerator(data)) 
    .attr("fill", "none")
    .attr("stroke", "blue")
       .style("stroke-width", 4)
;

const createSmiley = () => {
    const group = svg.append("g")
        .attr("class", "smiley");

    //волосы
    group.append("circle")
        .attr("cx", 16)
        .attr("cy", -11)
        .attr("r", 10)
        .attr("fill", "red");
    group.append("circle")
        .attr("cx", -16)
        .attr("cy", -11)
        .attr("r", 10)
        .attr("fill", "red");
    group.append("circle")
        .attr("cx", 13)
        .attr("cy", -7)
        .attr("r", 10)
        .attr("fill", "firebrick");
    group.append("circle")
        .attr("cx", -13)
        .attr("cy", -7)
        .attr("r", 10)
        .attr("fill", "firebrick");
    group.append("circle")
        .attr("cx", 10)
        .attr("cy", -12)
        .attr("r", 10)
        .attr("fill", "crimson");
    group.append("circle")
        .attr("cx", -10)
        .attr("cy", -12)
        .attr("r", 10)
        .attr("fill", "crimson");

    //голова
    group.append("circle")
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", 20)
        .attr("fill", "white")
        .attr("stroke", "black")
        .attr("stroke-width", 1);

    //левый глаз
    group.append("circle")
        .attr("cx", -7)
        .attr("cy", -7)
        .attr("r", 3)
        .attr("fill", "black");

    // правый глаз
    group.append("circle")
        .attr("cx", 7)
        .attr("cy", -7)
        .attr("r", 3)
        .attr("fill", "black");

    //рот
    group.append("path")
        .attr("d", "M -10 5 Q 0 10, 10 5")
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .attr("fill", "none");
    group.append("path")
        .attr("d", "M -10 5 Q 0 20, 10 5")
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .attr("fill", "none");
    group.append("circle")
        .attr("cx", -10)
        .attr("cy", 5)
        .attr("r", 3)
        .attr("fill", "red");
    group.append("circle")
        .attr("cx", 10)
        .attr("cy", 5)
        .attr("r", 3)
        .attr("fill", "red");

    //нос
    group.append("circle")
        .attr("x", 5)
        .attr("y", -10)
        .attr("r", 5)
        .attr("fill", "red");

    return group;
};

const clearSVG = () => {
    svg.selectAll(".smiley").remove();
};

const initialSetup = () => {
    clearSVG(); 
    const initialObject = createSmiley();
    const startPoint = newPath.node().getPointAtLength(0);
    initialObject.attr("transform", `translate(${startPoint.x}, ${startPoint.y}) `);
};

const animate = (duration, scalePercent, rotate) => {
    const totalLength = newPath.node().getTotalLength();
    const scaleFactor = scalePercent * 0.01;

    const movingObject = createSmiley();

    movingObject.transition()
        .ease(d3.easeLinear) 
        .duration(duration * 1000)
        .attrTween("transform", function () {
            return function (t) {
                const point = newPath.node().getPointAtLength(t * totalLength);
                return `translate(${point.x}, ${point.y})  scale(${1 + t * ( scaleFactor)}) ${rotate ? `rotate(${t * 720})`: ''}`;
            };
        }); 
}

initialSetup();

document.getElementById("start-animation").addEventListener("click", () => {
    const duration = Number(document.getElementById("duration").value);
    const scalePercent = Number(document.getElementById("scale").value);
    const rotate = document.getElementById("rotate").checked;

    clearSVG();
    animate(duration, scalePercent, rotate);
});

document.getElementById("clear-svg").addEventListener("click", clearSVG);