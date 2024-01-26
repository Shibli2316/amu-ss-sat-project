// JavaScript code for the slideshow

let slideIndex = 0;

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slide");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Add your sponsor logos and QR codes dynamically
const sponsors = [
    { logo: "sponsor1.png", qrCode: "qr_code_sponsor1.png" },
    { logo: "sponsor2.png", qrCode: "qr_code_sponsor2.png" },
    // Add more sponsors as needed
];


// JavaScript code for adding cards dynamically

const contributors = [
    { name: "Mr. Mohammad Saif", company_name:"Business Head" , address:"BigBasket , Mumbai", logo: "bigbasket_logo.png" },
    { name: "Mr. Shaheedul Hasan",company_name:"C.O.O." , address:"KP Group, Surat", logo: "KP_GROUP.jpg" },
    { name: "Mr. Sarfraz Khan",company_name:"Senior Integration Architect" , address:"Macquarie Group , Australia", logo: "macquariegroup_logo.jpg" },
    
    // Add more contributors as needed
];

document.addEventListener("DOMContentLoaded", function () {
    const cardContainer = document.querySelector(".card-container");

    contributors.forEach((contributor) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${contributor.logo}" alt="${contributor.name} Logo">
            <h3>${contributor.name}</h3>
            <h4>${contributor.company_name}</h4>
            <h4>${contributor.address}</h4>
        `;
        cardContainer.appendChild(card);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const slideshowContainer = document.querySelector(".slideshow-container");

    sponsors.forEach((sponsor, index) => {
        const slide = document.createElement("div");
        slide.classList.add("slide");
        slide.innerHTML = `<img src="${sponsor.logo}" alt="Sponsor ${index + 1}">`;
        slideshowContainer.appendChild(slide);
    });

    showSlides(); // Start the slideshow
});
