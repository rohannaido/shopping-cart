import NavBar from "./components/NavBar";
import CartItem from "./components/CartItem";
import data from './data';
import './styles/CartPage.css';

const CartPage = (props) => {

    const {cart, setCart} = props;
    console.log(cart);
    return (
        <div className="cart-page-div">
            <NavBar cart={cart}/>
            <div className="cart-items-div">

                {!cart.length ? <div className="no-items-div">No items in your Cart!</div> :
                cart.map((item) => {
                    const dataItem = data[(data.map((item) => item.id)).indexOf(item.id)];
                    return (
                        <CartItem data={dataItem} qty={item.qty} />
                        );
                    })}
            </div>
        </div>
    )
}

export default CartPage;