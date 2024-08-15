
// Scroll Part
const aboutUsLink = document.querySelectorAll(".about-us-link");
const whyNeedSmaLink = document.querySelectorAll(".wnsma-link");

const aboutUsPage = document.querySelector(".page-2");
const whyNeedSmaPage = document.querySelector(".page-3");

let aboutUsPagePositionDesired = aboutUsPage.getBoundingClientRect().top - document.querySelector(".page-1").getBoundingClientRect().top - 80;
let whyNeedSmaPagePositionDesired = whyNeedSmaPage.getBoundingClientRect().top - document.querySelector(".page-1").getBoundingClientRect().top - 80;

aboutUsLink.forEach((eachLink)=> {
    eachLink.addEventListener("click", () => {
        window.scroll({
            top: aboutUsPagePositionDesired,
            left: 0,
            behavior: "smooth",
        });
    });
});

whyNeedSmaLink.forEach((eachLink)=> {
    eachLink.addEventListener("click", () => {
        window.scroll({
            top: whyNeedSmaPagePositionDesired,
            left: 0,
            behavior: "smooth",
        });
    });
});