import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(() => {
    const localCart = localStorage.getItem("carrito");
    return localCart ? JSON.parse(localCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const addItem = (producto, cantidad) => {
    const itemAgregado = { ...producto, cantidad };

    const nuevoCarrito = [...carrito];
    const estaEnCarrito = nuevoCarrito.find(
      (producto) => producto.id === itemAgregado.id
    );

    if (estaEnCarrito) {
      estaEnCarrito.cantidad += cantidad;
    } else {
      nuevoCarrito.push(itemAgregado);
    }
    setCarrito(nuevoCarrito);
  };

  const quantityCart = () => {
    return carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
  };

  const total = () => {
    return carrito.reduce(
      (acc, producto) => acc + producto.precio * producto.cantidad,
      0
    );
  };

  const removeItem = (id) => {
    const productoEnCarrito = carrito.find((producto) => producto.id === id);

    if (productoEnCarrito) {
      let nuevoCarrito;

      if (productoEnCarrito.cantidad > 1) {
        nuevoCarrito = carrito.map((producto) =>
          producto.id === id
            ? { ...producto, cantidad: producto.cantidad - 1 }
            : producto
        );
      } else {
        nuevoCarrito = carrito.filter((producto) => producto.id !== id);
      }

      setCarrito(nuevoCarrito);
    }
  };

  const clearCart = () => {
    setCarrito([]);
  };

  return (
    <CartContext.Provider
      value={{ carrito, addItem, quantityCart, total, clearCart, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};
