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
    setTimeout(function() {
        close_busket.style.backgroundImage = 'url(../icons/close.svg)'
    }, 200)
}
busket_menu.onmouseleave = () => {
    setTimeout(function() {
        close_busket.style.backgroundImage = ''
    }, 0)
}

let item = document.createElement('div')
let img_div = document.createElement('div')
let item_img = document.createElement('img')
let item_staff = document.createElement('div')
let i_cot = document.createElement('span')
let i_def = document.createElement('span')
let item_counter = document.createElement('div')
let item_amount = document.createElement('span')
let item_plus = document.createElement('button')
let item_minus = document.createElement('button')

item.classList.add('item')
img_div.classList.add('img_div')
item_img.classList.add('item_img')
item_staff.classList.add('item_staff')
i_cot.classList.add('i_cot')
i_def.classList.add('i_def')
item_counter.classList.add('item_counter')
item_amount.classList.add('apm')
item_plus.classList.add('apm')
item_minus.classList.add('apm')

item_img.src = 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
i_cot.innerHTML = "men's clothing"
i_def.innerHTML = 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
item_amount.innerHTML = '0'
item_plus.innerHTML = '+'
item_minus.innerHTML = '-'

menu_container.append(item)
item.append(img_div, item_staff, item_counter)
img_div.append(item_img)
item_staff.append(i_cot, i_def)
item_counter.append(item_plus, item_amount, item_minus)