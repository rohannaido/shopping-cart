import '../styles/ProductCard.css'

const ProductCard = (props) => {
    const { data } = props;

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
        </div>
    )
}

export default ProductCard;