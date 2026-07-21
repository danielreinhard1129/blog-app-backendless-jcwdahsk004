import { Feather, Menu, PenSquare, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { Button } from "./ui/button";

const navLinks = [
  { label: "Home", view: { name: "home" as const } },
  { label: "Articles", view: { name: "home" as const } },
  { label: "Topics", view: { name: "home" as const } },
  { label: "About", view: { name: "home" as const } },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/80 backdrop-blur-lg">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500 text-white shadow-sm shadow-sky-500/40">
            <Feather className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold tracking-tight text-slate-900">
            Inkwell
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.label}
              className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors text-slate-600 hover:text-slate-900 hover:bg-slate-100`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Link to="/login">
            <Button variant="ghost" size="sm">
              Sign in
            </Button>
          </Link>
          <Link to="/create">
            <Button size="sm">
              <PenSquare className="h-4 w-4" />
              Write
            </Button>
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => {
                  setOpen(false);
                }}
                className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="mt-3 flex flex-col gap-2 border-t border-slate-100 pt-3">
            <Link to="/login">
              <Button
                variant="outline"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Sign in
              </Button>
            </Link>
            <Link to="/create">
              <Button
                onClick={() => {
                  setOpen(false);
                }}
              >
                <PenSquare className="h-4 w-4" />
                Write a post
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
