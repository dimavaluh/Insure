const menuItems = Array.from(document.querySelectorAll('.menu-item'));

for (let menuItem of menuItems) {
    menuItem.addEventListener('click', changeSelectedMenuItem);
}

function changeSelectedMenuItem() {
    for (let menuItem of menuItems) {
        menuItem.classList.remove('selected-item')
    }
    this.classList.add('selected-item');
}
