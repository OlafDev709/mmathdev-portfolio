import TopNav from "@/components/TopNav";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopNav />
      <main className="flex-1 max-w-5xl mx-auto px-6 py-10 w-full">
        <div className="flex gap-12">
          <Sidebar />
          <article className="flex-1 max-w-2xl">
            <h1 className="text-2xl font-semibold text-foreground mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              About me
            </h1>
            <div className="space-y-5 text-foreground leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              <p>
                <strong>Senior Machine Learning Engineer / Applied Scientist</strong> with <strong>10+ years</strong> of experience building large-scale AI and ML systems.
              </p>
              <p>
                At <strong><a href="https://www.meta.com/">Meta</a></strong>, developed LLM evaluation and monitoring systems analyzing <strong>10M+ daily responses</strong> and <strong>50K+ benchmark prompts</strong>, improving dataset efficiency by <strong>40%</strong> and reducing annotation costs by <strong>30%</strong> through active learning.
              </p>
              <p>
                Previously at <strong><a href="https://www.amazon.com/">Amazon</a></strong>, built search ranking, recommendation, and fraud detection models that generated <strong>$400M+ revenue</strong> in 2022 and <strong>$120M+ in 2023</strong>, while reducing <strong>$8.3M in annual bad debt</strong> and preventing <strong>8 large-scale fraud attacks</strong>.
              </p>
              <p>
                Holds a <strong>Ph.D. in Computer Science</strong> from the <strong><a href="https://www.utah.edu/">University of Utah</a></strong>(2014-2019), where research focused on scalable algorithms and statistical modeling for large-scale data analysis under the supervision of <strong><a href="http://www.cs.utah.edu/~jeffp/">Dr. Jeff Phillips</a></strong>. Doctoral work included the publication of <strong><a href="https://arxiv.org/abs/1906.09381">The Kernel Spatial Scan Statistic</a></strong>
              </p>
              <p>
                Completed undergraduate studies at the <strong><a href="https://www.udel.edu/">University of Delaware</a></strong> (2010–2014), earning a <strong>B.S. in Computer Science</strong> with a minor in <strong>Mathematics</strong>.
              </p>
              <p>In my spare time I enjoy doing outdoor activities such as rock climbing, hiking, and skiing, and indoor activities such as eating unhealthy food and playing the occasional rpg.</p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
