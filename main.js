const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const  moreFooter = $('.footer-more')

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
    if(e.target == moreFooter) {
        if(moreFooter.parentElement.querySelector('.hidden')) {
            moreFooter.parentElement.querySelector('.hidden').classList.replace('hidden', 'visible')
        } else {
            moreFooter.parentElement.querySelector('.visible').classList.replace( 'visible','hidden')
        }
    } else {
        moreFooter.parentElement.querySelector('.visible').classList.replace( 'visible','hidden')
    }
}
