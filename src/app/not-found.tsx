import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-[1320px] px-4 py-24 sm:px-6 lg:px-8">
      <p className="text-sm text-faint">Page not found</p>
      <h1 className="stretch-wide mt-3 max-w-[20ch] text-[clamp(2.2rem,5vw,4rem)] leading-[1] font-[800] tracking-tight">
        That element hasn&rsquo;t been discovered yet.
      </h1>
      <p className="mt-5 max-w-[52ch] font-serif text-lg leading-relaxed text-muted">
        There are 118 known elements, and this address doesn&rsquo;t match any of them. Check the
        spelling, or pick one from the table.
      </p>
      <Link
        href="/#table"
        className="mt-8 inline-block rounded-full bg-paper px-5 py-2.5 font-semibold text-ground hover:bg-white"
      >
        Open the periodic table
      </Link>
    </div>
  );
}
