import React, { useEffect } from "react";
import Routes from "./router/Routes";
import ScrollToTop from "./components/ScrollToTop";
import { ToastContainer } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
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
