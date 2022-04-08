let photos = document.querySelectorAll(".photo");
let toggleImg =document.getElementById("toggle-close-img");
let i;
var x, xHead;
for(i=0;i <photos.length; i++){
    photos[i].addEventListener("click", function(e){
        xHead=e;
        x=e.path[1];
        console.log(xHead.path[0]);
        console.log(x);
        var addClass= ["fixed", "top-0", "left-0", "w-screen", "h-screen", "p-24"]
        
        x.classList.add("fixed");
        x.classList.add("bg-black");
        x.classList.add("z-50");
        x.classList.add("top-0");
        x.classList.add("left-0");
        x.classList.add("w-screen");
        x.classList.add("h-screen");
        x.classList.add("p-24");
        toggleImg.classList.remove("hidden");
        xHead.path[0].classList.add("h-full");
        xHead.path[0].classList.add("w-full");
        xHead.path[0].classList.add("object-contain");
        xHead.path[0].classList.remove("h-48");
        xHead.path[0].classList.remove("object-cover");
    })
}
toggleImg.addEventListener("click", ()=>{
    x.classList.remove("fixed");
        x.classList.remove("top-0");
        x.classList.remove("left-0");
        x.classList.remove("w-screen");
        x.classList.remove("h-screen");
        x.classList.remove("p-24");
        toggleImg.classList.add("hidden");
        xHead.path[0].classList.remove("h-full");
        xHead.path[0].classList.remove("w-full");
        xHead.path[0].classList.remove("object-contain");
        xHead.path[0].classList.add("h-48");
        xHead.path[0].classList.add("object-cover");
})
//fixed top-0 left-0 w-screen h-screen p-24
//h-full w-full object-contain


let toggle = document.getElementById("toggle");
let toggleClose= document.getElementById("toggle-close")
toggle.addEventListener("click",()=>{
    document.getElementById("menu").classList.remove("hidden");
    toggle.classList.add("hidden");
    toggleClose.classList.remove("hidden");
});
toggleClose.addEventListener("click", ()=>{
    document.getElementById("menu").classList.add("hidden");
    toggleClose.classList.add("hidden");
    toggle.classList.remove("hidden");
})
