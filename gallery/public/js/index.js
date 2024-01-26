
function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}
const animatedElements = document.querySelectorAll('.animated-element');
window.addEventListener('scroll', () => {
    animatedElements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('animate');
        }
    });
});
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.onload = function () { 
let slides =  
document.getElementsByClassName('carousel-item'); 

function addActive(slide) { 
slide.classList.add('active'); 
} 

function removeActive(slide) { 
slide.classList.remove('active'); 
} 

addActive(slides[0]); 
setInterval(function () { 
for (let i = 0; i < slides.length; i++) { 
    if (i + 1 == slides.length) { 
        addActive(slides[0]); 
        setTimeout(removeActive, 350, slides[i]); 
        break; 
    } 
    if (slides[i].classList.contains('active')) { 
        setTimeout(removeActive, 350, slides[i]); 
        addActive(slides[i + 1]); 
        break; 
    } 
} 
}, 1500); 
};


