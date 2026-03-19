import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { MapPin, Building, School, Car, DollarSign, Shield } from "lucide-react";
import { articles } from "@/lib/data";

const articleData = articles["franklin-tn-vs-nashville"];

export default function FranklinVsNashville() {
  return (
    <PageWrapper>
      <Helmet>
        <title>Franklin TN vs Nashville | Honest Relocation Comparison 2025</title>
        <meta 
          name="description" 
          content="Deciding between Franklin and Nashville? Compare cost of living, schools, commute times, and lifestyle to find your perfect fit in Middle Tennessee." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-24 px-4 bg-gradient-to-b from-blue-900 to-blue-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={`${import.meta.env.BASE_URL}images/franklin-vs-nashville.png`}
            alt="Franklin vs Nashville Comparison"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-950/60 mix-blend-multiply"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center z-10 space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-800/80 backdrop-blur-sm border border-blue-700/50 text-blue-100 text-sm font-semibold tracking-wider uppercase mb-2">
            The Ultimate Decision
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif leading-tight">
            Franklin vs. Nashville
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-light">
            Two incredible cities. Two entirely different ways to live. Here is the honest truth about which is right for you.
          </p>
        </div>
      </section>

      {/* Intro Context */}
      <section className="py-20 px-4 bg-stone-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-xl md:text-2xl text-stone-700 leading-relaxed font-serif">
            It’s the first question most people ask when they're relocating to Middle Tennessee. 
            The answer isn't about which city is "better" — it's entirely about what you are optimizing for in your daily life.
          </p>
        </div>
      </section>

      {/* At A Glance Comparison */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-950 text-center mb-16 font-serif">The Quick Comparison</h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Nashville Column */}
            <div className="bg-stone-50 rounded-3xl p-8 md:p-12 border border-stone-200 shadow-xl shadow-stone-200/50 hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-blue-900 rounded-2xl flex items-center justify-center text-white shrink-0">
                  <Building size={32} />
                </div>
                <h3 className="text-3xl font-bold text-blue-950 font-serif">Nashville</h3>
              </div>
              <p className="text-stone-600 mb-8 text-lg">
                The energetic, culturally rich core. Perfect for those who thrive on density and urban amenities.
              </p>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="mt-1 shrink-0 text-emerald-600"><MapPin size={24} /></div>
                  <div>
                    <strong className="block text-blue-950 text-lg mb-1">Vibe & Walkability</strong>
                    <span className="text-stone-600">Urban density, neighborhood grids, walkable pockets (East Nashville, 12South), late-night energy.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 shrink-0 text-amber-600"><DollarSign size={24} /></div>
                  <div>
                    <strong className="block text-blue-950 text-lg mb-1">Housing Costs</strong>
                    <span className="text-stone-600">Premium price-per-square-foot in desirable zip codes. Smaller lots. Higher property taxes.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 shrink-0 text-rose-600"><School size={24} /></div>
                  <div>
                    <strong className="block text-blue-950 text-lg mb-1">Schools</strong>
                    <span className="text-stone-600">Highly variable public schools. Many families opt for expensive private school options.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Franklin Column */}
            <div className="bg-blue-950 rounded-3xl p-8 md:p-12 text-white shadow-xl shadow-blue-900/20 hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-blue-800 rounded-2xl flex items-center justify-center text-white shrink-0 border border-blue-700">
                  <MapPin size={32} />
                </div>
                <h3 className="text-3xl font-bold text-white font-serif">Franklin</h3>
              </div>
              <p className="text-blue-100 mb-8 text-lg">
                The pristine, historic suburban haven. Perfect for those prioritizing schools, space, and quiet.
              </p>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="mt-1 shrink-0 text-emerald-400"><Shield size={24} /></div>
                  <div>
                    <strong className="block text-white text-lg mb-1">Vibe & Safety</strong>
                    <span className="text-blue-100">Spacious, master-planned communities, exceptionally safe, historic downtown charm.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 shrink-0 text-amber-400"><DollarSign size={24} /></div>
                  <div>
                    <strong className="block text-white text-lg mb-1">Housing Costs</strong>
                    <span className="text-blue-100">Better value per square foot. Larger lots. Meaningfully lower property taxes than Davidson Co.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 shrink-0 text-blue-300"><School size={24} /></div>
                  <div>
                    <strong className="block text-white text-lg mb-1">Schools</strong>
                    <span className="text-blue-100">The #1 public school district in Tennessee (Williamson County). A major draw for families.</span>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* The Commute Factor */}
      <section className="py-24 px-4 bg-stone-100">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-16 border border-stone-200 shadow-sm flex flex-col md:flex-row items-center gap-12">
            <div className="w-24 h-24 bg-stone-100 rounded-full flex items-center justify-center shrink-0 text-blue-900 border-8 border-white shadow-xl">
              <Car size={40} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-blue-950 font-serif mb-4">The Commute Reality</h2>
              <p className="text-lg text-stone-600 leading-relaxed mb-6">
                Franklin to downtown Nashville is roughly 21 miles. Without traffic, it's a breezy 25-minute drive. During rush hour on I-65, it can easily stretch to 45-60 minutes. 
              </p>
              <p className="text-lg text-stone-600 leading-relaxed">
                <strong>The takeaway:</strong> If you work from home or locally in Cool Springs, Franklin is a dream. If you must commute to downtown Nashville 5 days a week at 8:00 AM, you should drive the route before you buy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA to Full Article */}
      <section className="py-32 px-4 bg-blue-900 text-center text-white">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold font-serif">Read the Deep Dive</h2>
          <p className="text-xl text-blue-100 leading-relaxed mb-8">
            We've written a comprehensive, honest analysis of the Franklin vs. Nashville decision, covering cultural differences, exact price comparisons, and lifestyle nuances.
          </p>
          <Link 
            href={`/articles/${articleData.slug}`}
            className="inline-block px-8 py-4 bg-white text-blue-900 rounded-full font-bold text-lg hover:bg-stone-100 hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Read the Full Comparison Guide
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
}
