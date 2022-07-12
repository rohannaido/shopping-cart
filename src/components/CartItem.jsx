import '../styles/CartItem.css'

const CartItem = (props) =>{

    const { data, qty } = props;
    console.log(data);
    console.log("CARTITEM: ")
    return(
        <div className="cart-item-div">
            <div className="cart-item-img-div">
                <img src={data.img} alt={data.itemName} />
            </div>
            <div className="cart-item-text-div">
                <p className="cart-item-itemname">
                    {data.itemName}
                </p>
                <p className="cart-item-qty">
                    {qty}
                </p>
            </div>
        </div>
    )
}

export default CartItem;