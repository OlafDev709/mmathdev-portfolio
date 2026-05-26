import TopNav from "@/components/TopNav";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const JustForFun = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopNav />
      <main className="flex-1 max-w-5xl mx-auto px-6 py-10 w-full">
        <div className="flex gap-12">
          <Sidebar />
          <article className="flex-1 max-w-2xl">
            <h1 className="text-2xl font-semibold text-foreground mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Just for Fun
            </h1>
            <div className="space-y-8 text-foreground leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              <p>
                Seattle City is a great place to live if you enjoy the outdoors. I try to get outside at least a couple of times a week even if it is just for a hike or some climbing. Here are a few pictures to highlight some of these escapades.
              </p>

              <div>
                <h2 className="text-xl font-semibold mb-4">Rock Climbing</h2>
                <img src="/images/rockclimb.png" alt="Climbing in the Wasatch" className="w-full max-w-md rounded mb-4" />
              </div>


              <div>
                <h2 className="text-xl font-semibold mb-4">Misc</h2>
                <img src="/images/caving.png" alt="Caving" className="w-full max-w-md rounded mb-4" />
                <img src="/images/iceland.png" alt="Iceland" className="w-full max-w-md rounded mb-4" />
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Family Stuff</h2>
                <p className="mb-4">
                  Most of my family live around Columbus in Ohio. My dad builds furniture, welds, and works on random projects. My mom teaches an AP Statistics class and quilts for fun. My brother just recently graduated from Ohio State University and is working for Chase bank on fraud detection and does photography for fun and profit on the side.
                </p>
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JustForFun;