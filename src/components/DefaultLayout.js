import { Helmet } from "react-helmet";
import Footer from "./Footer";
import Navbar from './Navbar';

const DefaultLayout = ({ wrapperClass, title, children }) => (
  <div className={wrapperClass}>
  <Navbar/>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {children}
    <Footer />
  </div>
);

export default DefaultLayout;
