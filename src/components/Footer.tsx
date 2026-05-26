import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border mt-16">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <span>FOLLOW:</span>
          <a href="https://github.com/mmathdev" className="flex items-center gap-1 hover:text-link">
            <Github className="w-4 h-4" /> GITHUB
          </a>
          <a href="https://www.linkedin.com/in/michael-matheny-73425b5a/" className="flex items-center gap-1 hover:text-link">
            <Linkedin className="w-4 h-4" /> Linkedin
          </a>
        </div>
        <p className="text-xs text-muted-foreground">
          © 2025 Michael Matheny. Powered by Jekyll & AcademicPages, a fork of Minimal Mistakes.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
