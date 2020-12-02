$('button').on('click', function () {
    let my_storage = localStorage.getItem('products');
    let name = $(this).parent('.product').find('h1').text();
    let img = $(this).parent('.product').find('img').attr('src');
    let my_product = {
        title: name,
        image: img,
        count: 1,
        sizes: [l, s, xs],
    }
    if (my_storage === null) {
        let my_products = {
            products: [
                my_product
            ]
        }
        let myJSON = JSON.stringify(my_products);
        localStorage.setItem('products', myJSON);
    } else {
        my_storage = JSON.parse(my_storage);
        let my_products = my_storage.products;
        let iter = 0;
        for (let i = 0; i < my_products.length; i++) {
            if (my_products[i].title == name) {
                let counts = my_products[i].count;
                counts++;
                my_products[i].count = counts;
                iter = 1;
            }
        }
        if (iter == 0) {
            my_products.push(my_product);
        }
        my_storage = JSON.stringify(my_storage);
        localStorage.setItem('products', my_storage);
    }
});
