import TopNav from "@/components/TopNav";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopNav />
      <main className="flex-1 max-w-5xl mx-auto px-6 py-10 w-full">
        <div className="flex gap-12">
          <Sidebar />
          <article className="flex-1 max-w-2xl">
            <h1 className="text-2xl font-semibold text-foreground mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Featured Professional Projects
            </h1>
            <div className="space-y-8 text-foreground leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              <div className="border-b border-border pb-6">
                <a
                  href="https://about.meta.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-semibold mb-2 hover:text-link transition-colors"
                >
                  Meta AI Post-Training System | 2024.03 - 2026.05
                </a>
                <p className="mb-4">
                  Developed LLM evaluation and monitoring systems analyzing <strong> 10M+ daily responses and 50K+ benchmark prompts</strong>, improving dataset efficiency by <strong>40%</strong> and reducing annotation costs by <strong>30%</strong> through active learning.
                </p>
                <img src="/images/metaai.png" alt="Meta AI Post-Training System" className="w-full rounded" />
              </div>
              <div className="border-b border-border pb-6">
                <a
                  href="https://wildtrack.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-semibold mb-2 hover:text-link transition-colors"
                >
                  WildTrack AI System | 2025.01 - 2025.12
                </a>
                <p className="mb-4">
                  Led development of a <strong>footprint-based wildlife AI system</strong> with on-device inference and high-accuracy species classification for conservation field teams.
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                  <li>Delivered <strong>ResNet-50</strong> and <strong>ONNX</strong> models with 95%+ accuracy for 40+ species.</li>
                  <li>Reduced mobile inference latency from <strong>5s</strong> to <strong>500ms</strong>.</li>
                </ul>
                <img src="/images/wildtrackai.png" alt="WildTrack AI System" className="w-full rounded" />
              </div>
              <div className="border-b border-border pb-6">
                <a
                  href="https://www.amazon.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-semibold mb-2 hover:text-link transition-colors"
                >
                  Amazon Shopping System | 2019.11 - 2024.02
                </a>
                <p className="mb-4">
                  Built search ranking, recommendation, and fraud detection models that generated <strong>$400M+ revenue in 2022 and $120M+ in 2023</strong>, while reducing <strong>$8.3M in annual bad debt</strong> and preventing <strong>8 large-scale fraud attacks</strong>.
                </p>
                <img src="/images/awsshopping.png" alt="Amazon Shopping System" className="w-full rounded" />
              </div>
              <div className="border-b border-border pb-6">
                <a
                  href="https://www.streetlightdata.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-semibold mb-2 hover:text-link transition-colors"
                >
                  Traffic Evacuation AI System | 2018.10 - 2019.08
                </a>
                <p className="mb-4">
                  Built an <strong>AI-assisted evacuation decision support system</strong> for real-time incident detection, congestion forecasting, and emergency route planning.
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                  <li>Improved traffic forecasting accuracy by <strong>23%</strong> with spatio-temporal models.</li>
                  <li>Achieved <strong>91%</strong> precision and <strong>87%</strong> recall for live incident detection.</li>
                </ul>
                <video
                  src="https://www.streetlightdata.com/wp-content/uploads/2025/10/Home-Page-v2.mp4"
                  controls
                  className="w-full rounded"
                />
              </div>
            </div>
            <h1 className="text-2xl font-semibold text-foreground mt-12 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Open-Source Projects
            </h1>
            <div className="space-y-8 text-foreground leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              <div className="border-b border-border pb-6">
                <a
                  href="https://github.com/mmathdev/pyscan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-semibold mb-2 hover:text-link transition-colors"
                >
                  pyscan
                </a>
                <p className="mb-4">
                  Implementations of a number of spatial scan statistic algorithms for different kinds of data sets.
                </p>
                <img src="/images/pyscan.png" alt="pyscan" className="w-full max-w-md rounded" />
              </div>
              <div className="border-b border-border pb-6">
                <a
                  href="https://github.com/mmathdev/pypartition"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-semibold mb-2 hover:text-link transition-colors"
                >
                  pypartition
                </a>
                <p className="mb-4">
                  This is the code used for the paper Practical Low-Dimensional Halfspace Range Space Sampling.
                </p>
                <img src="/images/pypartition.png" alt="pypartition" className="w-full max-w-md rounded" />
              </div>
              <div className="border-b border-border pb-6">
                <a
                  href="https://github.com/mmathdev/fjlt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-semibold mb-2 hover:text-link transition-colors"
                >
                  FJLT
                </a>
                <p className="mb-4">
                  An implementation of the Fast Johnson Lindenstrauss Transform written in python. Uses the fast hadamard transform, numpy, and scipy libraries.
                </p>
              </div>
              <div className="border-b border-border pb-6">
                <a
                  href="https://github.com/mmathdev/moore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-semibold mb-2 hover:text-link transition-colors"
                >
                  Moore
                </a>
                <p className="mb-4">
                  Does a combinatorial search to find Moore Graphs that satisfy the Hoffman–Singleton theorem.
                </p>
                <img src="/images/moore.png" alt="Moore" className="w-full max-w-md rounded" />
              </div>
              <div className="border-b border-border pb-6">
                <a
                  href="https://github.com/mmathdev/DataMiningReddit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-semibold mb-2 hover:text-link transition-colors"
                >
                  Reddit Comment Clustering
                </a>
                <p className="mb-4">
                  Computes clusters of subreddits using various metrics and various clustering schemes.
                </p>
                <img src="/images/redditcommentclustering.png" alt="Reddit Comment Clustering" className="w-full max-w-md rounded" />
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;