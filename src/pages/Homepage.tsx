import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Sparkles } from "lucide-react";
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
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-b from-sky-50 via-white to-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/2 h-72 w-2xl -translate-x-1/2 rounded-full bg-sky-200/40 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-5">
              <Sparkles className="h-3.5 w-3.5" />
              Welcome to Inkwell
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Stories, ideas, and ideas worth
              <span className="text-sky-500"> sharing.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-500">
              A modern publishing platform where writers, thinkers, and builders
              come together to share perspectives that move the conversation
              forward.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg">Start writing</Button>
              <Button variant="outline" size="lg">
                Read featured post
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-xl font-bold text-slate-900">Latest articles</h2>
        </div>

        {isPending && (
          <div className="h-60 flex justify-center items-center">
            <p>Loading...</p>
          </div>
        )}

        {!isPending && !!blogs.length && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((post) => (
              <BlogCard key={post.objectId} post={post} />
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Homepage;
