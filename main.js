const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const  moreFooter = $('.footer-more')
const rightNavbar = $('.navbar_right')
const navTabs = $('.nav-tabs')
const navbarNotifications = $('.navbar__notifications')
const navbarCreate = $('.navbar__create')
const navbarProfile = $('.navbar_right_profile>img')

// Finding hidden tabs 
function getHiddenElement(element) {
    while (element.parentElement) {
        if (element.parentElement && element.nextElementSibling) {
            const childElements = Array.from(element.children)
            // if (window.getComputedStyle(element.nextElementSibling).display === 'none') {
            //     return element.parentElement
            // }
            // if (element.parentElement.classList.contains('active')) {
            //     return element.parentElement.classList.remove('active')
            // }
            
        }
        element = element.parentElement
    }
     
}
        
navTabs.onclick = function(e) {
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
    
    
}
rightNavbar.onclick = function(e) {
    const button = e.target
    const hiddenElement  =  getHiddenElement(button)
}
