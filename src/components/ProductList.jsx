import Header from "../components/Header";
import Products from "../hooks/Products";
import ProductItem from "../components/ProductItem";
import { useSelector } from "react-redux";



function ProductList() {
    const { products, loading, error } = Products();
    let query = useSelector((state) => state.search.query)
    if (loading) {
        return <h2>Loading products...</h2>
    }
    if (error) {
        return <h2>{error}</h2>
    }

    let filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
    );

    
    return (
        <div className="listContainer">
            <h2>All Products</h2>
            <div className="products">
                {filteredProducts.length === 0 ? (
                    <p>No products available for "{query}"</p>
                ) : (
                    filteredProducts.map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))
                )}
            </div>
        </div>

    )
}
export default ProductList;
