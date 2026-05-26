import { MapPin, Briefcase, Github, BookOpen } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 shrink-0">
      <div className="sticky top-8">
        <img
          src="/images/mainphoto.png"
          alt="Michael Matheny"
          className="w-48 h-48 object-cover rounded-sm mb-4"
        />
        <h2 className="text-lg font-semibold text-foreground mb-1" style={{ fontFamily: 'Georgia, serif' }}>
          Michael Matheny
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Staff AI/ML Engineer at Meta
        </p>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-link" />
            <span>Seattle, WA</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-link" />
            <span>Meta</span>
          </div>
          <a href="https://github.com/mmathdev" className="flex items-center gap-2 text-muted-foreground hover:text-link">
            <Github className="w-4 h-4" />
            <span>Github</span>
          </a>
          <a href="https://scholar.google.com/citations?hl=en&user=4fv14WQAAAAJ" className="flex items-center gap-2 text-muted-foreground hover:text-link">
            <BookOpen className="w-4 h-4" />
            <span>Google Scholar</span>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
