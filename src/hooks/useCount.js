import { useState } from "react";

export const useCount = (initialState, min, max) => {
  const [cantidad, setCantidad] = useState(initialState);

  const incremento = () => {
    if (cantidad < max) setCantidad(cantidad + 1);
  };

  const decremento = () => {
    if (cantidad > min) setCantidad(cantidad - 1);
  };

  return { incremento, decremento, cantidad };
};
