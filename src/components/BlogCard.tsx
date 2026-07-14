import type { BlogPost } from "@/data/blog";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowRight, Clock } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
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
          <Badge className="backdrop-blur-md bg-white/90">
            {post.category}
          </Badge>
        </div>
      </button>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span>{post.date}</span>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {post.readTime}
          </span>
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
            <img
              src={post.authorAvatar}
              alt={post.author}
              loading="lazy"
              className="h-8 w-8 rounded-full object-cover ring-2 ring-slate-100"
            />
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
