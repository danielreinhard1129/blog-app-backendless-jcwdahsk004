import axios from "axios";
import { useEffect, useState } from "react";

export interface Blog {
  thumbnail: string;
  author: string;
  created: number;
  ___class: string;
  description: string;
  category: string;
  ownerId: string | null;
  title: string;
  updated: number;
  objectId: string;
  content: string;
}

function Homepage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isPending, setIsPending] = useState<boolean>(true);

  const getBlogs = async () => {
    try {
      const response = await axios.get(
        "https://cleverfloor-us.backendless.app/api/data/Blogs",
      );
      setBlogs(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsPending(false);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div>
      <h1>Homepage</h1>

      {isPending ? <p>Loading...</p> : null}

      {blogs.map((blog) => {
        return (
          <p key={blog.objectId}>
            {blog.title} - {blog.author}
          </p>
        );
      })}
    </div>
  );
}

export default Homepage;
