var message = "This is Griffin Jones' Landing Page";
function a() { 
    alert(message);
}
a();

let sectionArray = [];
for(const value of document.querySelectorAll("section")) {
    sectionArray.push([value.getAttribute('id'),value.getAttribute('data-nav')]); 
}

const navMenu = document.getElementById('navbar__list');
const docFrag = document.createDocumentFragment();
for (section of sectionArray){
  const navList = document.createElement('li');
  const docTag = document.createElement('a');
  docTag.href = '#' + section[0];
  docTag.textContent = section[1];
  navList.appendChild(docTag);
  docFrag.appendChild(navList);
}
navMenu.appendChild(docFrag);

document.querySelectorAll('a[href^="#"]').forEach( anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        })
    })
})

function topFunction() {
    document.body.scrollTop = 0; 
}


