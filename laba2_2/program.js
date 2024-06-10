function toggleImage() {
    let selectedValue = document.querySelector('input[name="Selector"]:checked').value;
    let image1 = document.getElementById('image1');
    let image2 = document.getElementById('image2');
    let input1 = document.getElementById('inp1');
    let input2 = document.getElementById('inp2');
    document.getElementById('task1').checked = false
    document.getElementById('task2').checked = false
    document.getElementById('task3').checked = false
    document.getElementById('task4').checked = false
    
    if (selectedValue === 'opt1') {
        image1.style.display = 'block';
        image2.style.display = 'none';
        input1.style.display = 'block';
        input2.style.display = 'none';
    } 
    else if (selectedValue === 'opt2') {
        image1.style.display = 'none';
        image2.style.display = 'block';
        input1.style.display = 'none';
        input2.style.display = 'block';
    }
}

function height(a, b, ang) {
    return ((a - b) * Math.tan(ang * Math.PI / 180) / 2).toFixed(3);
}

function angle(a, b, h) {
    return (Math.atan(2 * h / (a - b)) * 180 / Math.PI).toFixed(3);
}

function additionalSide(h, ang) {
    return (h / Math.sin(ang * Math.PI / 180)).toFixed(3);
}

function diagonal(a, h, ang) {
    return (Math.sqrt(Math.pow(h, 2) + Math.pow((a - h * (1 /Math.tan(ang * Math.PI / 180))), 2))).toFixed(3);
}

function perimeter(a, b, c) {
    return a + b + c * 2;
}

function calculate(data) {
 let h = Number(data.input4.value);   
 let ang = Number(data.input3.value);
 let bc = Number(data.input2.value);
 let ad = Number(data.input1.value);

 let output = document.getElementById('output');   
 if (data.task1.checked || data.task2.checked || data.task3.checked || data.task4.checked){    
    let text1 = document.getElementById('outputType');
    text1.classList.remove("error1");
 }
 else{
     let text1 = document.getElementById('outputType');
     output.innerHTML = " "
     text1.classList.add("error1");
 }    

 let selectedValue = document.querySelector('input[name="Selector"]:checked').value; 
 if (ad <= 0 || isNaN(ad)) {
         data.input1.classList.add("error");
         return false;
 }    
 data.input1.classList.remove("error");
 if (bc <= 0 || isNaN(bc) || bc >= ad) {
         data.input2.classList.add("error");
         return false;
    }      
 data.input2.classList.remove("error");    
 if (selectedValue === 'opt1') {
    if (ang <= 0 || isNaN(ang) || ang >= 90) {
         data.input3.classList.add("error");
         return false;
    } 
    data.input3.classList.remove("error"); 
    h = Number(height(ad, bc, ang));
    output.innerHTML = "<p>Результат:</p>";
 }    
 else if (selectedValue === 'opt2') {
     if (h <= 0 || isNaN(h)) {
         data.input4.classList.add("error");
         return false;
     } 
     data.input4.classList.remove("error");
     ang = Number(angle(ad, bc, h));
     output.innerHTML = "<p>Результат:</p>";
 } 
 if (data.task1.checked) {
    let ac = Number(diagonal(ad, h, ang));
    let newElement1 = document.createElement('p');
    newElement1.innerHTML = "AC = BD = " + ac;
    output.appendChild(newElement1); 
 }
 if (data.task2.checked) {
    let ab = Number(additionalSide( h, ang));
    let newElement1 = document.createElement('p');
    newElement1.innerHTML = "AB = CD = " + ab;
    output.appendChild(newElement1); 
 }
 if (data.task3.checked) {
    let ab = Number(additionalSide(h, ang));
    let p = Number(perimeter(ad, bc, ab));
    let newElement1 = document.createElement('p');
    newElement1.innerHTML = "P = " + p; 
    output.appendChild(newElement1); 
 }
 if (data.task4.checked) {
    let newElement1 = document.createElement('p'); 
    newElement1.innerHTML = "BH = " + h; 
    output.appendChild(newElement1); 
 }     
 return true;
}

function clear_calc(data) {
    data.input1.value = ""
    data.input2.value = ""
    data.input3.value = ""
    data.input4.value = ""
    data.task1.checked = false
    data.task2.checked = false
    data.task3.checked = false
    data.task4.checked = false
    let output = document.getElementById('output');
    output.innerHTML = " "
}
