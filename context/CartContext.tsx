import React, { createContext, useState } from "react";
import { setStorage, initiateData } from "../helper/cart";

interface AppContextInterface {
  addData: (payload: string) => void;
  clearCart: () => void;
  data: string;
}

export const CartContext = createContext<AppContextInterface | null>(null);

const CartContextProvider: React.FC = ({ children }) => {
  const [data, setData] = useState(initiateData);

  const addData = (payload: string) => {
    setStorage(payload);
    setData(payload);
  };

  const clearCart = () => {
    setStorage("");
    setData("");
  };

  const values: AppContextInterface = {
    addData,
    clearCart,
    data,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
