import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Ebook from "./components/Ebook";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";
import Blog from "./Blog";
import Post from "./Post";
import { apiEndpoint } from "./prismic-configuration";
import NotFound from "./NotFound";
import Wobble from "./components/Wobble";
import create from "zustand";

import { Switch, Route } from "react-router-dom";

export const useDarkMode = create((set) => ({
  darkMode: false,
  changeDarkMode : (mode)=> set((state)=>{
  return{
    ...state,
    darkMode : mode,
  }
  })
}))
function Home() {
  return (
    <div>
      <Navbar />
      <Wobble />
      <Header />
      <Ebook />
      <Footer />
    </div>
  );
}
function App() {
  const repoNameArray = /([^/]+)\.cdn.prismic\.io\/api/.exec(apiEndpoint);
  const repoName = repoNameArray[1];

  return (
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
