import Layout from "@/components/site/Layout";
import Sidebar from "@/components/site/Sidebar";

export default function Index() {
  return (
    <Layout>
      {/* Top Section: Hero Banner containing Left Menu (Sidebar) */}
      <div className="mx-auto max-w-[1720px] py-6 lg:py-8 px-0">
        <div className="relative overflow-hidden rounded-[36px] bg-cream shadow-sm">
          <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] lg:aspect-[231/130] max-h-[620px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/8e8e137ce88b520c343c3dcfd6520882346fe123?width=3920"
              alt="Computer Science and Technology department"
              className="absolute inset-0 h-full w-full object-cover rounded-[36px]"
            />
            {/* Soft overlay to ensure high contrast */}
            <div className="absolute inset-0 bg-black/10" />

            <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-between p-6 lg:p-12 gap-8 z-10">
              <div className="shrink-0">
                <Sidebar />
              </div>

              <div className="flex-1 flex items-center justify-start lg:pl-12">
                <h1 className="max-w-[647px] text-3xl font-bold leading-tight text-brand drop-shadow-[0_2px_8px_rgba(255,255,255,0.7)] sm:text-5xl lg:text-[64px] lg:leading-[74px]">
                  Computer Science and Technology
                </h1>
              </div>
            </div>

            <div className="absolute right-0 top-1/3 hidden -translate-y-1/2 lg:flex z-20">
              <div className="flex h-[190px] w-[143px] items-center justify-center rounded-l-[41px] bg-cream-dark">
                <span className="-rotate-90 whitespace-nowrap text-2xl font-semibold text-brand">
                  Updates
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area (Full Width below top section) */}
      <div className="mx-auto max-w-[1720px] py-8 lg:py-12 px-0">
        <section id="about" className="grid gap-10 lg:grid-cols-[554px_1fr] lg:items-start lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold text-brand sm:text-[40px]">
              About the Department
            </h2>
            <p className="mt-6 text-justify text-base leading-relaxed text-black sm:text-lg lg:text-xl">
              The Department of Computer Science and Technology (CST) was
              established in 1982. Since its inception, the department has
              played an important role in developing a vibrant and
              forward-looking academic environment. Currently, the
              department offers B.Tech, M.Tech, and Ph.D. programs.
            </p>
            <p className="mt-4 text-justify text-base leading-relaxed text-black sm:text-lg lg:text-xl">
              The department always maintains state of the art
              infrastructure and facilities for advanced research and
              consultancy. The department was accredited by the National
              Board of Accreditation (NBA) as an 'A' grade department and
              received ISO 9000 certification in 1999-2000. The department
              was also honoured as the DST-FIST sponsored department in
              2004. The department was ranked 10 in a nationwide survey
              conducted by Silicon India in 2012.
            </p>
          </div>

          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/ade0e0a5777ad1da8e17aa6dbbdf92b074695aeb?width=1792"
            alt="Department of Computer Science and Technology"
            className="w-full rounded-[36px] object-cover"
          />
        </section>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <button className="flex-1 rounded-full bg-brand px-6 py-4 text-base font-medium text-white transition hover:bg-brand-dark sm:min-w-[280px] sm:text-xl">
            M.Tech Admission Brochure 2025
          </button>
          <button className="flex-1 rounded-full bg-brand-darker px-6 py-4 text-base font-medium text-white transition hover:bg-brand-darkest sm:min-w-[280px] sm:text-xl">
            The Loop Volume 1 Issue 1
          </button>
          <button className="flex-1 rounded-full bg-brand px-6 py-4 text-base font-medium text-white transition hover:bg-brand-dark sm:min-w-[280px] sm:text-xl">
            The Loop Volume 1 Issue 2
          </button>
        </div>
      </div>

      <section className="pb-16 px-0">
        <div className="relative mx-auto max-w-[1720px] overflow-hidden rounded-[47px] bg-brand-darkest px-6 py-10 sm:px-10 sm:py-14 lg:px-16">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/caad237527a2fd7380152983535da16cd66d15af?width=3446"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-luminosity"
          />

          <div className="relative flex flex-col gap-10">
            <div>
              <div className="flex items-center gap-3">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/439ddafdc9e1e2a0812c5428f19598d8e3bab602?width=78"
                  alt=""
                  className="h-8 w-8 sm:h-10 sm:w-10"
                />
                <h2 className="text-2xl font-bold text-white sm:text-[32px]">
                  Vision
                </h2>
              </div>
              <p className="mt-4 max-w-4xl text-base leading-relaxed text-white sm:text-xl">
                To be recognized globally for excellence in academic programs
                and innovative, applied and socially relevant research.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/b64d08c7bd4e29bf306d88b235adc46897c5e1cf?width=84"
                  alt=""
                  className="h-8 w-8 sm:h-10 sm:w-10"
                />
                <h2 className="text-2xl font-bold text-white sm:text-[32px]">
                  Mission
                </h2>
              </div>
              <p className="mt-4 max-w-4xl text-base leading-relaxed text-white sm:text-xl">
                To provide the students with a firm foundation of both the
                theory and practice of Computer Science and Technology
                through a comprehensive undergraduate and postgraduate
                curricula, and to strengthen creativity, nurture innovation,
                and develop the ability to carry out research and solve
                real-world problems.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
