import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
// import { useParams } from "react-router";

function BlogDetailpage() {
  //   const params = useParams();

  return (
    <div>
      <Navbar />

      {/* Article header */}
      <article className="mx-auto max-w-3xl px-4 pt-10 sm:px-6 lg:px-8">
        <button className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-sky-600">
          <ArrowLeft className="h-4 w-4" />
          Back to all articles
        </button>

        <div className="mt-6">
          <Badge>Tips</Badge>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            Cara Jago Ngoding
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi ab
            pariatur expedita dolorum maiores debitis consectetur? Deserunt,
            voluptatibus provident quisquam odio, omnis non vel corporis
            doloremque quasi est, tenetur fugit.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-slate-200 py-4">
            <div className="flex items-center gap-3">
              <img
                // src={post.authorAvatar}
                // alt={post.author}
                className="h-11 w-11 rounded-full object-cover ring-2 ring-slate-100"
              />
              <div>
                <p className="text-sm font-semibold text-slate-800">Budi</p>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    12 Jun 2024
                  </span>
                  <span className="h-1 w-1 rounded-full bg-slate-300" />
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />5 min
                  </span>
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
            // src={post.thumbnail}
            // alt={post.title}
            className="aspect-video w-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="prose-content space-y-5">
          <p className="text-base leading-[1.8] text-slate-700 sm:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            ipsum dolorum nobis, voluptates, nam exercitationem quasi aut
            corporis voluptas laborum animi, velit rem enim earum maxime nulla
            voluptatibus aliquam vero. Error ipsa accusantium perferendis
            doloremque est sint perspiciatis doloribus ipsum, magnam, atque
            voluptatum. Ullam quibusdam labore quam in itaque maxime officia
            rerum fugiat molestiae, culpa, laudantium dolore, dolorem porro
            possimus nisi repudiandae fugit rem nemo sequi vel. Error eius
            doloremque distinctio quam minus ab ea consectetur ducimus vero,
            amet sapiente assumenda laboriosam, velit aperiam! Laudantium
            accusantium perferendis atque magnam ullam ab delectus? Inventore
            enim cum veritatis repellendus iste, assumenda sit.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default BlogDetailpage;
