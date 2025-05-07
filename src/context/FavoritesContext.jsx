import React, { useState, createContext, useContext, useEffect } from 'react';

// 🌟 FavoritesContext'i oluştur
const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    console.log(" Context Provider çalışıyor mu? Favoriler:", favorites);

    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        console.log("📥 LocalStorage'dan okunan veriler:", storedFavorites);

        if (storedFavorites) {
            try {
                setFavorites(JSON.parse(storedFavorites));
            } catch (error) {
                console.error(" JSON parse hatası! Hatalı veri:", storedFavorites);
            }
        }
    }, []);

    useEffect(() => {
        if (favorites.length > 0) {
            localStorage.setItem('favorites', JSON.stringify(favorites));
            console.log(" Favorites state localStorage'a yazıldı:", favorites);
        } else {
            console.log(" Favori listesi boş, localStorage'a yazılmadı!");
        }
    }, [favorites]);

    const addToFavorites = (product) => {
        if (!favorites.find((item) => item.id === product.id)) {
            const updatedFavorites = [...favorites, product];
            setFavorites(updatedFavorites);
            console.log("⭐ Ürün favorilere eklendi:", product);
        }
    };

    const removeFromFavorites = (productId) => {
        const updatedFavorites = favorites.filter((item) => item.id !== productId);
        setFavorites(updatedFavorites);
        console.log(" Ürün favorilerden kaldırıldı. ID:", productId);
    };

    const isFavorite = (productId) => {
        return favorites.some((item) => item.id === productId);
    };

    const toggleFavorite = (product) => {
        if (isFavorite(product.id)) {
            removeFromFavorites(product.id);
        } else {
            addToFavorites(product);
        }
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite, toggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

// 🌟 Context'i export et
export { FavoritesContext };
export const useFavorites = () => useContext(FavoritesContext);