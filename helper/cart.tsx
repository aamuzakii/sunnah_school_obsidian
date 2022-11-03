interface DataProps {
  data: String;
}

const getCartFromLocalStorage =
  typeof window !== "undefined" ? localStorage.getItem("data") || "" : "";

export const initiateData = () =>
  getCartFromLocalStorage !== null ? getCartFromLocalStorage : "";

export const setStorage = (data: string): void => {
  localStorage.setItem("data", data);
};
