let isOpen = true

if (isOpen) {
  let html =
    '<img class="hamburger" src="./pictures/menu/Hamburger_menu_white.svg" />'
  document.getElementById("menuBTN").innerHTML = html
} else {
  let html = '<img class="hamburger" src="./pictures/menu/x_menu_white.svg" />'
  document.getElementById("menuBTN").innerHTML = html
}

function clic() {
  isOpen = !isOpen

  if (isOpen) {
    let html =
      '<img class="hamburger" src="./pictures/menu/Hamburger_menu_white.svg" />'
    document.getElementById("menuBTN").innerHTML = html
  } else {
    let html =
      '<img class="hamburger" src="./pictures/menu/x_menu_white.svg" />'
    document.getElementById("menuBTN").innerHTML = html
  }
}
