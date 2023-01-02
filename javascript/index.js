var container = document.querySelector(".col1");
function creationMiniPics(path,title,price){
    let div = document.createElement("div");
    div.setAttribute("class","card card1");
    let h5 = document.createElement("h5"),
    p = document.createElement("p");
    div.style.backgroundImage=`url(${path})`;
    h5.appendChild(document.createTextNode(title));
    p.appendChild(document.createTextNode(`${price} $`));
    div.appendChild(h5);
    div.appendChild(p);
    container.appendChild(div);
}
let i=0;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function swapimage(){
    container.innerHTML="";
    for(let i=0;i<4;i++){
        let index = getRandomInt(20);
        creationMiniPics(courses[index].image, courses[index].title, courses[index].price);
        
    }
}

window.setInterval(function () {swapimage()}, 10000)

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

    imgLogo.src = "../logo.png"
    imgLogo.setAttribute("class","logo");
    divnav.appendChild(imgLogo);
    imgMenu.src = "../menu.png";
    imgMenu.setAttribute("class","menu-icon visible");
    a1.appendChild(document.createTextNode("HOME"));
    a1.setAttribute("href","");
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
            document.querySelectorAll("li").forEach((e)=>{
            e.style="";
            menuNav.classList.remove("hidden");
            menuNav.classList.add("menu-icon");
            });   
        }
        else{
        document.querySelectorAll("li").forEach((e)=>{
        e.style="visibility: hidden";
        menuNav.classList.remove("visible");
        menuNav.classList.add("hidden");
        });
        }
}
menuNav.addEventListener("click",activDes);
document.querySelector("button").addEventListener("click",()=>{
    window.location.pathname = "/html/CoursList.html";
})    
swapimage();
