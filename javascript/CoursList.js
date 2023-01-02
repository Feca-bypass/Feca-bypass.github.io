let divnav = document.querySelector(".navbar");
function createMenu(){
    let nav = document.createElement("nav"),
    ul=document.createElement("ul"),
    li1=document.createElement("li"),
    li2=document.createElement("li"),
    li3=document.createElement("li"),
    a1=document.createElement("a"),
    a2=document.createElement("a"),
    a3=document.createElement("a"),
    imgMenu=document.createElement("img"),
    imgLogo = document.createElement("img");

    li1.setAttribute("class","activDes");
    li2.setAttribute("class","activDes");
    li3.setAttribute("class","activDes");
    imgLogo.src = "../logo.png"
    imgLogo.setAttribute("class","logo");
    divnav.appendChild(imgLogo);
    imgMenu.src = "../menu.png";
    imgMenu.setAttribute("class","menu-icon visible");
    a1.appendChild(document.createTextNode("HOME"));
    a1.setAttribute("href","../html/index.html");
    a2.appendChild(document.createTextNode("LOG OUT"));
    a2.setAttribute("href","../html/signUp.html");
    a3.appendChild(document.createTextNode("COURSES"));
    a3.setAttribute("href","../html/CoursList.html");
    li1.appendChild(a1);
    li2.appendChild(a2);
    li3.appendChild(a3);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    nav.appendChild(ul);
    divnav.appendChild(nav);
    divnav.appendChild(imgMenu);
}
createMenu();
var menuNav = document.querySelector(".menu-icon");
function activDes(){
        if(menuNav.classList[1]=="hidden"){
            document.querySelectorAll(".activDes").forEach((e)=>{
            e.style="";
            menuNav.classList.remove("hidden");
            menuNav.classList.add("menu-icon");
            });   
        }
        else{
        document.querySelectorAll(".activDes").forEach((e)=>{
        e.style="visibility: hidden";
        menuNav.classList.remove("visible");
        menuNav.classList.add("hidden");
        });
        }
}
menuNav.addEventListener("click",activDes);
//creation page

var content = document.querySelector('.content');
function creationCours(path, title, price) {
    let div = document.createElement('div'); // <div></div>
    div.setAttribute('class', 'card col-3 me-2 mb-2'); //<div class="card col-3 me-2 mb-2 "></div>
    let img = document.createElement('img'),
        p = document.createElement('p'),
        span = document.createElement('span');

    img.src = path;
    img.setAttribute('class', 'card-img');
    p.appendChild(document.createTextNode(title));
    p.setAttribute('class', 'card-title');
    span.appendChild(document.createTextNode(price+" $"));
    span.setAttribute('class', 'card-text');

    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);

    content.append(div);
}

courses.forEach(function(element) {
    creationCours(element.image, element.title, element.price)
})

var list = document.querySelector('.categories');

function creationCategory() {
    var tab = courses.map(function(v) { return v.category.toUpperCase() });
    var categories = ['all', ...new Set(tab)];

    categories.forEach((v) => {
        let li = document.createElement('li'); // <li></li>
        li.setAttribute("class",`list-group-item ${v.toLowerCase()}`);
        li.appendChild(document.createTextNode(v)); // <li>v</li>
        list.append(li);
    })
}
creationCategory();
let range = document.querySelector(".range"),
    valPrice=document.querySelector(".valPrice"),
    prixPlusCher= 0;
courses.forEach(function(element) {
    if(element.price>prixPlusCher){
        prixPlusCher = element.price;
        return prixPlusCher;
    }
 })

range.setAttribute("max",prixPlusCher.toFixed(0));
range.addEventListener("change",()=>{
    content.innerHTML="";
    valPrice.innerHTML=range.value+"$";
    courses.forEach((element)=>{
        if(range.value>element.price){
            creationCours(element.image, element.title, element.price);
        }
    })
})
let btnSearch = document.querySelector(".bx-search-alt"),
    inputSearch = document.querySelector(".form-control");
inputSearch.addEventListener("blur",()=>{
    btnSearch.setAttribute("class","desactive bx bx-search-alt");
    inputSearch.setAttribute("placeholder","Search");
})
inputSearch.addEventListener("focus",()=>{
    btnSearch.setAttribute("class","active bx bx-search-alt");
    inputSearch.setAttribute("placeholder","");
})
function search(){
    content.innerHTML="";
    courses.forEach(element => {
        if(element.title.toLowerCase().includes(inputSearch.value.toLowerCase()) == true){
            creationCours(element.image, element.title, element.price);
        }
    });
}
inputSearch.addEventListener("keyup",search);
let all = document.querySelector(".all"),
    js = document.querySelector(".js"),
    html = document.querySelector(".html")
    css = document.querySelector(".css"),
    php = document.querySelector(".php"),
    jsg4 = document.querySelector(".js_g4");

all.addEventListener("click",()=>{
    content.innerHTML="";
        courses.forEach(element => {
            creationCours(element.image, element.title, element.price);
        })
})
js.addEventListener("click",()=>{
        content.innerHTML="";
        courses.forEach(element => {
        if(js.classList.value =="list-group-item "+element.category.toLowerCase()){
            creationCours(element.image, element.title, element.price);
        }
        })
})
html.addEventListener("click",()=>{
    content.innerHTML="";
    courses.forEach(element => {
    if(html.classList.value =="list-group-item "+element.category.toLowerCase()){
        creationCours(element.image, element.title, element.price);
    }
    })
})
css.addEventListener("click",()=>{
    content.innerHTML="";
    courses.forEach(element => {
    if(css.classList.value =="list-group-item "+element.category.toLowerCase()){
        creationCours(element.image, element.title, element.price);
    }
    })
})
php.addEventListener("click",()=>{
    content.innerHTML="";
    courses.forEach(element => {
    if(php.classList.value =="list-group-item "+element.category.toLowerCase()){
        creationCours(element.image, element.title, element.price);
    }
    })
})
jsg4.addEventListener("click",()=>{
    content.innerHTML="";
    courses.forEach(element => {
    if(jsg4.classList.value =="list-group-item "+element.category.toLowerCase()){
        creationCours(element.image, element.title, element.price);
    }
    })
})