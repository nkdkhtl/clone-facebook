const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const  moreFooter = $('.footer-more')
const navbarMenu = $('.navbar__menu')
const navbarMessenger = $('.navbar__messenger')
const navbarNotifications = $('.navbar__notifications')
const navbarCreate = $('.navbar__create')
const navbarProfile = $('.navbar_right_profile>img')
//Xu li su kien click
document.onclick = function(e) {
    const navBtn = e.target
    Array.from(navBtn.classList).find(function(className) {
        if (className === 'active') {
            const hiddenTabs = navBtn.parentElement.querySelectorAll(`.hidden`)
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
            if(navBtn.parentElement.querySelector('.inactive')) {
                navBtn.parentElement.querySelector('.inactive').classList.replace('inactive','active')
                navBtn.classList.replace('active','inactive')
            }
        }    
    })
    
    // Cac button
    if(e.target === navbarMenu) {
        navbarMenu.querySelector('.hidden').classList.replace('hidden','visible')
    } 
    else if (e.target === navbarCreate) {
        navbarCreate.querySelector('.hidden').classList.replace('hidden','visible')
    } 
    else if (e.target === navbarMessenger) {
        navbarMessenger.querySelector('.hidden').classList.replace('hidden','visible')
    } 
    else if (e.target === navbarNotifications) {
        navbarNotifications.querySelector('.hidden').classList.replace('hidden','visible')
    } 
    else if (e.target === moreFooter) {
        console.log(e.target)
        moreFooter.querySelector('.hidden').classList.replace('hidden','visible')
    } 
    else if (e.target === navbarProfile) {
        console.log(e.target)
        navbarProfile.querySelector('.hidden').classList.replace('hidden','visible')
    }
    else {
        e.target.querySelector('.visible').classList.replace('visible','hidden')
    }
}


