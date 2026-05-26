import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Publications", path: "/publications" },
  { label: "Conferences", path: "/conferences" },
  { label: "Projects", path: "/projects" },
  { label: "CV", path: "/cv" },
  { label: "Just For Fun", path: "/fun" },
];

const TopNav = () => {
  const location = useLocation();

  return (
    <nav className="border-b border-border">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-20">
        <Link to="/" className="nav-link text-muted-foreground font-black text-xl no-underline hover:text-foreground transition-colors">
          Michael Matheny/About
        </Link>
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link text-lg no-underline hover:text-foreground transition-colors ${
                location.pathname === item.path
                  ? "text-link font-medium"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
