import { useState } from "react";
import { ModeToggle } from "./mode-toggle";
import { Github } from "lucide-react";
import { Input } from "./ui/input";
import { Link } from "react-router";


function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-background text-foreground border-b border-border sticky top-0 z-50">
      <nav className="mx-auto container">
        <div className="flex justify-between items-center h-14">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="text-primary font-semibold text-xl">
                SOFIA Tech
              </Link>
            </div>

            {/* Navigation desktop */}
            <div className="hidden md:flex items-center space-x-2 gap-6">

              <Link to="/templates" className="text-muted-foreground hover:text-foreground py-2">
                Templates
              </Link>
              <a href="#docs" className="text-muted-foreground hover:text-foreground py-2">
                About Us
              </a>
              <a href="#products" className="text-muted-foreground hover:text-foreground py-2">
                Blogs
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {/* Search bar */}
            <div className="relative ml-4">
              <Input
                type="text"
                placeholder="Search..."
                className="w-[200px] pl-3 pr-8 py-1 text-sm border border-input rounded-md focus:outline-none focus:border-ring"
              />
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">Ctrl+K</span>
            </div>

            {/* Theme toggle */}
            <ModeToggle />

            {/* GitHub icon */}
            <a href="#github" className="ml-2 text-muted-foreground hover:text-foreground">
              <Github className="h-6 w-6" />
            </a>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-accent"
              >
                <svg
                  className={`h-6 w-6 ${isOpen ? "hidden" : "block"}`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  className={`h-6 w-6 ${isOpen ? "block" : "hidden"}`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu mobile */}
            <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#home" className="block text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">
                  Accueil
                </a>
                <a href="#templates" className="block text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">
                  Templates
                </a>
                <a href="#about" className="block text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">
                  À propos
                </a>
                <a href="#contact" className="block text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
