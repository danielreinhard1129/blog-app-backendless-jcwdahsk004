import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, UploadCloud } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const items = [
  { label: "Technology", value: "Technology" },
  { label: "Design", value: "Design" },
  { label: "Food", value: "Food" },
];

function CreateBlogpage() {
  return (
    <div>
      <Navbar />

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <button className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-sky-600">
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>

        <div className="mt-6">
          <Badge className="mb-3">New Post</Badge>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Create a new article
          </h1>
          <p className="mt-2 text-slate-500">
            Share your story with the world. Fill in the details below and
            publish when you're ready.
          </p>
        </div>

        <form className="mt-8 space-y-7">
          <div className="space-y-2">
            <Label>Thumbnail</Label>
            <Input id="thumbnail" type="file" placeholder="Your thumbnail" />
          </div>

          <div className="space-y-2">
            <Label>Title</Label>
            <Input id="title" type="text" placeholder="Your title" />
          </div>

          <div className="space-y-2">
            <Label>Category</Label>
            <Select items={items}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {items.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea id="description" placeholder="Your description" />
          </div>

          <div className="space-y-2">
            <Label>Content</Label>
            <Textarea id="content" placeholder="Your content" />
          </div>

          {/* Actions */}
          <div className="flex flex-col-reverse gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-end">
            <Button variant="ghost">Cancel</Button>

            <Button>
              <UploadCloud className="h-4 w-4" />
              Publish
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateBlogpage;
