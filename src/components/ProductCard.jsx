import '../styles/ProductCard.css'
import '../App.css'
import { useState } from 'react';

const ProductCard = (props) => {
    const { data, addToCart } = props;
    const [qty, setQty] = useState(1);
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
                <div className='product-card-qty-selector'>
                    <span className='qty-selector' onClick={() => setQty((prev) => {if(prev > 1) { return prev - 1} return prev})}>
                        -
                    </span>
                    &nbsp;{qty}&nbsp; 
                    <span className='qty-selector' onClick={() => setQty((prev) => {if(prev < 9) {return prev + 1} return prev})}>
                        +
                    </span>
                </div>
                <button className="add-to-cart-btn" onClick={() => addToCart(data.id, qty)}>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductCard;