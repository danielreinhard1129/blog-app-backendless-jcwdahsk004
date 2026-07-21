import type { Blog } from "@/pages/Homepage";
import { ArrowRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

interface BlogCardProps {
  post: Blog;
}

function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="group flex flex-col overflow-hidden">
      <button className="relative block aspect-16/10 overflow-hidden">
        <img
          src={post.thumbnail}
          alt={post.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4">
          <Badge>{post.category}</Badge>
        </div>
      </button>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span>{new Date(post.created).toDateString()}</span>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
        </div>

        <button className="mt-2 text-left">
          <h3 className="text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-sky-600">
            {post.title}
          </h3>
        </button>

        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-500">
          {post.description}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-sm font-medium text-slate-700">
              {post.author}
            </span>
          </div>
          <button className="inline-flex items-center gap-1 text-sm font-medium text-sky-600 transition-all hover:gap-2">
            Read More
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </Card>
  );
}

export default BlogCard;
