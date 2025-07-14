import Image from "next/image";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <NavBar />
      <main className="min-h-screen relative">
        <section className="hero-wrapper">
          <div className="hero-section-left p-20 py-32">
            <div className="hero-cta-wrapper flex flex-col items-start justify-center h-full gap-20">
              <div className="hero-cta-text-wrapper flex flex-col gap-4">
                <div>
                  <p>
                    Career powered by intelligence and AI
                  </p>
                </div>
                <h1 className="text-4xl">Intelligient Career Navigation System for Individuals and Organizations</h1>
                <p className="text">Intelligient Career Navigation System for Individuals and Organizations</p>
              </div>
              <div className="hero-cta-input-wrapper flex items-center bg-white rounded-2xl p-1">
                <input type="text" placeholder="Enter your email here" className="p-2" />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-xl ml-2">
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>
          <div className="hero-section-right flex items-center justify-center p-24 bg-yellow-500">
            <div className="px-12">
              <Image
                src="/images/mockup.png"
                alt="Mobile UI"
                width={500}
                height={1000}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
