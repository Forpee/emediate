import { Helmet } from "react-helmet";
import Footer from "./Footer";

const DefaultLayout = ({ wrapperClass, title, children }) => (
  <div className={wrapperClass}>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {children}
    <Footer />
  </div>
);

export default DefaultLayout;
