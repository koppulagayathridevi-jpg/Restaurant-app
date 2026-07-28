
const menuIcon = document.getElementById("menuIcon");
const navbar = document.getElementById("navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

const hero = document.querySelector(".hero");

const images = [
    "images/hero1.jpg",
    "images/hero2.jpg",
    "images/hero3.jpg"
];

let index = 0;

setInterval(() => {

    index++;

    if(index >= images.length){

        index = 0;

    }

    hero.style.backgroundImage = `url(${images[index]})`;

},3000);


const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = form.querySelector("input[type='text']").value.trim();

    const phone = form.querySelector("input[type='tel']").value.trim();

    const email = form.querySelector("input[type='email']").value.trim();

    if(name==="" || phone==="" || email===""){

        alert("Please fill all fields.");

        return;

    }

    alert("🎉 Table Booked Successfully!");

    form.reset();

});



const darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

});


const sections = document.querySelectorAll(".hidden");

window.addEventListener("scroll",()=>{

sections.forEach(section=>{

const top = section.getBoundingClientRect().top;

if(top < window.innerHeight-100){

section.classList.add("show");

}

});

});