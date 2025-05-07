import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isInitialized, setIsInitialized] = useState(false); // Yeni

    // İlk yüklemede localStorage'dan veriyi çek
    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            try {
                setCartItems(JSON.parse(storedCart));
            } catch (error) {
                console.error("Bozuk cart verisi:", storedCart);
            }
        }
        setIsInitialized(true); // İlk yükleme tamamlandı
    }, []);

    // cartItems değiştiğinde localStorage’a yaz
    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem('cart', JSON.stringify(cartItems));
        }
    }, [cartItems, isInitialized]);

    const addToCart = (product) => {
        setCartItems(prevCart => {
            const existing = prevCart.find(item => item.id === product.id);
            if (existing) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (id) => {
        setCartItems(prevCart => prevCart.filter(item => item.id !== id));
    };




    const increaseQuanity = (id) => {
        setCartItems(prev => 
            prev.map(item =>
                item.id === id && item.quantity <20
                ? {...item, quantity: item.quantity + 1}
                : item
            )
        );
    };


    const decreaseQuantity = (id) => {
        setCartItems(prev =>
            prev.map(item =>
                item.id === id && item.quantity > 1
                ? {...item, quantity: item.quantity - 1}
                :item
            )
        )
    }




    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, increaseQuanity, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
