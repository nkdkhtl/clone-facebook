const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const leftNavbar = $('.navbar_left')
const rightNavbar = $('.navbar_right')
const navTabs = $('.nav-tabs')
const close = $('.create-post-tab-close')
const createPostTab = $('.create-post-tab')
const inputBar = $('.status-texting')

// Handle button
function getHiddenElement(element,selector) {
    // Finding the previous active elements and remove
    var preActiveElements = selector.getElementsByClassName('active')
    console.log(preActiveElements)
    if (preActiveElements) {
        Array.from(preActiveElements).forEach(function(preActiveElement) {
            preActiveElement.classList.remove('active')
        })
    }
    //  Finding the display="none" element and adding class active to its parent 
    while (element.parentElement) {
        const childElements = Array.from(element.children)
        if (childElements) {
            for (let i = 0;i<childElements.length;i++) {    
                if (window.getComputedStyle(childElements[i]).display === "none") {
                    childElements[i].parentElement.classList.add('active')
                }
            }
            
        }
        element = element.parentElement
    }
}   

        
document.onclick = function(e) {
    const button = e.target
    Array.from(button.classList).find(function(className) {
        if (className === 'active') {
            const hiddenTabs = button.parentElement.querySelectorAll(`.hidden`)
            const visibleTabs = e.target.parentElement.querySelectorAll(`.visible`)

            // See more
            if (hiddenTabs) {
                Array.from(hiddenTabs).forEach(function(hiddenTab) {
                    hiddenTab.classList.replace('hidden', 'visible')
                })    
            }

            // See less
            if(visibleTabs) {
                Array.from(visibleTabs).forEach(function(visibleTab) {
                    visibleTab.classList.replace( 'visible','hidden')
                })
            }

            // Thay doi button 
            if(button.parentElement.querySelector('.inactive')) {
                button.parentElement.querySelector('.inactive').classList.replace('inactive','active')
                button.classList.replace('active','inactive')
            }
        }    
    })
    // Button
    getHiddenElement(button,rightNavbar)
    getHiddenElement(button,leftNavbar)
    
    // Hardcoded
    if (e.target === inputBar ) {
        createPostTab.classList.remove('hidden')
    }
    // if (e.target === ) 

}

