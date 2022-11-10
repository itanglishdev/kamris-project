// import product list database

function ProductList() {

    let dataBase= []

    return ( 
    <div className="product-list">
        {
            dataBase.map((item) => {
                return  (
                    <div key={item.id}>
                         {item}
                    </div>
                )
            })
        }
    </div> );
}

export default ProductList;