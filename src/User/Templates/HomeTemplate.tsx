// import "../../assets/User/css/style.css";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

type Props = {};

const HomeTemplate = (props: Props) => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeTemplate;
