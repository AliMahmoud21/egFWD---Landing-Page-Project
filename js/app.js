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
    window.onscroll = function() {
        sections.forEach(function(section) {
            if(section.getBoundingClientRect().top >= -150 && section.getBoundingClientRect().top <= 100) {
                section.classList.add("your-active-class");
            } else {
                section.classList.remove("your-active-class");
            }
        });
    }


// I was trying something but it doesn't work :)
// The class in the next code will be added to every section

// window.onscroll = function() {
//     sections.forEach(function(sec) {
//         if(window.scrollY >= -400) {
//             sec.classList.add("your-active-class");
//         } else if(window.scrollY <= 150) {
//             sec.classList.add("your-active-class");
//         } else {
//             sec.classList.remove("your-sec-class");
//         }
//     })
// }


    navlistItems.addEventListener('click', (scrolling) => {
        scrolling.preventDefault();
        if(scrolling.target.dataset.nav) {
            let getElement = document.querySelector(`#${scrolling.target.dataset.nav}`);
            getElement.scrollIntoView({behavior: "smooth"});
        }
    })


