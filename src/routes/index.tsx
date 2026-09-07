import { createFileRoute } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import boutiqueImage from "@/assets/boutique.jpg";
import pendantImage from "@/assets/collection-pendant.jpg";
import riviereImage from "@/assets/collection-riviere.jpg";
import solitaireImage from "@/assets/collection-solitaire.jpg";
import featuredImage from "@/assets/featured-pieces.jpg";
import heroImage from "@/assets/hero-diamond.jpg";
import logoAsset from "@/assets/dc-jewellery-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DC Shopping Mall & Jewellery | Signature Jewellery" },
      {
        name: "description",
        content:
          "Discover signature diamond and gold jewellery from DC Shopping Mall & Jewellery, crafted for life's most memorable moments.",
      },
      { property: "og:title", content: "DC Shopping Mall & Jewellery" },
      {
        property: "og:description",
        content: "A refined collection of diamond and gold jewellery made to shine, belong, and endure.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const collections = [
  {
    name: "Éclat Solitaire",
    note: "The promise, distilled",
    price: "from $1,800",
    image: solitaireImage,
    alt: "Gold solitaire diamond ring on black velvet",
  },
  {
    name: "Rivière Line",
    note: "Gold in perpetual motion",
    price: "from $2,400",
    image: riviereImage,
    alt: "Polished gold bracelet on black velvet",
  },
  {
    name: "Lumière Pendant",
    note: "Light, held close",
    price: "from $960",
    image: pendantImage,
    alt: "Diamond pendant necklace on black velvet",
  },
];

const pieces = [
  { name: "Pear Solitaire", price: "$1,450", position: "14% 48%" },
  { name: "Pavé Hoop", price: "$780", position: "63% 38%" },
  { name: "Stacked Trio", price: "$1,120", position: "31% 66%" },
  { name: "Éclat Bangle", price: "$990", position: "83% 63%" },
];

function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" aria-label="DC Shopping Mall and Jewellery home" className="block shrink-0">
      <img
        src={logoAsset.url}
        alt="DC Shopping Mall and Jewellery"
        width={800}
        height={800}
        className={compact ? "h-12 w-auto object-contain sm:h-14" : "h-16 w-auto object-contain sm:h-20"}
      />
    </a>
  );
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main id="top" className="min-h-screen overflow-hidden bg-background font-body text-foreground antialiased">
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 sm:px-6">
          <BrandLogo compact />
          <nav aria-label="Main navigation" className="hidden items-center gap-9 text-xs uppercase tracking-[0.2em] text-muted-foreground md:flex">
            <a href="#collections" className="transition-colors hover:text-primary">Collections</a>
            <a href="#pieces" className="transition-colors hover:text-primary">Atelier</a>
            <a href="#boutique" className="transition-colors hover:text-primary">Boutique</a>
          </nav>
          <a href="#collections" className="hidden bg-primary px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-accent sm:inline-flex">
            Browse
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="grid size-10 place-items-center border border-border text-foreground md:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {menuOpen && (
          <nav aria-label="Mobile navigation" className="border-t border-border bg-background px-5 py-6 md:hidden">
            <div className="flex flex-col gap-5 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              {[
                ["Collections", "#collections"],
                ["Atelier", "#pieces"],
                ["Boutique", "#boutique"],
              ].map(([label, href]) => (
                <a key={href} href={href} onClick={() => setMenuOpen(false)} className="hover:text-primary">
                  {label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-20 top-10 h-[520px] w-[520px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-[420px] w-[420px] rounded-full bg-accent/5 blur-[110px]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-12 md:px-6 md:py-20 lg:min-h-[760px]">
          <div className="flex flex-col justify-center md:col-span-6">
            <p className="animate-fade-up text-[11px] uppercase tracking-[0.4em] text-primary">The Signature Edit · 2026</p>
            <h1 className="animate-fade-up mt-6 font-display text-[clamp(4.25rem,11vw,9rem)] leading-[0.82] text-foreground [animation-delay:120ms]">
              <span className="italic text-primary">D</span>C
              <span className="mt-5 block text-[clamp(1.75rem,4vw,3rem)] font-normal italic leading-none text-muted-foreground">Shopping Mall &amp; Jewellery</span>
            </h1>
            <div className="rule-grow mt-8 h-px w-40 bg-primary/60 [animation-delay:300ms]" />
            <p className="animate-fade-up mt-8 max-w-md text-sm leading-relaxed text-muted-foreground [animation-delay:200ms]">
              Cut, set and finished with care. A quiet opulence for the pieces that outlast the season — and the year.
            </p>
            <div className="animate-fade-up mt-10 flex flex-wrap items-center gap-6 [animation-delay:280ms]">
              <a href="#collections" className="bg-accent px-7 py-4 text-xs uppercase tracking-[0.2em] text-accent-foreground transition-colors hover:bg-primary">Explore Collections</a>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">New — Solstice Ring</span>
            </div>
          </div>
          <div className="flex items-center md:col-span-6 md:col-start-7">
            <div className="animate-fade-up w-full overflow-hidden rounded-lg border border-border [animation-delay:200ms]">
              <img src={heroImage} alt="Brilliant diamond ring on black velvet" width={1024} height={1280} fetchPriority="high" className="aspect-[4/5] w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="collections" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-20 md:px-6 md:py-28">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-display text-4xl text-foreground md:text-5xl">Signature <span className="italic text-primary">Collections</span></h2>
          <span className="hidden text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:block">(a) Curated</span>
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-6">
          {collections.map((collection, index) => (
            <article key={collection.name} className={index === 1 ? "group md:mt-12" : "group"}>
              <div className="overflow-hidden rounded-lg border border-border">
                <img src={collection.image} alt={collection.alt} width={1024} height={1280} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl text-foreground">{collection.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{collection.note}</p>
                </div>
                <span className="whitespace-nowrap pt-1 text-xs text-primary">{collection.price}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="pieces" className="scroll-mt-20 border-y border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-6 md:py-24">
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-display text-4xl text-foreground md:text-5xl">Featured <span className="italic text-primary">Pieces</span></h2>
            <span className="hidden text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:block">(b) The Atelier</span>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-8">
            {pieces.map((piece) => (
              <article key={piece.name} className="group">
                <div className="overflow-hidden rounded-lg border border-border">
                  <img src={featuredImage} alt={piece.name} width={1280} height={1024} loading="lazy" style={{ objectPosition: piece.position }} className="aspect-[4/5] w-full scale-[1.7] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.78]" />
                </div>
                <h3 className="mt-4 font-display text-lg text-foreground sm:text-xl">{piece.name}</h3>
                <p className="text-xs text-primary">{piece.price}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="boutique" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-24 md:px-6 md:py-32">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.4em] text-primary">Private Viewing</p>
            <h2 className="mt-5 font-display text-5xl leading-[1.05] text-foreground md:text-6xl">Visit the <span className="italic text-primary">Boutique</span></h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">A quiet room, a warm light, and the pieces laid out before you — unhurried and considered.</p>
            <a href="mailto:appointments@dcjewellery.com?subject=Private%20viewing%20request" className="mt-8 inline-block border-b border-primary pb-1 text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:text-primary">Reserve a Viewing</a>
          </div>
          <div className="overflow-hidden rounded-lg border border-border md:col-span-7">
            <img src={boutiqueImage} alt="Dark luxury jewelry boutique with gold-trimmed display cases" width={1280} height={1000} loading="lazy" className="aspect-[4/3] w-full object-cover" />
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 md:flex-row md:items-end md:justify-between md:px-6">
          <div>
            <BrandLogo />
            <p className="mt-2 max-w-xs text-xs leading-relaxed text-muted-foreground">Shopping Mall &amp; Jewellery. Shop · Shine · Belong.</p>
          </div>
          <div className="flex flex-wrap gap-8 text-xs uppercase tracking-[0.2em] text-muted-foreground md:gap-10">
            <a href="#collections" className="transition-colors hover:text-primary">Collections</a>
            <a href="#pieces" className="transition-colors hover:text-primary">Atelier</a>
            <a href="#boutique" className="transition-colors hover:text-primary">Boutique</a>
          </div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">© 2026 DC</p>
        </div>
      </footer>
    </main>
  );
}