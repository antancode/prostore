import ProductList from "@/components/shared/product/ProductList";
import { getLatestProducts } from "@/lib/actions/product.action";
import { LATEST_PRODUCT_LIST } from "@/lib/constants";
import { Product } from "@/types";

const Home = async () => {

    const latestProducts : Product[] = await  getLatestProducts();

    return (
        <ProductList data={latestProducts} title="Newest Arrivals" limit={LATEST_PRODUCT_LIST} />
    );
};

export default Home;

export const metadata = { title: "Home"};
