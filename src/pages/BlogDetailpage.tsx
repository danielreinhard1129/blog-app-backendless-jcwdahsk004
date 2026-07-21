import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import axios from "axios";
import { ArrowLeft, Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import type { Blog } from "./Homepage";

function BlogDetailpage() {
  const params = useParams();

  const [blog, setBlog] = useState<Blog | null>(null);
  const [isPending, setIsPending] = useState<boolean>(true);

  const getBlog = async () => {
    try {
      const response = await axios.get(
        `https://cleverfloor-us.backendless.app/api/data/Blogs/${params.objectId}`,
      );
      setBlog(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsPending(false);
    }
  };

  useEffect(() => {
    getBlog();
  }, []);

  return (
    <div>
      <Navbar />

      {isPending && (
        <div className="flex justify-center items-center h-96">
          <p>Loading...</p>
        </div>
      )}

      {/* Article header */}
      <article className="mx-auto max-w-3xl px-4 pt-10 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-sky-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all articles
        </Link>

        <div className="mt-6">
          <Badge>{blog?.category}</Badge>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            {blog?.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-500">
            {blog?.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-slate-200 py-4">
            <div className="flex items-center gap-3">
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  {blog?.author}
                </p>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(blog?.created!).toDateString()}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-slate-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Thumbnail */}
      <div className="mx-auto mt-8 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          <img
            src={blog?.thumbnail}
            alt={blog?.title}
            className="aspect-video w-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="prose-content space-y-5">
          <p className="text-base leading-[1.8] text-slate-700 sm:text-lg">
            {blog?.content}
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default BlogDetailpage;
