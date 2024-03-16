import { arr } from "./db.js";
import { reload } from "./ui.js";

let container = document.querySelector('.container')
let showFour = document.querySelector('#showFour')
let showFull = document.querySelector('#showFull')
let busket_menu = document.querySelector('#busket-menu')
let open_busket = document.querySelector('#busket')
let close_busket = document.querySelector('.menu_title button')
let menu_container = document.querySelector('.menu_container')

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
        close_busket.style.backgroundImage = 'url(../icons/close.svg)'
    }, 200)
}
busket_menu.onmouseleave = () => {
    setTimeout(function () {
        close_busket.style.backgroundImage = ''
    }, 0)
}

function reloadMenu(arr, place) {
    place.innerHTML = ''

    for (let item of arr) {
        let elem = document.createElement('div')
        let img_div = document.createElement('div')
        let elem_img = document.createElement('img')
        let elem_staff = document.createElement('div')
        let i_cot = document.createElement('span')
        let i_def = document.createElement('span')
        let elem_counter = document.createElement('div')
        let elem_amount = document.createElement('span')
        let elem_plus = document.createElement('button')
        let elem_minus = document.createElement('button')

        elem.classList.add('item')
        img_div.classList.add('img_div')
        elem_img.classList.add('item_img')
        elem_staff.classList.add('item_staff')
        i_cot.classList.add('i_cot')
        i_def.classList.add('i_def')
        elem_counter.classList.add('item_counter')
        elem_amount.classList.add('apm')
        elem_plus.classList.add('apm')
        elem_minus.classList.add('apm')

        elem_img.src = item.image
        i_cot.innerHTML = item.category
        i_def.innerHTML = item.title
        elem_amount.innerHTML = '0'
        elem_plus.innerHTML = '+'
        elem_minus.innerHTML = '-'

        place.append(elem)
        elem.append(img_div, elem_staff, elem_counter)
        img_div.append(elem_img)
        elem_staff.append(i_cot, i_def)
        elem_counter.append(elem_plus, elem_amount, elem_minus)
    }
}

reloadMenu(arr, menu_container)