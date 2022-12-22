/**
 * Define Global Variables
 *
*/
let navlistItems = document.querySelector(".navbar__items"),
    sections = document.querySelectorAll("section");

    // build the nav
    function createNewList() {
        for(sec of sections) {
            let createNewListItem = document.createElement("li");
            createNewListItem.innerHTML = `<li><a href="#${sec.id}" data-nav=${sec.id} class="menu__link">${sec.dataset.nav}</a>`;
            navlistItems.appendChild(createNewListItem);
        }
    }
    createNewList();



    // Add class 'active' to section when near top of viewport
    document.addEventListener('scroll', () => {
        sections.forEach((section) => {
            if(section.getBoundingClientRect().top >= -250 && section.getBoundingClientRect().top <= 100) {
                section.classList.add("your-active-class");
            } else {
                section.classList.remove("your-active-class");
            }
        });
    })


    // Scroll to anchor ID using scrollTO event

    navlistItems.addEventListener('click', (scrolling) => {
        scrolling.preventDefault();
        if(scrolling.target.dataset.nav) {
            let getElement = document.querySelector(`#${scrolling.target.dataset.nav}`);
            getElement.scrollIntoView({behavior: "smooth"});
        }
    })
