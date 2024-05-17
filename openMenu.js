let isOpen = true

let html =
  '<img class="hamburger" src="./pictures/menu/Hamburger_menu_white.svg" />'
document.getElementById("menuBTN").innerHTML = html

function clic() {
  isOpen = !isOpen

  if (isOpen) {
    html =
      '<img class="hamburger" src="./pictures/menu/Hamburger_menu_white.svg" />'
    document.getElementById("menuBTN").innerHTML = html
    closeAside()
  } else {
    html = '<img class="hamburger" src="./pictures/menu/x_menu_white.svg" />'
    document.getElementById("menuBTN").innerHTML = html
    openAside()
  }
}
