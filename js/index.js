// Your code goes here

//mouseover
document.getElementById("fun-bus").addEventListener("mouseover", e => {
    console.log("have the mouseover event!");
});

//dblclick
document.querySelectorAll("h4").forEach(element => {
    element.addEventListener('dblclick', event => {
        console.log("will for dblclick!");
    });
});

//keydown
document.querySelector("body").addEventListener('keydown', event => {
    console.log("will for keydown!");
});

//load
window.addEventListener('load', event => {
       console.log("will for load!");
 });

//click
document.querySelectorAll("h2").forEach(element => {
    element.addEventListener('click', event => {
    console.log("will for click!");
    });
});

//offline
window.addEventListener('offline', event => {
    console.log("the network connection has been lost!");
});

//drag
imgs = document.querySelectorAll('img')
imgs[2].ondrag = e => imgs[2].src = "https://cdn4.iconfinder.com/data/icons/clown-emoji-faces/30/clown_emoji_angry_halloween_horror_monster_scary-512.png"

//scroll
window.addEventListener('scroll', event => {
    console.log("this is scroll!");
});

//resize
window.addEventListener('resize', event => {
    console.log("this is resize!");
});

//copy
window.addEventListener('copy', event => {
    console.log("this is copyqq!");
});