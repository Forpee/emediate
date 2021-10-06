import { useEffect, useState } from "react";
import Prismic from "@prismicio/client";
import PostList from "./components/PostList";
import DefaultLayout from "./components/DefaultLayout";
import NotFound from "./NotFound";
import { client } from "./utils/prismicHelpers.js";
import {useDarkMode} from './Store'
export default function Blog() {
  const darkMode = useDarkMode((state) => state.darkMode);
  const [prismicData, setPrismicData] = useState({
    homeDoc: null,
    blogPosts: null,
  });
  const [notFound, toggleNotFound] = useState(false);
  useEffect(() => {
    const fetchPrismicData = async () => {
      try {
        const homeDoc = await client.getSingle("blog_hom");
        const blogPosts = await client.query(
          Prismic.Predicates.at("document.type", "articles")
        );

        if (homeDoc) {
          setPrismicData({ homeDoc, blogPosts: blogPosts.results });
        } else {
          console.warn(
            "Blog Home document was not found. Make sure it exists in your Prismic repository"
          );
          toggleNotFound(true);
        }
      } catch (error) {
        console.error(error);
        toggleNotFound(true);
      }
    };

    fetchPrismicData();
  }, []);
  if (prismicData.homeDoc) {
    const blogPosts = prismicData.blogPosts;
    
    return (
      <div className={darkMode ? " bg-black-50 text-gray-200 " : " bg-yellow-50 text-gray-800 "  }>
        <h1 className='text-center uppercase md:w-1/2 m-auto  text-7xl font-bold'>The Strategies of Self Directed Warefare</h1>
        <PostList posts={blogPosts} />
      </div>
    );
  } else if (notFound) {
    return <NotFound />;
  }
  return null;
}
