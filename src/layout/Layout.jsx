/* eslint-disable react/prop-types */
import "./Layout.css";
import Footer from "./footer/Footer";
import Header from "./header/Header";


const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1 ">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;