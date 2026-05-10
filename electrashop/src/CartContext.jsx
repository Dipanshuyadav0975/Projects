import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  // GET CURRENT USER
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem("userEmail")
  );


  useEffect(() => {

    const checkUser = () => {
      setCurrentUser(localStorage.getItem("userEmail"));
    };

    window.addEventListener("storage", checkUser);

    checkUser();

    return () => {
      window.removeEventListener("storage", checkUser);
    };

  }, []);


  // LOAD USER CART
  useEffect(() => {

    if (currentUser) {

      const savedCart = localStorage.getItem(`cart_${currentUser}`);

      setCart(savedCart ? JSON.parse(savedCart) : []);

    } else {

      setCart([]);

    }

  }, [currentUser]);



  // SAVE USER CART
  useEffect(() => {

    if (currentUser) {

      localStorage.setItem(
        `cart_${currentUser}`,
        JSON.stringify(cart)
      );

    }

  }, [cart, currentUser]);



  // ADD TO CART
  const addToCart = (product) => {

    const exists = cart.find(
      (item) => item.id === product.id
    );

    if (!exists) {
      setCart([...cart, product]);
    }
  };



  // REMOVE FROM CART
  const removeFromCart = (id) => {

    const updatedCart = cart.filter(
      (item) => item.id !== id
    );

    setCart(updatedCart);
  };



  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};