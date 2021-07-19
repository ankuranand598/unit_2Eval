var div_main=document.getElementById('div_main')
var p = document.createElement('p');
p.innerHTML = "Enter card Number";
var inp = document.createElement('input');
inp.type = "number";
var p2 = document.createElement('p');
p2.innerHTML = "Enter card Expiry Date";
var inp2 = document.createElement('input');
inp2.type = "date";
var p3 = document.createElement('p');
p3.innerHTML = "Enter cvv";
var inp3 = document.createElement('input');
inp3.type = "number";


div_main.append(p,inp,p2,inp2,p3,inp3)