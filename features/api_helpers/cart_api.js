class CartApi {
    #itemData = {
        position_id: '707:4155257001',
        shop_id: 707,
        quantity: 1,
        product_key: 'iphone15promaxnt'
    };

    deleteFromCart = async (product_id) => {
        return browser.execute(async (product_id, dataPattern) => {
            return await fetch('https://cart.onliner.by/sdapi/cart.api/positions', {
                method: 'DELETE',
                body: JSON.stringify({ positions:[{ ...dataPattern, product_id }] }),
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' }
            });
        }, product_id, this.#itemData);
    };

    addToCart = async (product_id) => {
        return browser.execute(async (product_id, dataPattern) => {
            return await fetch('https://catalog.onliner.by/sdapi/cart.api/positions', {
                method: 'POST',
                body: JSON.stringify({ ...dataPattern, product_id }),
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' }
            });
        }, product_id, this.#itemData);
    };
}

module.exports = new CartApi();
