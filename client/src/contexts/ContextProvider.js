import React, { useContext, useState, useReducer, useEffect } from "react";
import reducer from "./reducer";
import { VIEW_CUSTOMER_DATA, ERROR_CUSTOMER_DATA } from "./actions";
import axios from "axios";

const AppContext = React.createContext();

const initialState = {
  chat: false,
  notifications: false,
  customers: null,
};

const API = axios.create({
  baseURL: "/api/v1",
});

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [activeMenu, setActiveMenu] = useState(true);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  const fetchCustomers = async () => {
    try {
      const { data } = await API.get("/customers");
      const { customers } = data;
      dispatch({
        type: VIEW_CUSTOMER_DATA,
        payload: {
          customers,
        },
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  // useEffect(() => {
  //   fetchCustomers();
  // }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        fetchCustomers,
        currentColor,
        currentMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
