import { Link } from "react-router-dom";
import { RichText, Date } from "prismic-reactjs";
import { linkResolver } from "../prismic-configuration";
import { useDarkMode } from "../Store";
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
    <p className="text-gray-400 text-center py-8">
      <time className="created-at">{displayDate}</time>
    </p>
  );
};

const PostItem = ({ post }) => {
  const src = post.data.thumbnail.url;
  const title = RichText.asText(post.data.title)
    ? RichText.asText(post.data.title)
    : "Untitled";

  return (
    <div className="shadow-sm bg-white text-black mx-auto  w-96 rounded-xl my-8">
      <Link to={linkResolver(post)}>
        <img className="rounded-t-xl" alt="thumbnail" src={src}></img>

        <h2 className=" text-4xl text-center pt-8">{title}</h2>

        <PostDate date={post.data.date} />
      </Link>
    </div>
  );
};
const PostList = ({ posts }) => {
  const darkMode = useDarkMode((state) => state.darkMode);

  return (
    <div
      className={
        darkMode ? "bg-black-50 w-screen px-4" : "bg-yellow-50 w-screen px-4"
      }
    >
      <div className="2xl:w-1/2   mx-auto grid grid-cols-1 lg:grid-cols-2  gap-4 lg:justify-evenly">
        {posts.map((post) => (
          <PostItem post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
