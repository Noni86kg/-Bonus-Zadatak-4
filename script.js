const btnMobHamb = document.querySelector(".mob-hamb");
const mobNav = document.querySelector(".mob-nav");
const mobNavClose = document.querySelector(".close-btn");
const headerLogo = document.querySelector(".header-logo");
const group30 = document.querySelectorAll(".group-30");
const bodColor = document.querySelectorAll(".bod-color");
const iluHero1 = document.querySelector(".ilu-hero1");
const group35H2 = document.querySelector(".group35-h2");
const group35P = document.querySelector(".group35-p");
const faqDivs = document.querySelectorAll(".faq article");
const oval = document.querySelectorAll(".oval-1");
const buttBod = document.querySelector(".butt");
const mail = document.getElementById("email");
const hiddenMess = document.querySelector(".hidden-mess");
const form = document.querySelector("form");


// Header mob
btnMobHamb.addEventListener('click' , function() {
    mobNav.classList.add("active");
    btnMobHamb.classList.add("active");
    headerLogo.classList.add("active");
})
mobNavClose.addEventListener('click' , function() {
    mobNav.classList.remove("active");
    btnMobHamb.classList.remove("active");
    headerLogo.classList.remove("active");
})

//Features
group30.forEach((e) => {
    e.addEventListener('click' , function(q) {
        const clicked = q.target.closest('.group-30');

        if (clicked.children[0].textContent === "Simple Bookmarking") {
            clicked.children[0].style.color = "var(--black)"
            iluHero1.src = "images/illustration-features-tab-1.svg";
            group35H2.textContent = "Bookmark in one click";
            group35P.textContent = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";
        }   
        if (clicked.children[0].textContent === "Speedy Searching") {
            clicked.children[0].style.color = "var(--black)"
            iluHero1.src = "images/illustration-features-tab-2.svg";
            group35H2.textContent = "Intelligent search";
            group35P.textContent = "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
        }
        if (clicked.children[0].textContent === "Easy Sharing") {
            clicked.children[0].style.color = "var(--black)"
            iluHero1.src = "images/illustration-features-tab-3.svg";
            group35H2.textContent = "Share your bookmarks";
            group35P.textContent = "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
        }

        group30.forEach((a) => {
            a.classList.remove("active");
        })
        bodColor.forEach((s) => {
            s.classList.remove("active");
        })
        e.classList.add("active");
        e.children[1].classList.add("active");
    })
})

//FAQ
faqDivs.forEach((faqDiv) => {
    faqDiv.addEventListener("click", function(e) {

        if(faqDiv.children[1].classList.contains("active")){
            faqDiv.children[1].classList.remove("active");
            faqDiv.children[0].children[1].classList.remove("active");
            faqDiv.children[0].children[0].style.color = "var(--black)"
        } else {
        faqDivs.forEach((e) => {
        e.children[1].classList.remove("active");
        e.children[0].children[1].classList.remove("active");
        faqDiv.children[0].children[0].style.color = "var(--black)"
        })
        faqDiv.children[1].classList.add("active");
        faqDiv.children[0].children[1].classList.add("active");
        faqDiv.children[0].children[0].style.color = "var(--black)"
        }
    })
})

//Mail
function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function emailFunc() {

    if (!validateEmail(mail.value)) {
        hiddenMess.classList.add("active");
        email.placeholder ='example@email/com';
        email.classList.add("placeholder-red");
    } else if (validateEmail(mail.value)) {
        hiddenMess.classList.remove("active");
        email.placeholder ='Enter your email address';
        email.classList.remove("placeholder-red");
    }
  }

  buttBod.addEventListener("click", function(e) {
    e.preventDefault();
    emailFunc();
  });

  email.addEventListener("click", function() {
    email.addEventListener('keydown', (event) => {
        if ( event.key === "Enter") {
            event.preventDefault();
            emailFunc();
        }
    })
  })