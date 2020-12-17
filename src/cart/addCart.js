export const addItem = (item, next) => {
    let cart = [];
    if(typeof window !== 'undefined') {
        if(localStorage.getItem('cart')){
            cart = JSON.parse(localStorage.getItem('cart'));
        }

        cart.push({
            ...item,
            count: 1
        });

        cart = Array.from(new Set(cart.map(item => item._id))).map(id => {
            return cart.find(item => item._id === id);
        })

        localStorage.setItem('cart', JSON.stringify(cart));
        next();
    }
};