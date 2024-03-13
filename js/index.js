import { arr } from "./db.js";
import { reload } from "./ui.js";

let container = document.querySelector('.container')
let showFour = document.querySelector('#showFour')
let showFull = document.querySelector('#showFull')

reload(arr, container)

showFour.onclick = () => {
    reload(arr.slice(0, 4), container)
}
showFull.onclick = () => {
    reload(arr, container)
}