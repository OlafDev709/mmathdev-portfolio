import TopNav from "@/components/TopNav";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const Conferences = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopNav />
      <main className="flex-1 max-w-5xl mx-auto px-6 py-10 w-full">
        <div className="flex gap-12">
          <Sidebar />
          <article className="flex-1 max-w-2xl">
            <h1 className="text-2xl font-semibold text-foreground mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Talks and presentations
            </h1>
            <div className="space-y-5 text-foreground leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              <p>
                This is a list of links to slides for conference talks.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <a
                    href="images/ESA_Slides.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link hover:text-foreground transition-colors"
                  >
                    Practical Low-Dimensional Halfspace Range Space Sampling
                  </a>
                </li>
                <li>
                  <a
                    href="images/ISAAC_slides.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link hover:text-foreground transition-colors"
                  >
                    Approximate Statistical Discrepancy
                  </a>
                </li>
                <li>
                  <a
                    href="images/Slides.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link hover:text-foreground transition-colors"
                  >
                    Scalable Spatial Scan Statistics
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Conferences;