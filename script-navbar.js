function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

function checkWindowWidth() {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 600) {
        hideSidebar();
    }
}

window.addEventListener('resize', checkWindowWidth);
checkWindowWidth();