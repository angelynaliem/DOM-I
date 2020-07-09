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


// Get the nav items to show up. WHY DO WE NEED TO PUT INDEX 0 HERE?
let navItems = document.querySelectorAll("a");

let navItem1 = navItems[0].textContent = siteContent["nav"]["nav-item-1"];
let navItem2 = navItems[1].textContent = siteContent["nav"]["nav-item-2"];
let navItem3 = navItems[2].textContent = siteContent["nav"]["nav-item-3"];
let navItem4 = navItems[3].textContent = siteContent["nav"]["nav-item-4"];
let navItem5 = navItems[4].textContent = siteContent["nav"]["nav-item-5"];
let navItem6 = navItems[5].textContent = siteContent["nav"]["nav-item-6"];

// Add two new nav items using append and prepend
let navigation = document.querySelector("nav");
let newNavItem1 = document.createElement("a");
newNavItem1.textContent = "Sign Up";
newNavItem1.style.color = "green";
navigation.appendChild(newNavItem1);

let newNavItem2 = document.createElement("a");
newNavItem2.textContent = "Log In";
newNavItem2.style.color = "green";
navigation.prepend(newNavItem2);

// Get h1 text to show up
let h1 = document.querySelector("h1");
h1.textContent = siteContent["cta"]["h1"];
h1.textContent = "DOM\nIs\nAwesome";
h1.style = "white-space: pre";

// Get button content to show up
let button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];

// Get the round image to show up
let imgSrc = document.getElementById("cta-img");
imgSrc.setAttribute('src', siteContent["cta"]["img-src"]);

// Get all the h4 content to show up
let h4s = document.querySelectorAll("h4");

let featuresh4 = h4s[0].textContent = siteContent["main-content"]["features-h4"];
let abouth4 = h4s[1].textContent = siteContent["main-content"]["about-h4"];
let servicesh4 = h4s[2].textContent = siteContent["main-content"]["services-h4"];
let producth4 = h4s[3].textContent = siteContent["main-content"]["product-h4"];
let visionh4 = h4s[4].textContent = siteContent["main-content"]["vision-h4"];
let contacth4 = h4s[5].textContent = siteContent["contact"]["contact-h4"];

// Get the middle image to show up
let middleImgSrc = document.getElementById("middle-img");
middleImgSrc.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Get all the p content to show up
let ps = document.querySelectorAll("p");

let featuresContent = ps[0].textContent = siteContent["main-content"]["features-content"];
let aboutContent = ps[1].textContent = siteContent["main-content"]["about-content"];
let servicesContent = ps[2].textContent = siteContent["main-content"]["services-content"];
let productContent = ps[3].textContent = siteContent["main-content"]["product-content"];
let visionContent = ps[4].textContent = siteContent["main-content"]["vision-content"];
let address = ps[5].textContent = siteContent["contact"]["address"];

ps[5].textContent = "123 Way 456 Street \n Somewhere, USA";
ps[5].style = "white-space: pre";

let phone = ps[6].textContent = siteContent["contact"]["phone"];
let email = ps[7].textContent = siteContent["contact"]["email"];
let copyright = ps[8].textContent = siteContent["footer"]["copyright"];

// Change the nav items color to green
navItems[0].style.color = 'green';
navItems[1].style.color = 'green';
navItems[2].style.color = 'green';
navItems[3].style.color = 'green';
navItems[4].style.color = 'green';
navItems[5].style.color = 'green';
navItems[6].style.color = 'green';











