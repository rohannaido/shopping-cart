import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import data from  './data'
import './styles/Shop.css'

const Shop = (props) => {

    const addToCart = (id) => {
        props.setCart((prev) => [...prev, id])
    }

    return (
        <div className="shop-div">
            <NavBar cart={props.cart} />
                <div className="product-list-div">
                    {data.map((item) => <ProductCard data={item} addToCart={addToCart} />)}
                </div>
            <Footer />
        </div>
    )
}

export default Shop;