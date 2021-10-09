import React, { useEffect } from "react";
import Routes from "./router/Routes";
import ScrollToTop from "./components/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { keepTheme } from './utils/themes';


const App = () => {
  useEffect(() => {
    AOS.init();
    keepTheme();
  }, []);
  return (
    <>
      <ToastContainer toastClassName="dark-toast" />
      <ScrollToTop />
      <Routes />
    </>
  );
};

export default App;
