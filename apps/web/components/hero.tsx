import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/torstein/Regiistudio.JPG"
          alt="Torstein Vegheim i studio"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/70 via-[#121212]/50 to-[#121212]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Overline */}
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#e8c97a]">
          40 år i NRK &mdash; nå frilanser
        </p>

        {/* Main quote */}
        <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-balance text-[#f5f5f5] md:text-6xl lg:text-7xl">
          &laquo;Også den klassiske musikken
          <br className="hidden md:block" /> må groove litt&raquo;
        </h1>

        {/* Name and title */}
        <div className="mb-10 space-y-1">
          <p className="text-2xl font-light text-[#f5f5f5] md:text-3xl">Torstein Vegheim</p>
          <p className="text-base text-[#a3a3a3] md:text-lg">
            Regissør, historieforteller og musikkformidler
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg">
            <a href="#portfolio">Se produksjoner</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#kontakt">Ta kontakt</a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#om"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-[#6b6b6b] hover:text-[#a3a3a3]"
        aria-label="Scroll ned"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  )
}
