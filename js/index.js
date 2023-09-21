const buyCart=document.querySelector('.buy-cart')
const overlay=document.querySelector('.overlay')
const products=document.querySelector('.products')
const showMoreBtn=document.querySelector('.showmore-btn')
const categoriesList=document.querySelector('.products-nav')
const categories=document.querySelectorAll('.product-btn')
const overlayProducts=document.querySelector('.overlay-products')
const overlayProductsItems=document.querySelectorAll('.buycart-card')


const dinoObjects= JSON.parse(localStorage.getItem('dinos')) || []

getBoughtDinos=()=>{
    overlayProducts.innerHTML=dinoObjects.map((pokedino)=>{
        return createChosenCardInfo(pokedino)
    }).join(' ')
}

const setDinoToLocalStorage=(dinoObject)=>{
    dinoObjects.push(dinoObject)
    localStorage.setItem('dinos',JSON.stringify(dinoObjects))
    
}

const createTemplate=(product)=>{
    const {name,period,diet,description,image,price,id}=product

    return `
    <div class="card" data-id="${id}">
    <div class="buy-bg">Buy</div>
        <p class="card-title">${name}</p>
                        <img class="card-image" src=${image} alt="">
                        <div class="card-price">${price}</div>
                        <div class="card-details">
                            <div class="card-period"><p>Period:</p><p>${period}</p></div>
                            <div class="card-diet"><p>Diet:</p> <div><p>${diet[0]}/</p><p>${diet[1]}</p></div></div>
                        </div>
                        <p class="card-description">
                            ${description}
                        </p>
    </div>
    `
}

const renderProducts=(productsList)=>{
    const cardsGroup=document.createElement('div')
    cardsGroup.className='products'
    cardsGroup.innerHTML=productsList.map((dino)=>{
        return createTemplate(dino)
    }).join('')

    products.appendChild(cardsGroup)
}



// Show more

const isLastIndex=()=>{
    return (appState.currentProductsIndex===appState.productsLimit-1)
}

// Render more when the user press the show more button
const showMoreProducts=()=>{
    appState.currentProductsIndex++
    let {products,currentProductsIndex}=appState
    renderProducts(products[currentProductsIndex])
    if(isLastIndex()){
        showMoreBtn.classList.add('hidden')
    }

    const cards=document.querySelectorAll('.card')
    addProductToCart(cards)
}

const setShowMoreVisibility=()=>{
    if (!appState.activeFilter){
        showMoreBtn.classList.remove('hidden')
        return;
    }
    showMoreBtn.classList.add('hidden')
}

// PRINCIPAL
// Funcion para aplicar el filtro cuando se apreta el boton de category

const applyFilter=()=>{
    if(!(appState.activeFilter)){
        products.innerHTML=''
        renderProducts(appState.products[appState.currentProductsIndex])
        showMoreBtn.addEventListener('click',showMoreProducts)
        
        
        const cards=document.querySelectorAll('.card')
        addProductToCart(cards)
        
        return;
    }


    products.innerHTML=pokedinos.map((pokedino)=>{

        if(pokedino.category==appState.activeFilter){
            return createTemplate(pokedino)
        }
    }).join('')


    const cards=document.querySelectorAll('.card')
    addProductToCart(cards)
}

// Funcion para cambiar el estado de los botones filtro/categorias 
const changeBtnActiveState=(selectedCategory)=>{
    const categorias=[...categories]
    categorias.forEach((categoryBtn)=>{
        if(categoryBtn.dataset.category!==selectedCategory){
            categoryBtn.classList.remove('active')
            return;
        }
        categoryBtn.classList.add('active')
    })
}

// Funcion para cambiar el estado de filtro activo

const changeActiveState=(btn)=>{
    appState.activeFilter=btn.dataset.category
    changeBtnActiveState(appState.activeFilter)
    setShowMoreVisibility()

    applyFilter()
}

// Funcion para ver si el boton es de categoría y no está activo
const isInactiveFilterBtn=(element)=>{
    return element.classList.contains('product-btn') && !element.classList.contains('active')
}



// funcion para agregar overlay de las compras

const putOverlay=()=>{
    buyCart.addEventListener('click',()=>{
        overlay.classList.toggle('move-overlay')
        
        window.scrollTo({
                top:0,
                behavior:'smooth'
            })
            
        
    }) 
}


const createChosenCardInfo=(card)=>{
    return `
    <div class="buycart-card">
    <div class="cart-wrap">
        <div class="buycart-name">${card.name}</div>
        <div class="buycart-category">${card.category}</div>
        <div class="buycart-period">Period:${card.period}</div>
        <div class="buycart-diet">Diet:${card.diet}</div>
        <div class="buycart-button" id="btn">Quitar del carrito</div>
    </div>
    <img src=${card.image}>
    </div>
    `
}

deleteBoughtProduct=(myOverlayProducts)=>{
    const boughtProducts=[...myOverlayProducts]

    for(let i=0;i<boughtProducts.length;i++){
        boughtProducts[i].addEventListener('click',(e)=>{
            if(e.target.id =="btn"){
                console.log('hola')
                boughtProducts.splice(i,1)
                dinoObjects.splice(i,1)
                localStorage.setItem('dinos',JSON.stringify(dinoObjects))
                overlayProducts.innerHTML=boughtProducts.map((product)=>{
                    return createChosenCardInfo(product)
                }).join(' ')
            }
        })
    }
    

    


}

const addProductToCart=(cards)=>{
    const productCards=[...cards]
    // console.log(productCards)
    // const chosenDinos=[]
    productCards.forEach((card)=>{
        card.addEventListener('click',()=>{
            pokedinos.forEach((pokedino)=>{
                if(pokedino.id==card.dataset.id){
                    // chosenDinos.push()
                    setDinoToLocalStorage(pokedino)
                    return overlayProducts.innerHTML+=createChosenCardInfo(pokedino)

                }
            })
        })
    })
}




const init=()=>{
    getBoughtDinos()
    renderProducts(appState.products[appState.currentProductsIndex])
    showMoreBtn.addEventListener('click',showMoreProducts)
    putOverlay()
    const categorias=[...categories]
    categorias.forEach((cat)=>{
        cat.addEventListener('click',()=>{
            
            changeActiveState(cat)
    })
    })
    
    const cards=document.querySelectorAll('.card')
    addProductToCart(cards)
    deleteBoughtProduct(overlayProductsItems)
    
}

init()