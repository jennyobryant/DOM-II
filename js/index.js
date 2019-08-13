// Your code goes here

//mouseover
document.getElementById("fun-bus").addEventListener("mouseover", e => {

    console.log("have the mouseover event!");
    e.currentTarget.style.marginTop="50px"; 
});

//dblclick
document.querySelectorAll("h4").forEach(element => {
    element.addEventListener('dblclick', event => {
        console.log("will for dblclick!");
        event.currentTarget.textContent="goodbye to fun bus"; 
    });
});

//keydown
document.querySelector("body").addEventListener('keydown', event => {
    console.log("will for keydown!");
    event.currentTarget.style.backgroundColor="red"; 
});

//load
window.addEventListener('load', event => {
       console.log("will for load!");
       document.querySelectorAll("img").forEach(element =>
        element.style.marginBottom = "30px"
         );
 });

//click
document.querySelectorAll("h2").forEach(element => {
    element.addEventListener('click', event => {
        console.log("will for click!");
        event.stopPropagation(); 
    });
});

document.querySelector(".intro").addEventListener("click", event =>{
    console.log("click intro"); 
    event.currentTarget.style.border = "solid 1px black"; 
    
}); 

//offline
window.addEventListener('offline', event => {
    console.log("the network connection has been lost!");
    document.querySelector("body").style.backgroundColor="gray"; 
});

//drag
imgs = document.querySelectorAll('img')
imgs[2].ondrag = e => imgs[2].src = "https://cdn4.iconfinder.com/data/icons/clown-emoji-faces/30/clown_emoji_angry_halloween_horror_monster_scary-512.png"

//scroll
window.addEventListener('scroll', event => {
    console.log("this is scroll!");
    document.querySelector(".main-navigation").style.backgroundColor = "blue"; 
});

//resize
window.addEventListener('resize', event => {
    console.log("this is resize!");
    document.querySelector('body').style.color = "yellow"; 
});

//copy
window.addEventListener('copy', event => {
    console.log("this is copyqq!");
    document.querySelector('h1').textContent ="copy to clipboard";
});

//preventDefault
document.querySelectorAll("a").forEach(element =>
    element.addEventListener('click', event =>{
        event.preventDefault(); 
        console.log('this is preventDefault');
        event.currentTarget.style.backgroundColor = "green"; 
    })

); 