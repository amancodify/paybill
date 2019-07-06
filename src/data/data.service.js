class DataService {
    static products = require("../data/data.json").products;
    static productsBill = [];


    static getProducts() {
        return DataService.products;
    }
    static setProduct(p) {
        DataService.products = p;
    }
    static addProduct(p) {
        DataService.products = DataService.products.concat(p);
    }


    static getProductsBill() {
        return DataService.productsBill;
    }
    static setProductBill(pb) {
        DataService.productsBill = pb;
    }
    static addProductBill(pb) {
        DataService.productsBill = DataService.productsBill.concat(pb);
    }
    static appendQuantity(productName, qty) {
        DataService.productsBill.map(pr => {
            if(pr.name === productName) {
                pr.quantity = parseInt(qty) + parseInt(pr.quantity);
            }
        });
    }
}

module.exports = DataService;