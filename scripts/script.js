// picture effect 1

function image1() {
    document.getElementById('largeImg').src = ("http://www.climatewarmingcentral.com/images/horizontal_drilling.jpg");
    zoomImage();
}

function image2() {
    document.getElementById('largeImg').src = ("http://www.offshoreenergytoday.com/wp-content/uploads/2013/06/Al-Zubarah.jpg");
    zoomImage();
}

function image3() {
    document.getElementById('largeImg').src = ("http://static.cdn-seekingalpha.com/uploads/2013/11/4/3957081-13836093274978218-tullii_origin.jpg");
    zoomImage();
}

function image4() {
    document.getElementById('largeImg').src = ("http://www.jwaoil.com/wp-content/uploads/2015/08/DuraBase-well-site-mats-for-onshore-drilling-1024x640.jpg");
    zoomImage();
}

function image5() {
    document.getElementById('largeImg').src = ("http://www.arabianoilandgas.com/pictures/gallery/Manifa-online.gif");
    zoomImage();
}

function image(obj) {
    document.getElementById('largeImg').src = ("http://www.arabianoilandgas.com/pictures/gallery/Manifa-online.gif");
    zoomImage();
}

function zoomImage() {
    document.getElementById('zoomImage').style.visibility = 'visible';
}

function hide(obj) {
    obj.style.visibility = 'hidden';
}


// picture effect 2

function big1() {
    var img = document.getElementById('offshore1');
    img.style.width= "800px";
    img.style.heigh= "800px";
}

function small1() {
    var img = document.getElementById('offshore1');
    img.style.width= "300px";
    img.style.heigh= "300px";
}

function big2() {
    var img = document.getElementById('offshore2');
    img.style.width= "800px";
    img.style.heigh= "800px";
}

function small2() {
    var img = document.getElementById('offshore2');
    img.style.width= "300px";
    img.style.heigh= "300px";
}

function big3() {
    var img = document.getElementById('offshore3');
    img.style.width= "800px";
    img.style.heigh= "800px";
}

function small3() {
    var img = document.getElementById('offshore3');
    img.style.width= "300px";
    img.style.heigh= "300px";
}

function big4() {
    var img = document.getElementById('offshore4');
    img.style.width= "800px";
    img.style.heigh= "800px";
}

function small4() {
    var img = document.getElementById('offshore4');
    img.style.width= "300px";
    img.style.heigh= "300px";
}

function big5() {
    var img = document.getElementById('offshore5');
    img.style.width= "800px";
    img.style.heigh= "800px";
}

function small5() {
    var img = document.getElementById('offshore5');
    img.style.width= "300px";
    img.style.heigh= "300px";
}

// footer alert

function footer() {
    alert('All Copyrights Reserved to Marian Horoiu.'+"\n"+'Group IT 14, March 2017.'+"\n"+"\n"+'E-mail: marian.horoiu@gmail.com'+"\n"+'Tel: 0740 137341');
}