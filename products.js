var div_main = document.getElementById('div_main');
function addToShow() {
    var name = document.getElementById('name').value;
    var price = document.getElementById('price').value;
    var brand = document.getElementById('brand').value;
    var image = document.getElementById('image').value;
    var obj = {
        name,
        price,
        brand,
        image,
    }
    var arr;
    arr = JSON.parse(localStorage.getItem('jewelery'));
    if (arr == undefined) {
        arr = [];
    } else {
        arr = JSON.parse(localStorage.getItem('jewelery'))
       
    }
     arr.push(obj);
    JSON.stringify(localStorage.setItem('jewelery', JSON.stringify(arr)));
    appendJewel()
}
function appendJewel(el) {
    
    var div1 = document.createElement('div');
   div1.setAttribute('id','div1')
    var p1 = document.createElement('p')
    p1.textContent= `${el.name}`;
    var p2 = document.createElement('p')
    p2.textContent =`${el.brand}`;
    var p3 = document.createElement('p')
    p3.textContent = `${el.price}`;
     var image = document.createElement('img');
    image.src = el.image;
    image.addEventListener("mouseover", function () {
        var i2 = "https://i.pinimg.com/originals/1a/4e/6a/1a4e6a27a15420967d4e38f1cffa2ac8.png";
        image.src=i2
    })
    var btn = document.createElement('button');
    btn.innerHTML = `Add to cart`;
    btn.addEventListener('click', function () {
        addToCart(el);
    })
    div1.append(image, p1, p2, p3, btn);
    div_main.append(div1);
}

//appendJewel()
function applyDetails() {
    var arr = JSON.parse(localStorage.getItem('jewelery'))
    //console.log(data)
    arr.forEach(function (e) {
        appendJewel(e);
    });
    //console.log(arr)
}
applyDetails();
function addToCart(el) {
   var arr1;
    arr1 = JSON.parse(localStorage.getItem('cart'));
    if (arr1 == undefined) {
        arr1 = [];
    } else {
        arr1 = JSON.parse(localStorage.getItem('cart'))
       
    }
     arr1.push(el);
    JSON.stringify(localStorage.setItem('cart', JSON.stringify(arr1)));
}
function showCart() {
    window.location.href='cart.html'
}