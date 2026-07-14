import { Feather, Rss } from "lucide-react";

const sections = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Changelog", "Roadmap"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Press", "Contact"],
  },
  {
    title: "Resources",
    links: ["Help Center", "Community", "Guidelines", "API Docs"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security", "Cookies"],
  },
];

const socials = [
  { icon: Rss, label: "Twitter" },
  { icon: Rss, label: "GitHub" },
  { icon: Rss, label: "LinkedIn" },
  { icon: Rss, label: "RSS" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500 text-white">
                <Feather className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold tracking-tight text-slate-900">
                Inkwell
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              A modern publishing platform for writers, thinkers, and builders.
              Share your ideas with the world.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {socials.map((s) => (
                <button
                  key={s.label}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-200 hover:text-slate-700"
                >
                  <s.icon className="h-4.5 w-4.5" />
                </button>
              ))}
            </div>
          </div>

          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-slate-900">
                {section.title}
              </h4>
              <ul className="mt-3 space-y-2.5">
                {section.links.map((link) => (
                  <li key={link}>
                    <button className="text-sm text-slate-500 transition-colors hover:text-sky-600">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Inkwell. All rights reserved.
          </p>
          <p className="text-sm text-slate-400">
            Crafted with care for the writing community.
          </p>
        </div>
      </div>
    </footer>
  );
}
