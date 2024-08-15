const phoneLinksHolder = document.querySelector(".phone-links-holder");
const phoneLinks = document.querySelectorAll(".phone-links");

const menuBtn = document.querySelector(".menu");
let clicked = false;

menuBtn.addEventListener("click", () => {
    if (!clicked) {
        phoneLinksHolder.style.display = "flex";
        clicked = true;
    } else {
        phoneLinksHolder.style.display = "none";
        clicked = false;
    }
} );

phoneLinks.forEach((eachLink)=> {
    eachLink.addEventListener("click", ()=> {
        clicked = false;
        phoneLinksHolder.style.display = "none";
    });
});



gsap.registerPlugin(ScrollTrigger);

gsap.to("nav", {
    duration: .3,
    backgroundColor: "#f7f7f7",
    scrollTrigger: {
        trigger: "body",
        start: 30,
        end: 30,
        markers: true,
        toggleActions: "play none reverse none"
    },
});