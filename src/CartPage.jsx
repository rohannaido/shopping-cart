import NavBar from "./components/NavBar";
import CartItem from "./components/CartItem";
import data from './data';
import './styles/CartPage.css';
import {useEffect, useState} from 'react'
import Footer from "./components/Footer";

const CartPage = (props) => {

    const {cart, setCart} = props;

    const [total, setTotal] = useState(0);
    useEffect(() => {
        const prices = cart.map((item) => data[(data.map((item) => item.id)).indexOf(item.id)].price*item.qty);

        setTotal(prices.reduce((a,b) => a + b, 0));

    },[cart])

    return (
        <div className="cart-page-div">
            <NavBar cart={cart}/>
            <div className="cart-items-div">

                {!cart.length ? 
                    <div className="no-items-div">
                        No items in your Cart!
                    </div> 
                    :
                    <div className="all-cart-items">
                    {cart.map((item) => {
                        const dataItem = data[(data.map((item) => item.id)).indexOf(item.id)];
                        return (
                            <CartItem data={dataItem} qty={item.qty} />
                            );
                        })}
                        <div className="cart-total-div">
                            Total: {total}
                        </div>
                    </div>
                }
            </div>
            <Footer />
        </div>
    )
}

export default CartPage;