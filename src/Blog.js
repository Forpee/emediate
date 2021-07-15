import { useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";
import Prismic from "@prismicio/client";
import Header from "./components/HeaderBlog";
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
    const homeDoc = prismicData.homeDoc;
    const blogPosts = prismicData.blogPosts;
    const title = RichText.asText(homeDoc.data.headline);
    return (
      <DefaultLayout seoTitle={title}>
        <Header
          image={homeDoc.data.image}
          headline={homeDoc.data.headline}
          description={homeDoc.data.description}
        />
        <PostList posts={blogPosts} />
      </DefaultLayout>
    );
  } else if (notFound) {
    return <NotFound />;
  }
  return null;
}
