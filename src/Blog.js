import { useEffect, useState } from "react";
import Prismic from "@prismicio/client";
import PostList from "./components/PostList";
import DefaultLayout from "./components/DefaultLayout";
import NotFound from "./NotFound";
import { client } from "./utils/prismicHelpers.js";

export default function Blog() {
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
      <DefaultLayout wrapperClass=' bg-yellow-50 '>
      <img className="bg-yellow-50 px-8 lg:w-1/2 xl:px-0 xl:w-1/3 mx-auto my-16" alt=' logo' src=' ye.png'></img>
        <PostList posts={blogPosts} />
      </DefaultLayout>
    );
  } else if (notFound) {
    return <NotFound />;
  }
  return null;
}
