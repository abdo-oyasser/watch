


// -----------------------------
// search----------
// -----------------------------
let search = document.querySelector(".search")
let inputSearch = document.querySelector(".input")
search.onclick = function () {
    if (inputSearch.style.display === "block") {
        inputSearch.style.display = "none"
    } else {
        inputSearch.style.display = "block"
    }
}
// ---------------------------------
// change  imgs and text
// ---------------------------------
let num1 = 1
let num2 = 2
let num3 = 3


let imgTop = document.querySelector(".img-box-1 img")
let imgMid = document.querySelector(".img-box-2 img")
let imgBottom = document.querySelector(".img-box-3 img")
let imgTopBox = document.querySelector(".img-box-1")
let imgMidBox = document.querySelector(".img-box-2")
let imgBottomBox = document.querySelector(".img-box-3")
let allBoxes = document.querySelector(".img-boxes")
let main = document.querySelector(".main-watch img")
let lbtn = document.querySelector(".lbtn")
let rbtn = document.querySelector(".rbtn")
let allText = document.querySelector(".ltext")
let textFirst = document.querySelector(".first")
let textSecond = document.querySelector(".border")
let price = document.querySelector(".ltext h3")
let container = document.querySelector(".container")
let input = document.querySelector(".left input")

let obj = {
    "./images/pngwing.com (0).png": 0,
    "./images/pngwing.com (1).png": 1,
    "./images/pngwing.com (2).png": 2,
    "./images/pngwing.com (3).png": 3,
    "./images/pngwing.com (4).png": 4
}
function changeCartColor() {
    if (window.matchMedia("(max-width:1000px)").matches) {
        if (window.matchMedia("(min-width:767px)").matches) {
            if (container.style.backgroundColor === "bisque" || container.style.backgroundColor == "rgb(221, 221, 221)") {
                cart.style.color = "black"
            } else {
                cart.style.color = "white"
            }
        }

    }
}
function test() {
    let textnum = obj[main.getAttribute("src")]
    if (textnum === 0) {
        textFirst.textContent = "MONTBLANC"
        textSecond.textContent = "AUTOMATIC"
        price.textContent = "$350.00"
        container.style.backgroundColor = "silver"
    } else if (textnum === 1) {
        textFirst.textContent = "GEORG"
        textSecond.textContent = "JENSEN"
        price.textContent = "$230.00"
        container.style.backgroundColor = "#795548"
    }
    if (textnum === 2) {
        textFirst.textContent = "SATURDAY"
        textSecond.textContent = "HAMILTON 20"
        price.textContent = "$154.00"
        container.style.backgroundColor = "bisque"
    }
    if (textnum === 3) {
        textFirst.textContent = "TISSOT"
        textSecond.textContent = "POWERMATIC 80"
        price.textContent = "$612.00"
        container.style.backgroundColor = "#ddd"
    }
    if (textnum === 4) {
        textFirst.textContent = "LUMINOR"
        textSecond.textContent = "PANERAI"
        price.textContent = "$99.00"
        container.style.backgroundColor = "#734e38"
    }
    allText.style.color = container.style.backgroundColor
    input.style.color = container.style.backgroundColor
    changeCartColor()
}


imgTop.onclick = () => {
    num1 -= 1
    num2 -= 1
    num3 -= 1
    imgTop.setAttribute("src", `./images/pngwing.com (${num1}).png`)
    imgMid.setAttribute("src", `./images/pngwing.com (${num2}).png`)
    imgBottom.setAttribute("src", `./images/pngwing.com (${num3}).png`)
    if (num1 >= 5 || num1 < 0) {
        imgTopBox.style.display = "none"
        allBoxes.style.justifyContent = "flex-end"
        lbtn.style.display = "none"
    }
    if (num3 < 5 || num3 >= 0) {
        imgBottomBox.style.display = "block"
        rbtn.style.display = "block"
    }
    main.setAttribute("src", imgMid.getAttribute("src"))
    test()
}
imgBottom.onclick = () => {
    num1 += 1
    num2 += 1
    num3 += 1
    imgTop.setAttribute("src", `./images/pngwing.com (${num1}).png`)
    imgMid.setAttribute("src", `./images/pngwing.com (${num2}).png`)
    imgBottom.setAttribute("src", `./images/pngwing.com (${num3}).png`)
    if (num3 >= 5 || num3 < 0) {
        imgBottomBox.style.display = "none"
        allBoxes.style.justifyContent = "flex-start"
        rbtn.style.display = "none"
    }
    if (num1 < 5 || num1 >= 0) {
        imgTopBox.style.display = "block"
        lbtn.style.display = "block"
    }
    main.setAttribute("src", imgMid.getAttribute("src"))
    test()
}
lbtn.onclick = () => {
    num1 -= 1
    num2 -= 1
    num3 -= 1
    imgTop.setAttribute("src", `./images/pngwing.com (${num1}).png`)
    imgMid.setAttribute("src", `./images/pngwing.com (${num2}).png`)
    imgBottom.setAttribute("src", `./images/pngwing.com (${num3}).png`)
    if (num1 >= 5 || num1 < 0) {
        imgTopBox.style.display = "none"
        allBoxes.style.justifyContent = "flex-end"
        lbtn.style.display = "none"
    }
    if (num3 < 5 || num3 >= 0) {
        imgBottomBox.style.display = "block"
        rbtn.style.display = "block"
    }
    main.setAttribute("src", imgMid.getAttribute("src"))
    test()
}
rbtn.onclick = () => {
    num1 += 1
    num2 += 1
    num3 += 1
    imgTop.setAttribute("src", `./images/pngwing.com (${num1}).png`)
    imgMid.setAttribute("src", `./images/pngwing.com (${num2}).png`)
    imgBottom.setAttribute("src", `./images/pngwing.com (${num3}).png`)

    if (num3 >= 5 || num3 < 0) {
        imgBottomBox.style.display = "none"
        allBoxes.style.justifyContent = "flex-start"
        rbtn.style.display = "none"
    }
    if (num1 < 5 || num1 >= 0) {
        imgTopBox.style.display = "block"
        lbtn.style.display = "block"
    }
    main.setAttribute("src", imgMid.getAttribute("src"))
    test()
}
// -----------------------------
// search
// -----------------------------
let searchIcon = document.querySelector(".input i")
searchIcon.onclick = () => {
    let searchValue = input.value
    if (searchValue.toUpperCase() === "MONTBLANC") {
        num1 = 0
        num2 = 1
        num3 = 2
        lbtn.click()
        if (num1 >= 5 || num1 < 0) {
            imgTopBox.style.display = "none"
            allBoxes.style.justifyContent = "flex-end"
            lbtn.style.display = "none"
        }
        if (num3 < 5 || num3 >= 0) {
            imgBottomBox.style.display = "block"
            rbtn.style.display = "block"
        }
    }
    else if (searchValue.toUpperCase() === "GEORG") {
        num1 = 1
        num2 = 2
        num3 = 3
        lbtn.click()
    }
    else if (searchValue.toUpperCase() === "SATURDAY") {
        num1 = 2
        num2 = 3
        num3 = 4
        lbtn.click()
    }
    else if (searchValue.toUpperCase() === "TISSOT") {
        num1 = 3
        num2 = 4
        num3 = 5
        lbtn.click()
    }
    else if (searchValue.toUpperCase() === "LUMINOR") {
        num1 = 4
        num2 = 5
        num3 = 6
        lbtn.click()
        if (num3 >= 5 || num3 < 0) {
            imgBottomBox.style.display = "none"
            allBoxes.style.justifyContent = "flex-start"
            rbtn.style.display = "none"
        }
        if (num1 < 5 || num1 >= 0) {
            imgTopBox.style.display = "block"
            lbtn.style.display = "block"
        }
    } else {
        console.log("notfound");
    }
}
// -------------------------------
//Cart
// -------------------------------

let addCart = document.querySelector(".add")
let cart = document.querySelector(".cart")
let cartContent = document.querySelector(".cart p")
let realCart = document.querySelector(".realcart")
let cartCounter = 0
let productOneCounter = 0
let productTwoCounter = 0
let productThreeCounter = 0
let productFourCounter = 0
let productFiveCounter = 0
let deleteOne = document.querySelector(".realcart .num .delete-0")
let deleteTwo = document.querySelector(".realcart .num .delete-1")
let deleteThree = document.querySelector(".realcart .num .delete-2")
let deleteFour = document.querySelector(".realcart .num .delete-3")
let deleteFive = document.querySelector(".realcart .num .delete-4")
let priceAllValue = document.querySelector(".allprice")
let shop = document.querySelector(".shop")
let cancel = document.querySelector(".cancel")
// let proOne = document.querySelector(".realcart  .product-0")
// let proTwo = document.querySelector(".realcart  .product-1")
// let proThree = document.querySelector(".realcart  .product-2")
// let proFour = document.querySelector(".realcart  .product-3")
// let proFive = document.querySelector(".realcart  .product-4")
function priceAll() {
    let priceOne = productOneCounter * 350
    let priceTwo = productTwoCounter * 230
    let priceThree = productThreeCounter * 154
    let priceFour = productFourCounter * 612
    let priceFive = productFiveCounter * 99
    let priceAllText = priceOne + priceTwo + priceThree + priceFour + priceFive
    priceAllValue.textContent = `$${priceAllText.toFixed(2)}`
    if (realCart.style.display == "flex") {
        container.style.opacity = "0.5"
    }
    if (realCart.style.display == "none") {
        container.style.opacity = "1"
    }
}
function addToCart() {
    if (main.getAttribute("src") === "./images/pngwing.com (0).png") {
        productOneCounter += 1
        document.querySelector(".product-0 .num p").textContent = `(${productOneCounter})`
    } else if (main.getAttribute("src") === "./images/pngwing.com (1).png") {
        productTwoCounter += 1
        document.querySelector(".product-1 .num p").textContent = `(${productTwoCounter})`
    } else if (main.getAttribute("src") === "./images/pngwing.com (2).png") {
        productThreeCounter += 1
        document.querySelector(".product-2 .num p").textContent = `(${productThreeCounter})`
    } else if (main.getAttribute("src") === "./images/pngwing.com (3).png") {
        productFourCounter += 1
        document.querySelector(".product-3 .num p").textContent = `(${productFourCounter})`
    } else if (main.getAttribute("src") === "./images/pngwing.com (4).png") {
        productFiveCounter += 1
        document.querySelector(".product-4 .num p").textContent = `(${productFiveCounter})`
    }
}
function displayInCart() {
    if (productOneCounter > 0) {
        document.querySelector(".realcart .product-0").style.display = "flex"
    }
    if (productTwoCounter > 0) {
        document.querySelector(".product-1").style.display = "flex"
    }
    if (productThreeCounter > 0) {
        document.querySelector(".product-2").style.display = "flex"
    }
    if (productFourCounter > 0) {
        document.querySelector(".product-3").style.display = "flex"
    }
    if (productFiveCounter > 0) {
        document.querySelector(".product-4").style.display = "flex"
    }
}
function HideInCart() {
    if (productOneCounter <= 0) {
        document.querySelector(".realcart .product-0").style.display = "none"
    }
    if (productTwoCounter <= 0) {
        document.querySelector(".product-1").style.display = "none"
    }
    if (productThreeCounter <= 0) {
        document.querySelector(".product-2").style.display = "none"
    }
    if (productFourCounter <= 0) {
        document.querySelector(".product-3").style.display = "none"
    }
    if (productFiveCounter <= 0) {
        document.querySelector(".product-4").style.display = "none"
    }
}
deleteOne.onclick = () => {
    cartCounter -= 1
    cartContent.textContent = `Cart (${cartCounter})`
    productOneCounter -= 1
    document.querySelector(".product-0 .num p").textContent = `(${productOneCounter})`
    HideInCart()
    priceAll()
}
deleteTwo.onclick = () => {
    cartCounter -= 1
    cartContent.textContent = `Cart (${cartCounter})`
    productTwoCounter -= 1
    document.querySelector(".product-1 .num p").textContent = `(${productTwoCounter})`
    HideInCart()
    priceAll()
}
deleteThree.onclick = () => {
    cartCounter -= 1
    cartContent.textContent = `Cart (${cartCounter})`
    productThreeCounter -= 1
    document.querySelector(".product-2 .num p").textContent = `(${productThreeCounter})`
    HideInCart()
    priceAll()
}
deleteFour.onclick = () => {
    cartCounter -= 1
    cartContent.textContent = `Cart (${cartCounter})`
    productFourCounter -= 1
    document.querySelector(".product-3 .num p").textContent = `(${productFourCounter})`
    HideInCart()
    priceAll()
}
deleteFive.onclick = () => {
    cartCounter -= 1
    cartContent.textContent = `Cart (${cartCounter})`
    productFiveCounter -= 1
    document.querySelector(".product-4 .num p").textContent = `(${productFiveCounter})`
    HideInCart()
    priceAll()
}
addCart.onclick = () => {
    cartCounter += 1
    cartContent.textContent = `Cart (${cartCounter})`
    addToCart()
    HideInCart()
    displayInCart()
    priceAll()
}
cart.onclick = () => {
    realCart.style.display = "flex"
    HideInCart()
    priceAll()
}
shop.onclick = () => {
    realCart.style.display = "flex"
    HideInCart()
    priceAll()
}
cancel.onclick = () => {
    realCart.style.display = "none"
    HideInCart()
    priceAll()
}
