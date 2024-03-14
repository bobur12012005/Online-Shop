let counter = document.querySelector('.top h1')
let count = 0

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
            product_add_btn.classList.toggle('product-add_btn-active');
            if (product_add_btn.classList.contains('product-add_btn-active')) {
                product_add_btn.innerHTML = 'Добавлено'
                count+=1
                counter.innerHTML = 'Количество товаров в корзине: ' + count
            } else {
                product_add_btn.innerHTML = 'В корзину'
                count-=1
                counter.innerHTML = 'Количество товаров в корзине: ' + count
            }
        }
    }
}
    console.log(count);