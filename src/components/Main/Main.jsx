import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ScrollIndicator from "../ScrollIndicator/ScrollIndicator";

const Main = () => {
  return (
    <>
      <Header />
      <ScrollIndicator />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Main;
