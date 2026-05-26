import TopNav from "@/components/TopNav";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const CV = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopNav />
      <main className="flex-1 max-w-5xl mx-auto px-6 py-10 w-full">
        <div className="flex gap-12">
          <Sidebar />
          <article className="flex-1 max-w-2xl">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-semibold text-foreground" style={{ fontFamily: 'Georgia, serif' }}>
                CV
              </h1>
              <a
                href="/images/Michael_Matheny_Resume.pdf"
                download="Michael_Matheny_Resume.pdf"
                className="inline-block px-4 py-2 bg-link text-background font-semibold rounded hover:opacity-90 transition-opacity"
              >
                Download CV
              </a>
            </div>
            <div className="space-y-5 text-foreground leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              <h2 className="text-xl font-semibold">Hard Skills</h2>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Programming Languages:</strong> Python, SQL, JavaScript/TypeScript, Java, Scala, Bash</li>
                <li><strong>Machine Learning:</strong> Supervised & Unsupervised Learning, Semi-Supervised Learning, Reinforcement Learning, Feature Engineering, Feature Selection, Model Evaluation, Hyperparameter Tuning, Ensemble Methods, Model Optimization</li>
                <li><strong>Deep Learning:</strong> Neural Networks, CNN, RNN, LSTM, GRU, Transformers, Attention Mechanisms, Autoencoders, Transfer Learning</li>
                <li><strong>LLM & Generative AI:</strong> Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), Fine-Tuning, Instruction Tuning, Prompt Engineering, RLHF, Embedding Models, Vector Databases, LangChain, LangGraph, LLaMA, NLP, Agentic AI, Mlflow, Amazon Bedrock</li>
                <li><strong>Natural Language Processing:</strong> BERT, GPT, Named Entity Recognition (NER), Text Classification, Sentiment Analysis, Question Answering, Chatbots, Tokenization, Speech-to-Text, Text-to-Speech</li>
                <li><strong>Computer Vision:</strong> Image Classification, Object Detection, Image Segmentation, Feature Extraction, OpenCV, Graph WaveNet</li>
                <li><strong>Machine Learning Frameworks:</strong> PyTorch, TensorFlow, Keras, Hugging Face Transformers, Scikit-learn, XGBoost, LightGBM</li>
                <li><strong>Data Science & Analytics:</strong> Pandas, NumPy, SciPy, Statistical Modeling, Hypothesis Testing, A/B Testing, Time Series Analysis, Bayesian Modeling, Data Cleaning, Data Wrangling</li>
                <li><strong>Data Engineering & Pipelines:</strong> ETL Pipelines, Data Pipelines, Airflow, Feature Stores</li>
                <li><strong>Big Data & Distributed Systems:</strong> Apache Spark, PySpark, Hadoop, Hive, Databricks, Amazon EMR, Snowflake</li>
                <li><strong>Databases:</strong> PostgreSQL, MySQL, MongoDB, Redis, PostGIS, Amazon Redshift, NoSQL</li>
                <li><strong>Cloud & MLOps:</strong> AWS (SageMaker, EC2, EKS, Lambda, S3), GCP, Azure, Docker, Kubernetes, CI/CD, Jenkins, ML Pipelines, Model Deployment, Model Monitoring</li>
                <li><strong>Visualization:</strong> Matplotlib, Seaborn, Plotly, Tableau</li>
              </ul>

              <h2 className="text-xl font-semibold">WORK EXPERIENCE</h2>

              <div>
                <h3 className="text-lg font-semibold">Meta | Seattle, WA</h3>
                <p className="text-muted-foreground">Senior ML Engineer | 03.2024 – Present</p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Engineer on the Meta AI Post-Training team, developing large-scale systems to evaluate and improve the factuality, safety, and reliability of Large Language Models using PyTorch.</li>
                  <li>Developed automated evaluation frameworks for LLMs with image understanding and computer vision capabilities, evaluating hallucinations, reasoning accuracy, factual correctness, NLP understanding, and caption quality across 50K+ prompts.</li>
                  <li>Built large-scale monitoring pipelines processing 10M+ daily LLM responses, automatically detecting and tracking failure modes such as hallucinations, toxicity, and reasoning errors.</li>
                  <li>Developed an active learning system that prioritizes high-value samples for human annotation, improving LLM post-training dataset efficiency by 40% and reducing annotation costs by 30%.</li>
                  <li>Implemented scalable distributed data pipelines for LLM evaluation and experimentation, reducing evaluation turnaround time by 60%.</li>
                  <li>Partnered with research scientists and product teams to support continuous LLM improvement cycles, accelerating model iteration speed by 2×.</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-2">Technologies: Python, PyTorch, Transformers, LLM Evaluation, Active Learning, Distributed Data Pipelines, Spark, AWS, LangChain, LangGraph, MCP, Spark, Hugging Face, RAG, AWS, Docker, Kubernetes, Computer Vision</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Amazon | Seattle, WA</h3>
                <p className="text-muted-foreground">Senior Applied Scientist | 06.2023 – 02.2024</p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Developed LLM-powered conversational product search and recommendation models serving 50M+ monthly users, improving product discovery relevance and increasing click-through rate by 7% in controlled A/B experiments.</li>
                  <li>Built semantic retrieval pipelines using transformer embeddings to rank over 500M+ products, reducing query-to-product latency by 35% while improving ranking accuracy by 12%.</li>
                  <li>Designed large-scale training and feature pipelines processing 5TB+ daily behavioral and catalog data using PySpark and Amazon EMR, reducing model training time by 40%.</li>
                  <li>Led experimentation and causal analysis for generative AI shopping assistants, improving conversion rate by 3.5% across key e-commerce categories.</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-2">Technologies: PyTorch, Transformers, LLMs, PySpark, Amazon EMR, Recommendation Systems, Retrieval Systems, AWS</p>
              </div>

              <div>
                <p className="text-muted-foreground">Applied Scientist II | 11.2020 – 06.2023</p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Increased Amazon's gross revenue by $400M+ in 2022 through new optimized organic search models in the US and EU5 and $120M+ in 2023 through better autocomplete recommendations.</li>
                  <li>Developed a causal inference framework to infer brand preferences, improving personalization and recommendation relevance in Amazon search.</li>
                  <li>Led fraud detection and chargeback automation initiatives, reducing US bad debt by $8.3M annually and saving $1.2M annually in electronic gift card fraud.</li>
                  <li>Detected and prevented 8 large-scale electronic gift card fraud attacks, mitigating potential losses of $12K–$6M per incident.</li>
                  <li>Mentored multiple scientists and managed three ML interns, delivering several end-to-end machine learning projects.</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-2">Technology: Deep Learning, Project Management, Transform, ETL Pipelines, Causal Inference, PySpark, Amazon Elastic MapReduce (EMR)</p>
              </div>

              <div>
                <p className="text-muted-foreground">Applied Scientist I | 11.2019 – 11.2020</p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Built LightGBM-based fraud detection models for credit and gift card transactions, preventing $3M+ in losses and reducing annual bad debt by $3.2M.</li>
                  <li>Designed and implemented ETL pipelines processing ~2TB of daily transaction data, enabling faster feature engineering and model iteration by 30%.</li>
                  <li>Leveraged Amazon Redshift and PySpark to aggregate and analyze millions of transactions per day, improving early detection of anomalous activity.</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-2">Technologies: Extract, Transform, Load (ETL), Amazon Redshift, PySpark, LightGBM, AWS SageMaker, Credit Card Fraud Prevention, Amazon Elastic MapReduce (EMR), Artificial Intelligence, Machine Learning</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">University of Utah | Salt Lake City, UT</h3>
                <p className="text-muted-foreground">Research Assistant | 09.2015 – 10.2019</p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Architected spatio-temporal forecasting models using Graph WaveNet to predict traffic flow one hour ahead, achieving 23% higher accuracy compared to ARIMA.</li>
                  <li>Built real-time incident detection models combining loop detector data, GPS traces, and DOT feeds, achieving 91% precision and 87% recall and reducing operator detection latency by 35%.</li>
                  <li>Developed the asymptotically fastest additive error algorithms for the maximum discrepancy problem over Rectangles, Halfspaces, and Disks and proved several related lower bounds on this problem.</li>
                  <li>Improved runtime of the state-of-the-art algorithms for spatial scan statistics by more than 100x in some cases.</li>
                  <li>Developed new algorithms and models that allowed scan statistics to be applied to heterogeneous data such as trajectories and regions in a scalable way.</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-2">Technologies: XGBoost, scikit-learn, Pandas, NumPy, SQL, FastAPI, AWS, PyTorch, TensorFlow, Graph WaveNet, Transformer, RL, Kafka, Spark, EKS, Redis, Prometheus, SUMO, PostGIS, WhyLabs</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Sandia National Laboratories | Albuquerque, New Mexico Area</h3>
                <p className="text-muted-foreground">Graduate Research Intern | 05.2015 - 08.2015</p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Developed and implemented named entity recognition (NER) pipelines using spaCy and Stanford SENNA, improving information extraction accuracy for research tasks.</li>
                  <li>Processed and analyzed datasets using NumPy and Pandas, enabling scalable and reproducible data workflows.</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-2">Technologies: spaCy, NumPy, Pandas, NER, Stanford SENNA, NLP</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">University of Delaware | Newark, DE</h3>
                <p className="text-muted-foreground">Research Assistant | 06.2011 - 03.2014</p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Developed an optimization framework for choosing parameters for the ADIOS I/O library on systems during heavy filesystem contention.</li>
                  <li>Wrote software integrating learning games into the pre-existing volunteer computing project, Docking@Home.</li>
                </ul>
                <p className="text-muted-foreground mt-2">Tutor | February 2011 - May 2012</p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Mentored students in various computer science and math classes.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Oak Ridge National Laboratory | Oak Ridge, TN</h3>
                <p className="text-muted-foreground">Undergraduate Researcher | 06.2013 – 08.2013</p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Worked on the QMCPack software under Scott Klasky where I developed better checkpointing methods and migrated the code to ADIOS.</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-2">Technologies: Python, SQL, PyMC3, Matplotlib, Hierarchical Modeling, Hadoop</p>
              </div>

              <h2 className="text-xl font-semibold">Education</h2>
              <div>
                <h3 className="text-lg font-semibold">University of Utah | Salt Lake City, CA - Ph.D, Computer Science 2014 – 2019</h3>
              </div>
              <div>
                <h3 className="text-lg font-semibold">University of Delaware | Berkeley, CA - Bachelor's Degree, Computer Science 2010 – 2014</h3>
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CV;