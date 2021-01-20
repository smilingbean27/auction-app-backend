
var products = [
    {
        id: 34,
        name: 'Football',
        price: 50,
        features: ['Good quality', 'feature-2', 'feature-3'],
        image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
        startDateTime: new Date("Jan 07, 2021 11:02:24"),
        endDateTime: new Date("Jan 08, 2021 20:02:24"),
        isInCountry: '',
        entry: true
    },
    {
        id: 77,
        name: 'Watch',
        price: 28,
        features: ['Awesome it is'],
        image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=340&q=80',
        startDateTime: new Date("Jan 18, 2021 19:02:24"),
        endDateTime: new Date("Jan 19, 2021 20:02:24"),
        isInCountry: 'IN',
        entry: true,
    }
];

// Generating ID
function genId() {
return products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 1;
}

const AuctionController = {}

AuctionController.getProducts = ()=> {
    return (req, res, next) => {
        res.json(products);
        next();
    }
}

AuctionController.addProduct = () => {
    return (req, res, next) => {
        const id = genId();
        const product = Object.assign(Object.assign({}, req.body), { id });
        products.push(product);
        next();
    }
}

AuctionController.getProductbyId = () => {
    return (req, res, next) => {
        const id = Number(req.params.id);
        res.json(products.find(p => p.id === id));
        next();
    }
}

AuctionController.deleteProductbyId = () => {
    return (req, res, next)=> {
        const id = Number(req.params.id);
        products = products.filter(p => p.id !== id);
        next();
    }
}

AuctionController.modifyProductbyId = () => {
    return (req, res, next) => {
        console.log(req.body);
        const id = Number(req.params.id);
        products = products.filter(p => p.id !== id);
        console.log('Requesting reaching')
        products.push(req.body);
        next();
    }
}
module.exports = AuctionController;