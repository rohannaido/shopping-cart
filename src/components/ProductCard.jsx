import '../styles/ProductCard.css'
import '../App.css'

const ProductCard = (props) => {
    const { data, addToCart } = props;

    return (
        <div className="product-card-div">
            <div className="product-card-img-div">
                <img src={data.img} alt={data.itemName} />
            </div>
            <p className="product-card-title">
                {data.itemName}
            </p>
            <p className="product-card-price">
            ₹{data.price}
            </p>
            <div className="product-card-button-div">
                <button className="add-to-cart-btn" onClick={() => addToCart(data.id)}>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductCard;