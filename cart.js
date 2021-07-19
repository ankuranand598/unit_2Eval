var div_main = document.getElementById('div_main');
var body=document.getElementById('body');

var div1 = document.createElement('div');
div1.innerHTML = "1234";
function appendJewel(el) {
    
    var div1 = document.createElement('div');
   div1.setAttribute('id','div1')
    var p1 = document.createElement('p')
    p1.innerHTML= `${el.name}`;
    var p2 = document.createElement('p')
    p2.innerHTML =`${el.brand}`;
    var p3 = document.createElement('p')
    p3.innerHTML = `${el.price}`;
     var image = document.createElement('img');
    image.src = el.image;
    image.addEventListener("mouseover", function () {
        var i2 = "https://i.pinimg.com/originals/1a/4e/6a/1a4e6a27a15420967d4e38f1cffa2ac8.png";
        image.src=i2
    })
    
    div1.append(image, p1, p2, p3);
    div_main.append(div1);
}
var div1 = document.createElement('div');
var p = document.createElement('p');
p.innerHTML = "filters";
var btn1 = document.createElement('button');
btn1.innerHTML = "sort high";
btn1.addEventListener('click', function () {
    sortHigh();
})
var btn2 = document.createElement('button');
btn2.innerHTML = "sort low";
btn2.addEventListener('click', function () {
    sortlow();
})
var btn3 = document.createElement('button');
btn3.innerHTML = "sort by brand";
btn3.addEventListener('click', function () {
    sortbrand();
})
div1.append(p, btn1,btn2,btn3);
body.append(div1);
function sortHigh() {
    div_main.innerHTML = null
    var data = JSON.parse(localStorage.getItem('cart'));
    data.sort(function (a, b) {
        return a.price - b.price
    });
    data.forEach(function (el) {
        appendJewel(el);
    })
}
function sortlow() {
    div_main.innerHTML = null
    var data = JSON.parse(localStorage.getItem('cart'));
    data.sort(function (a, b) {
        return b.price - a.price
    });
    data.forEach(function (el) {
        appendJewel(el);
    })
};
var arrmain = JSON.parse(localStorage.getItem('cart'));
var sum = 0;
for (var i = 0; i < arrmain.length; i++) {
    sum += Number(arrmain[i].price);
 }
let inp = document.createElement('input');
inp.type = "text";
inp.placeholder = "apply promocode";
inp.setAttribute("id", 'ip1');
let btn4 = document.createElement('button');
btn4.innerHTML = "Apply code";
var para = document.createElement('p');
para.textContent=`rs. ${sum}`
btn4.addEventListener('click', function () {
    para.textContent=`null`
    var text = document.getElementById('ip1').value;
    console.log(text)
    if (text == 'masai30') {
        sum = Number(sum) - Number(sum) * 3 / 10;
        alert('code applied')
        para.textContent=`rs. ${sum}`
    }
    
})
var chkout = document.createElement('button');
chkout.innerHTML = "Checkout"
chkout.addEventListener('click' ,function() {
    window.location.href = 'checkOut.html';
})
body.append(para, inp, btn4,chkout);
function viewCart() {
    var arr = JSON.parse(localStorage.getItem('cart'));
    //console.log(arr[1].name)
    arr.forEach(function (el) {
        appendJewel(el);
    })
}
viewCart()
appendJewel();

