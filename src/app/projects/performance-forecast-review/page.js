import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "AI-Powered Strategic Planning Platform | Annabel Zhuang",
  description: "A case study on building and validating the data foundation behind an AI-enabled performance analytics platform.",
};

const tools = ["SQL", "Google Cloud Platform (GCP) BigQuery", "Data Pipelines", "BI", "AI Validation", "Responsible AI"];

export default function PerformanceForecastReviewPage() {
  return (
    <main className="min-h-screen bg-[#121212] text-white">
      <Link
        href="/"
        className="fixed left-6 top-6 z-50 rounded-full border border-gray-700 bg-[#181818] p-3 text-primary-400 shadow-lg transition-all duration-300 hover:border-primary-400 hover:bg-primary-400 hover:text-white"
        aria-label="Back to portfolio"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </Link>

      <div className="container mx-auto max-w-6xl px-6 py-24 md:px-10">
        <header className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary-400">Case Study / Data + AI</p>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            AI-Powered Decision &amp; Strategic Planning Platform
          </h1>
          <p className="text-lg leading-8 text-gray-300">
            Building the data foundation and validation layer that allows business leaders to confidently interact with operational metrics through an AI-enabled platform.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {tools.map((tool) => <span key={tool} className="rounded-full bg-[#33353F] px-4 py-2 text-sm text-gray-200">{tool}</span>)}
          </div>
        </header>

        <div className="mt-14 overflow-hidden rounded-xl border border-gray-700 bg-[#181818] p-3 shadow-2xl">
          <Image
            src="/images/performance-forecast-review.png"
            width={1600}
            height={900}
            className="h-auto w-full rounded-lg"
            alt="Performance forecast review dashboard with scorecards and an AI question-and-answer panel"
            priority
          />
          <p className="px-3 pb-2 pt-4 text-center text-sm text-gray-400">Performance review dashboard with scorecards, metric insights, and AI Q&amp;A.</p>
        </div>

        <section className="mt-10 rounded-xl border border-gray-800 bg-[#181818] p-7 md:p-10">
          <div className="mb-8 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-400">The data foundation</p>
            <h2 className="mb-3 text-3xl font-bold">Turning fragmented sources into decision-ready metrics.</h2>
            <p className="leading-7 text-gray-300">I sourced data from different teams, then used BigQuery to consolidate the data and calculate a consistent set of business metrics as the knowledge base for the AI platform.</p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            <div className="rounded-lg border border-primary-500/30 bg-primary-500/10 p-5">
              <p className="text-3xl font-bold text-white">27</p>
              <p className="mt-2 text-sm leading-5 text-gray-400">productivity, sales, and profit-margin elements</p>
            </div>
            <div className="rounded-lg border border-gray-700 bg-[#202024] p-5">
              <p className="text-3xl font-bold text-white">4</p>
              <p className="mt-2 text-sm leading-5 text-gray-400">views calculated: LY, TY, YTD, and QTD</p>
            </div>
            <div className="rounded-lg border border-gray-700 bg-[#202024] p-5">
              <p className="text-3xl font-bold text-white">2</p>
              <p className="mt-2 text-sm leading-5 text-gray-400">segments: domestic and international</p>
            </div>
            <div className="rounded-lg border border-secondary-500/30 bg-secondary-500/10 p-5">
              <p className="text-3xl font-bold text-white">216</p>
              <p className="mt-2 text-sm leading-5 text-gray-400">segment-period metric values supported</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-400">
            <span className="rounded-full border border-gray-700 px-3 py-1.5 text-gray-200">Fabric semantic models</span>
            <span className="text-primary-400">-&gt;</span>
            <span className="rounded-full border border-gray-700 px-3 py-1.5 text-gray-200">Excel inputs</span>
            <span className="text-primary-400">-&gt;</span>
            <span className="rounded-full border border-gray-700 px-3 py-1.5 text-gray-200">BigQuery consolidation</span>
            <span className="text-primary-400">-&gt;</span>
            <span className="rounded-full border border-gray-700 px-3 py-1.5 text-gray-200">BI + AI platform</span>
          </div>
        </section>

        <section className="mt-16 grid gap-8 md:grid-cols-2">
          <article className="rounded-xl border border-gray-800 bg-[#181818] p-7">
            <p className="mb-3 text-sm font-semibold text-primary-400">01 / The Challenge</p>
            <h2 className="mb-4 text-2xl font-bold">Make performance data easier to trust and explore.</h2>
            <p className="leading-7 text-gray-300">Business leaders needed a more accessible and interactive way to review performance and explore potential scenarios across different business areas. The existing Excel-based solution provided the underlying information, but required users to navigate disconnected inputs and manually interpret calculations, limiting the ability to interact with the data, compare scenarios, and leverage AI-driven insights.</p>
          </article>
          <article className="rounded-xl border border-gray-800 bg-[#181818] p-7">
            <p className="mb-3 text-sm font-semibold text-primary-400">02 / My Role</p>
            <h2 className="mb-4 text-2xl font-bold">Build the analytical foundation underneath the experience.</h2>
            <p className="leading-7 text-gray-300">I sourced data from Microsoft Fabric semantic models and Excel, then used BigQuery SQL to consolidate inputs and calculate 27 productivity, sales, and profit-margin metrics across LY, TY, MTD, QTD, and YTD for both domestic and international segments. I validated the results to ensure consistency and accuracy, tested AI agent responses against the underlying metrics, and documented responsible platform use to support trustworthy AI-driven insights.</p>
          </article>
        </section>

        <section className="mt-8 rounded-xl border border-gray-800 bg-[#181818] p-7 md:p-10">
          <p className="mb-3 text-sm font-semibold text-primary-400">03 / The Product</p>
          <h2 className="mb-8 text-3xl font-bold">One shared foundation for BI and AI.</h2>
          <div className="grid gap-8 text-gray-300 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-xl font-semibold text-white">Data &amp; metric development</h3>
              <p className="leading-7">I brought Microsoft Fabric semantic-model data and Excel inputs into BigQuery, where I consolidated the sources and established consistent definitions for 27 productivity, sales, and profit-margin elements.</p>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-semibold text-white">Validation &amp; AI accuracy</h3>
              <p className="leading-7">I cross-checked calculated metrics against source data and verified AI-generated responses against established calculations so users could trust what they saw and asked.</p>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-semibold text-white">Executive decision support</h3>
              <p className="leading-7">The platform supports period comparisons, performance review, what-if scenarios, and natural-language questions through an AI assistant.</p>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-semibold text-white">User guidance</h3>
              <p className="leading-7">I created documentation covering platform features, appropriate usage, and data security considerations for responsible AI adoption.</p>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-xl border border-gray-800 bg-[#181818] p-7 md:p-10">
          <p className="mb-3 text-sm font-semibold text-primary-400">04 / What I Learned</p>
          <blockquote className="border-l-2 border-primary-400 pl-6 text-xl leading-9 text-gray-200 md:text-2xl">
            My biggest takeaway from this project was that effective AI in analytics starts with a strong analytical foundation. I learned that the quality of an AI experience depends heavily on the data, metrics, and definitions underneath it. Building that foundation, validating the numbers, and understanding how users interpret the information were just as important—if not more important—than the AI layer itself. This changed how I think about AI: it&apos;s not just about building the model or adding an AI capability, but about making sure the underlying data and business logic are trustworthy enough to support better decisions.
          </blockquote>
        </section>

        <section className="mt-8 rounded-xl border border-primary-900/50 bg-primary-950/20 p-7 md:p-10">
          <h2 className="mb-4 text-2xl font-bold">Why it mattered</h2>
          <p className="max-w-4xl leading-8 text-gray-300">The project brought data, analytics, and AI together in one platform to support leadership decision-making. My contribution focused on building the analytical foundation behind that experience—integrating data from different sources, standardizing business metrics and definitions, and ensuring the information was accurate, consistent, and reliable enough to power AI-driven insights.</p>
        </section>

        <Link href="/#projects" className="mx-auto mt-12 block w-fit rounded-full border-2 border-primary-500 px-6 py-3 text-lg text-white transition-colors hover:border-white">View more projects</Link>
      </div>
    </main>
  );
}
