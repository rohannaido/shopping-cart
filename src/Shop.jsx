import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import data from  './data'
import './styles/Shop.css'

console.log(data);
// const data

const Shop = () => {
    return (
        <>
            <NavBar />
                <div className="product-list-div">
                    {data.map((item) => <ProductCard data={item} />)}   
                </div>
            <Footer />
        </>
    )
}

export default Shop;