import React, { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";

const Context = createContext();

const ContextProvider = ({ children }) => {
    const [category, setCategory] = useState([]);
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(1);
    const [cartSubTotal, setCartSubTotal] = useState(0);

    useEffect(() => {
        let count = 0;
        cartItems.forEach((item) => count += item.attributes.quantity); 
        setCartCount(count);
    
        let subTotal = 0;
        cartItems.forEach((item) => {
            subTotal += item.attributes.price * item.attributes.quantity; 
        });
    
        setCartSubTotal(subTotal);
    }, [cartItems]);
    

    const handleAddToCart = (product, quantity) => {
        let items = [...cartItems];

        let index = items.findIndex((item) => item.id === product.id);

        if (index !== -1) {
            items[index].attributes.quantity += quantity
        } else {
            product.attributes.quantity = quantity;
            items = [...items, product];
        }
        setCartItems(items);
        setCartCount(quantity);
    };

    const handleRemoveFromCart = (product) => {
        let items = [...cartItems];
        items = items.filter((item) => item.id !== product.id);
        setCartItems(items);
    };

    const handleCartQunatity = (type, product) => {
        let items = [...cartItems];
        let index = items.findIndex((item) => item.id === product.id);
        if (type === 'inc') {
            items[index].attributes.quantity += 1;
        } else if (type === 'dec') {
            if (items[index].attributes.quantity === 1) return;
            items[index].attributes.quantity -= 1;
        }
        setCartItems(items);
    }

    const params = {
        headers: {
            Authorization: "Bearer 672dc7f27deee4f4ba9105d37c1e6da0875a05d5860012018921cd1a30ec2dd5dcebcd34d6952f419a35d4da87e6334a9f6b5471ef042a3d3f21770057c2755e01914e0811fdeb9918f517c76c4c459e33cfa641df6bb71339230669768467059f8e1b1bfc4d5bf50ae0a8c50f1e5c2691ce0bef5cde464e74ccaae8d362be9d" // Replace with your actual key
        }
    };

    const fetchCategories = async () => {
        try {
            const response = await axios.get(`http://localhost:1337/api/categories?populate=*`, params);
            setCategory(response.data.data); // Set the category state with fetched data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`http://localhost:1337/api/products?populate=*`, params);
            setProducts(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };



    useEffect(() => {
        fetchCategories();
        fetchProducts();
    }, []);

    return (
        <Context.Provider value={{
            category,
            products,
            cartItems,
            setCartItems,
            cartCount,
            setCartCount,
            cartSubTotal,
            setCartSubTotal,
            handleAddToCart,
            handleCartQunatity,
            handleRemoveFromCart

        }}>
            {children}
        </Context.Provider>
    );
};

const UseContext = () => {
    return useContext(Context);
};

export { UseContext, ContextProvider };
