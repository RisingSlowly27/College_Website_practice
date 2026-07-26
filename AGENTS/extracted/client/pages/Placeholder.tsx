import Layout from "@/components/site/Layout";
import Sidebar from "@/components/site/Sidebar";

export default function Placeholder({ title }: { title: string }) {
  return (
    <Layout>
      <div className="mx-auto flex max-w-[1720px] flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:px-10 lg:py-14">
        <Sidebar />
        <div className="flex flex-1 flex-col items-center justify-center rounded-[32px] border border-dashed border-brand/30 bg-cream/40 px-6 py-24 text-center">
          <h1 className="text-3xl font-bold text-brand sm:text-4xl">
            {title}
          </h1>
          <p className="mt-4 max-w-md text-base text-black/60">
            This page is coming soon. Keep prompting to have this section
            built out with real content.
          </p>
        </div>
      </div>
    </Layout>
  );
}
