import { Github } from 'lucide-react';
import devto from '../assets/icons/dev-to-seeklogo.png';
import patreon from '../assets/icons/patreon.png';

export default function Footer() {
  return (
    <footer className="border-t border-border mt-8">
      <div className="max-w-screen-xl mx-auto p-4 py-12">
        {/* Navigation links */}
        <nav className="flex flex-col items-center md:flex-row justify-center gap-4 md:gap-8 mb-8">
          <a href="/templates" className="hover:text-primary">Templates</a>
          <a href="/hire-talent" className="hover:text-primary">Hire Talent</a>
          <a href="/live-editor" className="hover:text-primary">Live Editor</a>
          <a href="https://dev.to/sofia-tech" target="_blank" className="hover:text-primary">Blogs</a>
          {/* <a href="/press">Press</a>
          <a href="/accessibility">Accessibility</a>
          <a href="/partners">Partners</a> */}
        </nav>

        {/* Social media icons */}
        <div className="flex justify-center items-center gap-6 mb-8">
          <a href="https://github.com/sofiatechnology" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <Github />
          </a>
          <a href="https://dev.to/sofia-tech" aria-label="Dev.to" target="_blank" rel="noopener noreferrer">
            <img src={devto} alt="Dev.to icon" className="w-auto h-6" width={32} height={32} />
          </a>
          <a href="https://www.patreon.com/c/SOFIATech" aria-label="Patreon" target="_blank" rel="noopener noreferrer">
            <img src={patreon} alt="Patreon icon" className="" width={32} height={32} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center">
          © {new Date().getFullYear()} SOFIA Tech. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
