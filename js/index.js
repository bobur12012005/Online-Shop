import { arr } from "./db.js";
import { reload } from "./ui.js";

let container = document.querySelector('.container')
let showFour = document.querySelector('#showFour')
let showFull = document.querySelector('#showFull')
let busket_menu = document.querySelector('#busket-menu')
let open_busket = document.querySelector('#busket')
let close_busket = document.querySelector('.menu_title button')

reload(arr, container)

showFour.onclick = () => {
    reload(arr.slice(0, 4), container)
}
showFull.onclick = () => {
    reload(arr, container)
}
open_busket.onclick = () => {
    busket_menu.style.right = '0'
}
close_busket.onclick = () => {
    busket_menu.style.right = '-530px'
}
busket_menu.onmouseenter = () => {
    setTimeout(function () {
        close_busket.innerHTML = 'CLOSE'
    }, 200)
}
busket_menu.onmouseleave = () => {
    setTimeout(function () {
        close_busket.innerHTML = ''
    }, 0)
}