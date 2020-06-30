const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navItems = document.querySelectorAll("a");

let navItem1 = navItems[0].textContent = siteContent["nav"]["nav-item-1"];
let navItem2 = navItems[1].textContent = siteContent["nav"]["nav-item-2"];
let navItem3 = navItems[2].textContent = siteContent["nav"]["nav-item-3"];
let navItem4 = navItems[3].textContent = siteContent["nav"]["nav-item-4"];
let navItem5 = navItems[4].textContent = siteContent["nav"]["nav-item-5"];
let navItem6 = navItems[5].textContent = siteContent["nav"]["nav-item-6"];

let h1 = document.querySelector("h1");
h1.textContent = siteContent["cta"]["h1"];

let button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];

let imgSrc = document.getElementById("cta-img");
imgSrc.setAttribute('src', siteContent["cta"]["img-src"]);

// let featuresh4 = document.querySelector(".main-content", ".top-content", ".text-content", "h4");
// featuresh4.textContent = siteContent["main-content"]["features-h4"];

// let featuresContent = document.querySelector(".main-content", ".top-content", ".text-content", "p");
// featuresContent.textContent = siteContent["main-content"]["features-content"];

let h4s = document.querySelectorAll("h4");

let featuresh4 = h4s[0].textContent = siteContent["main-content"]["features-h4"];
let abouth4 = h4s[1].textContent = siteContent["main-content"]["about-h4"];
let servicesh4 = h4s[2].textContent = siteContent["main-content"]["services-h4"];
let producth4 = h4s[3].textContent = siteContent["main-content"]["product-h4"];
let visionh4 = h4s[4].textContent = siteContent["main-content"]["vision-h4"];

let middleImgSrc = document.getElementById("middle-img");
middleImgSrc.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let ps = document.querySelectorAll("p");

let featuresContent = ps[0].textContent = siteContent["main-content"]["features-content"];
let aboutContent = ps[1].textContent = siteContent["main-content"]["about-content"];
let servicesContent = ps[2].textContent = siteContent["main-content"]["services-content"];
let productContent = ps[3].textContent = siteContent["main-content"]["product-content"];
let visionContent = ps[4].textContent = siteContent["main-content"]["vision-content"];









