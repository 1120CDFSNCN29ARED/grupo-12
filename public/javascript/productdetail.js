window.addEventListener('load', () => {
    const buyNow = document.getElementById('buyNow')
    const addCart = document.getElementById('addCart')


    buyNow.addEventListener('submit', (e) => {
        e.preventDefault()
        console.log('buyNow frontend')
    })

    addCart.addEventListener('submit', (e) => {
        e.preventDefault()
    })
})