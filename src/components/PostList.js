import { Link } from "react-router-dom";
import { RichText, Date } from "prismic-reactjs";

import { linkResolver } from "../prismic-configuration";
/**
 * Component that returns the first paragraph of a post
 */
function FirstParagraph({ sliceZone}) {
  return(
 <div>
{RichText.asText(sliceZone)}
 </div>
  )

}
const PostDate = ({ date }) => {
  // Format the date to M d, Y
  const dateFormat = {
    month: "short",
    day: "2-digit",
    year: "numeric",
  };
  const displayDate = new Intl.DateTimeFormat("en-US", dateFormat).format(
    Date(date)
  );

  return (
    <p className="blog-post-meta">
      <time className="created-at">{displayDate}</time>
    </p>
  );
};
/**
 * Post list item component
 */
const PostItem = ({ post }) => {
  const title = RichText.asText(post.data.title)
    ? RichText.asText(post.data.title)
    : "Untitled";

  return (
    <div className="blog-post">
      <Link to={linkResolver(post)}>
        <h2>{title}</h2>
      </Link>

      <PostDate date={post.data.date} />

      <FirstParagraph sliceZone={post.data.content} textLimit={300} />
    </div>
  );
};
const PostList = ({ posts }) => {
  return (
    <div className="blog-main">
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;
