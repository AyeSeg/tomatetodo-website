const express = require ('express');
const app = express();
const path = require('path');
const port = 3000;
const products = require('./utils/products')
const title = 'Tomate Todo'

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
    products.getAllProducts((error, products)=>{
        if(error) {
            return res.send({
                error
            })
        };

        const JSONProducts = JSON.parse(products);
        return res.render('index', {
            title: `${title} - Sitio Web de Coctelería`,
            JSONProducts
        });

    })
  
})

app.get('/contacto', (req, res) => {
    res.render('pages/contacto', {
        title: `${title} - Contacto`,
    });
});

app.listen(port, () => {
    console.log(`Puerto ${port}`);
});



