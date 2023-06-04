
class ProductManager{

    constructor(){
        this.products = []
    }

    addProduct = (title, description, price,thumbnail,code,stock) => {
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        if(this.products.length === 0){
            product.id = 1
        }else{
            product.id = this.products[this.products.length - 1].id + 1
        }
        if (Object.values(product).every(value => value)){
            const code = this.products.find(p => p.code === product.code)
            if (code) {
                console.log("El code del producto ya existe");
              } else {
                this.products.push(product);
              }
        }else {
            console.log ("Faltan datos del producto") 
        }

    }
    getProducts = () => {
        if (this.products.length === 0) {
            return this.products;

        } else {
            return this.products;
        }
    }
    getProductById = (id) => {

        const prodID = this.products.find(p => p.id === id)
        if(prodID){
            return prodID
        }else{
            console.log("Not found");
        }

    }


}

const app = new ProductManager()

app.getProducts()

app.addProduct("producto prueba","Este es un producto prueba",200,"sin imagen","abc123",25)

app.getProducts()

app.addProduct("producto prueba","Este es un producto prueba",200,"sin imagen","abc123",25)

app.getProductById(1)



