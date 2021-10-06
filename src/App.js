import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";
import Blog from "./Blog";
import Post from "./Post";
import { apiEndpoint } from "./prismic-configuration";
import NotFound from "./NotFound";
import Wobble from "./components/Wobble";

import { Switch, Route } from "react-router-dom";


function Home() {
  return (
    <div>
      <Navbar />
      <Wobble />
      <Blog />
      <Footer />
    </div>
  );
}
function App() {
  const repoNameArray = /([^/]+)\.cdn.prismic\.io\/api/.exec(apiEndpoint);
  const repoName = repoNameArray[1];

  return (
    <div className="h-screen overflow-x-hidden relative ">
     
   <Navbar/>
   <Header/>
   <Ebook/>
   <Footer/>
 
    <div className=" overflow-x-hidden">
      <Helmet>
        <script
          async
          defer
          src={`//static.cdn.prismic.io/prismic.js?repo=${repoName}&new=true`}
        />
      </Helmet>
      <div>
        <Switch>
          <Route exact path="/blog">
            <Blog />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/blog/:uid">
            <Post />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
