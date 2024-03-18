let menu_container = document.querySelector('.menu_container')
let counter = document.querySelector('.top h1')
let count = 0
let items_ms = []

export function reload(arr, place) {
    place.innerHTML = ""

    for (let item of arr) {
        let product_box = document.createElement('div')
        let product_img_cont = document.createElement('div')
        let product_img = document.createElement('img')
        let product_char = document.createElement('div')
        let product_type = document.createElement('span')
        let product_description = document.createElement('span')
        let product_rate_box = document.createElement('div')
        let product_price = document.createElement('div')
        let product_rating = document.createElement('div')
        let product_amount = document.createElement('div')
        let product_price_img = document.createElement('img')
        let product_rating_img = document.createElement('img')
        let product_amount_img = document.createElement('img')
        let product_price_txt = document.createElement('span')
        let product_rating_txt = document.createElement('span')
        let product_amount_txt = document.createElement('span')
        let product_add_btn = document.createElement('button')

        product_box.classList.add('product-box')
        product_img_cont.classList.add('product-img_cont')
        product_img.classList.add('product-img')
        product_char.classList.add('product-char')
        product_type.classList.add('product-type')
        product_description.classList.add('product-description')
        product_rate_box.classList.add('product-rate_box')
        product_price.classList.add('pra_place')
        product_rating.classList.add('pra_place')
        product_amount.classList.add('pra_place')
        product_price_txt.classList.add('pra_txt')
        product_rating_txt.classList.add('pra_txt')
        product_amount_txt.classList.add('pra_txt')
        product_add_btn.classList.add('product-add_btn')

        product_img.src = item.image
        product_price_img.src = './icons/price.svg'
        product_rating_img.src = './icons/rating.svg'
        product_amount_img.src = './icons/amount.svg'

        product_type.innerHTML = item.category
        product_description.innerHTML = item.description
        product_price_txt.innerHTML = item.price
        product_rating_txt.innerHTML = item.rating.rate
        product_amount_txt.innerHTML = item.rating.count
        product_add_btn.innerHTML = 'В корзину'

        place.append(product_box)
        product_box.append(product_img_cont, product_char)
        product_img_cont.append(product_img)
        product_char.append(product_type, product_description, product_rate_box, product_add_btn)
        product_rate_box.append(product_price, product_rating, product_amount)
        product_price.append(product_price_img, product_price_txt)
        product_rating.append(product_rating_img, product_rating_txt)
        product_amount.append(product_amount_img, product_amount_txt)

        product_add_btn.onclick = () => {
            product_add_btn.classList.toggle('product-add_btn-active')

            if (product_add_btn.classList.contains('product-add_btn-active')) {
                product_add_btn.innerHTML = 'Добавлено'
                count += 1
                counter.innerHTML = 'Количество товаров в корзине: ' + count
                items_ms.push(item)
                reloadMenu(items_ms, menu_container)
            } else {
                product_add_btn.innerHTML = 'В корзину'
                count -= 1
                counter.innerHTML = 'Количество товаров в корзине: ' + count
                let deleteItem = items_ms.findIndex((elem) => elem === item)

                if (deleteItem !== -1) {
                    items_ms.splice(deleteItem, 1)
                }
                reloadMenu(items_ms, menu_container)
            }
        }
    }
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
        let oth_staff = document.createElement('div')
        let elem_counter = document.createElement('div')
        let elem_del = document.createElement('button')
        let elem_del_icon = document.createElement('img')
        let elem_amount = document.createElement('span')
        let elem_plus = document.createElement('button')
        let elem_minus = document.createElement('button')

        elem.classList.add('item')
        img_div.classList.add('img_div')
        elem_img.classList.add('item_img')
        elem_staff.classList.add('item_staff')
        i_cot.classList.add('i_cot')
        i_def.classList.add('i_def')
        oth_staff.classList.add('oth_staff')
        elem_counter.classList.add('item_counter')
        elem_del.classList.add('elem_del')
        elem_amount.classList.add('apm')
        elem_plus.classList.add('apm')
        elem_minus.classList.add('apm')
        elem_del_icon.classList.add('elem_del_icon')

        elem_img.src = item.image
        elem_del_icon.src = './icons/delete.png'
        i_cot.innerHTML = item.category
        i_def.innerHTML = item.title
        elem_amount.innerHTML = '0'
        elem_plus.innerHTML = '+'
        elem_minus.innerHTML = '-'

        place.append(elem)
        elem.append(img_div, elem_staff, oth_staff)
        img_div.append(elem_img)
        elem_staff.append(i_cot, i_def)
        oth_staff.append(elem_counter, elem_del)
        elem_counter.append(elem_plus, elem_amount, elem_minus)
        elem_del.append(elem_del_icon)

        elem_del.onclick = () => {
            let deleteItem = items_ms.findIndex((e) => e === item)

            if (deleteItem !== -1) {
                items_ms.splice(deleteItem, 1)
                count -= 1
                counter.innerHTML = 'Количество товаров в корзине: ' + count
                elem.remove()

                let btns = document.querySelectorAll('.product-add_btn')
                btns.forEach((btn, idx) => {
                    if (idx === deleteItem) {
                        btn.classList.remove('product-add_btn-active')
                        btn.innerHTML = 'В корзину'
                    }
                })
            }
        }
    }
}