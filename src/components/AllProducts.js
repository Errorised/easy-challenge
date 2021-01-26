import React from "react";
import axios from "axios";

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {

        const res = await axios.get(apiUrl + "/shop/products/");
        const allProducts = res.data.products;

        const getPriceUrl = await allProducts.map((product) => {
            return (apiUrl + product.product_url)
        })

        const getPrice = await getPriceUrl.map((url) => {

            return axios
                .get(url)
                .then(res => res.data)
                .catch(err => console.log(err));
        })

        axios.all(getPrice).then(res => setProducts(res));

        console.log(products);
        useEffect(() => {
            getProducts();

        }, []);
    }
    return (
        <div>
            
        </div>
    )
}

export default AllProducts;