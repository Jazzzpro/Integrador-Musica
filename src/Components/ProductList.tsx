import { products } from '../data/products';
import ProductCard from '../Components/ProductCard';

const ProductList = () => {
    return (
        <>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </>
    );
};

export default ProductList;