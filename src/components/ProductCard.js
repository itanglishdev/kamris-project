// importing via props all the productDataList


function ProductCard(props) {



    return ( 
        <div className='productCard'>
            <h2 className="product-card__name" >{props.name}</h2>
            <img className="product-card__image" src={props.img} alt='' />
            <p className="product-card__description" >{props.description}</p>
            <p className="product-card__price" >{props.price}</p>
        </div>
     );
}

export default ProductCard;