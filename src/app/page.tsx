import { SiteHeader } from "@/components/Header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="mx-auto max-w-[1200px] px-4 py-16 text-center text-[#6b6b6b]">
          <p className="text-sm uppercase tracking-widest text-[#9b9b9b]">
            Partial clone — header / nav section only
          </p>
          <p className="mt-2 text-2xl font-bold text-gr-orange">
            Section cloned from grip500.fr
          </p>
        </div>
      </main>
    </>
  );
}
