const menuButton = document.getElementById('menuButton');
const NevLinks = document.getElementById('NevLinks');
const menuIcon = document.getElementById('menuIcon');
menuButton.addEventListener('click',()=>{
    console.log('clicked')
    menuIcon.classList.toggle('fa-x')
    NevLinks.classList.toggle('NevLinksResponsive');
    // NevLinks.classList.toggle('NevLinksTransiontion')
})