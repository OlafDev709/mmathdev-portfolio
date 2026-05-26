import TopNav from "@/components/TopNav";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const publications = [
  {
    title: "Approximate Maximum Halfspace Discrepancy",
    venue: "32nd International Symposium on Algorithms and Computation (ISAAC 2021)",
    year: 2021,
    link: "https://arxiv.org/abs/2106.13851",
    abstract: "Provides an efficient algorithm for approximating maximum halfspace discrepancy in high dimensions, improving over previous solutions with polynomial factors.",
    citation: "Michael Matheny. Approximate Maximum Halfspace Discrepancy. 32nd International Symposium on Algorithms and Computation (ISAAC 2021), 2021."
  },
  {
    title: "Spatial Independent Range Sampling",
    venue: "SIGMOD",
    year: 2021,
    link: "https://dl.acm.org/doi/abs/10.1145/3448016.3452806",
    abstract: "Introduces spatial independent range sampling for efficient random sampling over large spatial datasets with independence guarantees.",
    citation: "Michael Matheny. Spatial Independent Range Sampling. SIGMOD, 2021."
  },
  {
    title: "The Kernel Spatial Scan Statistic",
    venue: "In Submission",
    year: 2019,
    link: "https://arxiv.org/abs/1906.09381",
    abstract: "Generalizes spatial scan statistics using kernel functions for smoother anomaly detection in spatial data.",
    citation: "Mingxuan Han, Michael Matheny, and Jeff M. Phillips. The Kernel Spatial Scan Statistic. In Submission(arxiv:1906.09381), 2019. https://arxiv.org/abs/1906.09381"
  },
  {
    title: "Scalable Spatial Scan Statistics for Trajectories",
    venue: "ACM Transactions on Knowledge Discovery from Data (TKDD) 14 (6), 1-24",
    year: 2019,
    link: "https://arxiv.org/abs/1906.01693",
    abstract: "Develops scalable methods for detecting anomalous regions in large trajectory datasets using spatial scan statistics.",
    citation: "Michael Matheny. Scalable Spatial Scan Statistics for Trajectories. ACM Transactions on Knowledge Discovery from Data (TKDD) 14 (6), 1-24, 2019. https://arxiv.org/abs/1906.01693"
  },
  {
    title: "Computing Approximate Statistical Discrepancy",
    venue: "29th International Symposium on Algorithms and Computation",
    year: 2018,
    link: "https://arxiv.org/abs/1804.11287",
    abstract: "Presents methods for computing approximate statistical discrepancy across various range spaces with tight bounds.",
    citation: "Michael Matheny. Computing Approximate Statistical Discrepancy. 29th International Symposium on Algorithms and Computation, 2018. https://arxiv.org/abs/1804.11287"
  },
  {
    title: "Practical Low-Dimensional Halfspace Range Space Sampling",
    venue: "26th Annual European Symposium on Algorithms Track b",
    year: 2018,
    link: "https://arxiv.org/abs/1804.11307",
    abstract: "Offers practical algorithms for sampling in low-dimensional halfspace range spaces with near-optimal performance.",
    citation: "Michael Matheny. Practical Low-Dimensional Halfspace Range Space Sampling. 26th Annual European Symposium on Algorithms Track b, 2018. https://arxiv.org/abs/1804.11307"
  },
  {
    title: "Scalable Spatial Scan Statistics through Sampling",
    venue: "Proceedings of the 24th ACM SIGSPATIAL International Conference on Advances in Geographic Information Systems",
    year: 2016,
    link: "https://dl.acm.org/citation.cfm?id=2996939",
    abstract: "Explores theoretical guarantees when applying sampling techniques to spatial scan statistics for scalability.",
    citation: "Michael Matheny. Scalable Spatial Scan Statistics through Sampling. Proceedings of the 24th ACM SIGSPATIAL International Conference on Advances in Geographic Information Systems, 2016. https://dl.acm.org/citation.cfm?id=2996939"
  },
  {
    title: "Using surrogate-based modeling to predict optimal I/O parameters of applications at the extreme scale",
    venue: "20th IEEE International Conference on Parallel and Distributed Systems",
    year: 2014,
    link: "https://ieeexplore.ieee.org/abstract/document/7097855",
    abstract: "Uses surrogate modeling to predict optimal I/O parameters for extreme-scale applications efficiently.",
    citation: "Michael Matheny. Using surrogate-based modeling to predict optimal I/O parameters of applications at the extreme scale. 20th IEEE International Conference on Parallel and Distributed Systems, 2014. https://ieeexplore.ieee.org/abstract/document/7097855"
  },
  {
    title: "Performance impact of I/O on QMCPack simulations at the petascale and beyond",
    venue: "IEEE 16th International Conference on Computational Science and Engineering",
    year: 2013,
    link: "https://ieeexplore.ieee.org/abstract/document/6755202/authors#authors",
    abstract: "Analyzes I/O performance impacts on QMCPack quantum Monte Carlo simulations at large scales.",
    citation: "Michael Matheny. Performance impact of I/O on QMCPack simulations at the petascale and beyond. IEEE 16th International Conference on Computational Science and Engineering, 2013. https://ieeexplore.ieee.org/abstract/document/6755202/authors#authors"
  },
  {
    title: "ExSciTecH: expanding volunteer computing to explore science, technology, and health",
    venue: "IEEE 8th International Conference on E-Science",
    year: 2012,
    link: "https://ieeexplore.ieee.org/abstract/document/6404451",
    abstract: "Presents ExSciTecH, an NSF-funded project for volunteer computing in science, technology, and health domains.",
    citation: "Michael Matheny. ExSciTecH: expanding volunteer computing to explore science, technology, and health. IEEE 8th International Conference on E-Science, 2012. https://ieeexplore.ieee.org/abstract/document/6404451"
  },
  {
    title: "APPROXIMATE STATISTICAL DISCREPANCY",
    venue: "University of Utah",
    year: null,
    link: "https://drive.google.com/file/d/1Qj0mSIclA1QoUot_iemHBojWKJkoJnXk/view",
    abstract: "PhD dissertation on approximate statistical discrepancy methods and their applications.",
    citation: "Michael Matheny. APPROXIMATE STATISTICAL DISCREPANCY. University of Utah. https://drive.google.com/file/d/1Qj0mSIclA1QoUot_iemHBojWKJkoJnXk/view"
  }
];

const Publications = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopNav />
      <main className="flex-1 max-w-5xl mx-auto px-6 py-10 w-full">
        <div className="flex gap-12">
          <Sidebar />
          <article className="flex-1 max-w-2xl">
            <h1 className="text-2xl font-semibold text-foreground mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Publications
            </h1>
            <div className="space-y-8">
              {publications.map((pub, index) => (
                <div key={index} className="border-b border-border pb-6">
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold mb-2 hover:text-link transition-colors"
                  >
                    {pub.title}
                  </a>
                  <p className="text-base text-muted-foreground mb-4">
                    Published in {pub.venue}{pub.year ? `, ${pub.year}` : ''}
                  </p>
                  <p className="text-base leading-relaxed mb-4">{pub.abstract}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Publications;