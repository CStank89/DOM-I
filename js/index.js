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
let logo = document.getElementById("logo-img")
logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav = document.querySelector('nav')
nav.id= 'nav'

const allLinks = document.querySelectorAll('a') 
    allLinks.forEach((link, ind)=> {
      link.textContent = siteContent.nav[`nav-item-${[ind + 1]}`]
      
},0)


const h1 = document.querySelector('h1')
console.log(h1)
h1.innerHTML = 'DOM <br>is<br> Awesome'

const img1 = document.querySelector('#cta-img')
console.log(img1)
img1.setAttribute('src', '/img/header-img.png')


const button = document.querySelector('button')
console.log(button)
button.textContent = ' Get Started'

const midImg = document.querySelector('#middle-img')
console.log(midImg)
midImg.setAttribute('src', 'img/mid-page-accent.jpg')


let h4 = document.querySelectorAll('h4')
h4[0].textContent = siteContent['main-content']['features-h4']

const paragraph = document.querySelectorAll('.top content .text-content p')
console.log(paragraph)
paragraph.forEach((string, ind)=> {
        string.textContent = siteContent.main-content
        
        
  },0)

const contactList = document.querySelectorAll('.top contact h4') 
    contactList.forEach((link, ind)=> {
      link.textContent = siteContent.contact
      console.log(contactList)
      
},0)


const footer = document.querySelector('footer')
footer.textContent = "Copyright Great Idea! 2018"