/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
// All sections
let sections = document.querySelectorAll('section')

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// Add check if section is near top of viewport
function topViewportCheck(element){
    const rect = element.getBoundingClientRect();
    // checking if top of section is below top of viewport and iftop of section is within 200 pixels of the top of the viewport
    return rect.top >= 0 && rect.top <= 200;
}
// Looping through sections
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// build the nav
function buildNav (){
    // store UL in a variable
    const nav = document.getElementById('navbar__list');

    sections.forEach(section => {
        // storing the data-nav attribute value in a variable 
        const liText = section.dataset.nav
        // Create a list element
        const navLi = document.createElement('li');

        // creating a link element for each li
        const liLink = document.createElement('a');
        liLink.innerText = liText;
        liLink.href = `#${section.id}`;
        // Add class for link styling from css
        liLink.classList.add('menu__link')

        // smooth scrolling
        // Scroll to anchor ID using scrollTO event
        // Scroll to section on link click
        liLink.addEventListener('click', function(event) {
            event.preventDefault(); 
            const topPosition = section.offsetTop;
            window.scrollTo({
                top: topPosition,
                behavior: 'smooth' 
            });
        });      

        navLi.appendChild(liLink);
        nav.appendChild(navLi);
    });
}

// Set sections as active


function setActive(){
    sections.forEach(section => {
        if(topViewportCheck(section)){
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}




/**
 * End Main Functions
 * Begin Events
 * 
*/
document.addEventListener('DOMContentLoaded', buildNav);
window.addEventListener('scroll', setActive);






