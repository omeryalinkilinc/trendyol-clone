import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import CartSidebar from "../components/CartSidebar";
const MainLayout = ({ cartItems }) => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <CartSidebar cartItems={cartItems} />
      <Footer />
    </>
  );
};

export default MainLayout;
