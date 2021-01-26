import React, { useEffect, useState } from "react";
import axios from "axios";

const Categories = (props) => {
    
    const [allCategories, setCategories]= useState([]);
    const [fruits, setFruits]= useState([]);

    const getCategories = async () => {
        const res = await axios.get("https://api.predic8.de/shop/categories/");
        const categories = res.data.categories;
        const filtered = await categories.filter(element => { 
            return element.hasOwnProperty("name") && isNaN(element.name);
        })

        const categorieUrl = filtered.map((element) => {
            return (props.url + element.category_url);
        })

        const getproductsByCategorie = await categorieUrl.map((url) => {

            return axios
                .get(url)
                .then(res => res.data)
                .catch(err => console.log(err));
        })

        axios.all(getproductsByCategorie).then(res => setCategories(res));      
    }

    const getFruits = allCategories.map(category => {
        return category.products
    })
    console.log(allCategories);
    useEffect(() => {
        getCategories();
        
    }, []);
    
    return (
        <div>

        </div>
    )
}

export default Categories;