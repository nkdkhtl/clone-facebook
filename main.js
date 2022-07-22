const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const moreBtn = $('.footer-more')
const moreMenu = $('.footer-more--menu')

//Xu li su khien click More
document.onclick = function(e) {
    if(e.target === moreBtn) {
        moreMenu.classList.replace('inactive', 'active')
    } else {
        moreMenu.classList.replace('active', 'inactive')
    }
} 


