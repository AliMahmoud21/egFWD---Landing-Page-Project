// Start importing elements
let navlistItems = document.querySelector(".navbar__items"),
    sections = document.querySelectorAll("section");

    // If we created a new section its list item will added to the navigation section
    function createNewList() {
        for(sec of sections) {
            let createNewListItem = document.createElement("li");
            createNewListItem.innerHTML = `<li><a href="#${sec.id}" data-nav=${sec.id} class="menu__link">${sec.dataset.nav}</a>`;
            navlistItems.appendChild(createNewListItem);
        }
    }
    createNewList();



// This is going to but an active class on the section that the view on it. if we move to another section the active class will be set on the new section
    document.addEventListener('scroll', () => {
        sections.forEach((section) => {
            if(section.getBoundingClientRect().top >= -250 && section.getBoundingClientRect().top <= 100) {
                section.classList.add("your-active-class");
            } else {
                section.classList.remove("your-active-class");
            }
        });
    })


    // This is going to make the scroll behavior smooth

    navlistItems.addEventListener('click', (scrolling) => {
        scrolling.preventDefault();
        if(scrolling.target.dataset.nav) {
            let getElement = document.querySelector(`#${scrolling.target.dataset.nav}`);
            getElement.scrollIntoView({behavior: "smooth"});
        }
    })



