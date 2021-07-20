import React, { useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";

import DefaultLayout from "./components/DefaultLayout";
import BackButton from "./components/BackButton";
import SliceZone from "./components/SliceZone";
import NotFound from "./NotFound";
import { client } from "./utils/prismicHelpers";
import { useParams } from "react-router-dom";

/**
 * Blog post page component
 */
const Post = ({ match }) => {
  const [prismicDoc, setPrismicDoc] = useState(null);
  const [notFound, toggleNotFound] = useState(false);

  //const uid = match.params.uid;
const {uid} = useParams()

  // Get the blog post document from Prismic
  useEffect(() => {
    const fetchPrismicData = async () => {
      try {
        const doc = await client.getByUID("articles", uid);

        if (doc) {
          setPrismicDoc(doc);
        } else {
          console.warn(
            "Blog post document was not found. Make sure it exists in your Prismic repository"
          );
          toggleNotFound(true);
        }
      } catch (error) {
        console.error(error);
        toggleNotFound(true);
      }
    };

    fetchPrismicData();
  }, [uid]);

  // Return the page if a document was retrieved from Prismic
  if (prismicDoc) {
   
    const src =prismicDoc.data.thumbnail.url
    const title =
      prismicDoc.data.title.length !== 0
        ? RichText.asText(prismicDoc.data.title)
        : "Untitled";

    return (
      <DefaultLayout wrapperClass="bg-yellow-50 " seoTitle={title}>
 <div className='md:px-16'>
 <div className="container px-8 md:px-16 text-xl xl:w-1/2 mx-auto bg-white shadow-lg rounded-xl my-16 p-16">
       <div className="">
          <BackButton />
          <h1 className="text-5xl md:text-6xl py-16 text-center">{title}</h1>
          <img alt='' className='mx-auto mb-16 rounded-xl' src={src}/>
        </div>
        <SliceZone sliceZone={prismicDoc.data.content} />
       </div>
 </div>
        </DefaultLayout>
    );
  } else if (notFound) {
    return <NotFound />;
  }
  return null;
};

export default Post;
