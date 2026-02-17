import { Mail, Phone, Camera } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Contact() {
  return (
    <section id="kontakt" className="section-padding bg-[#121212]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          {/* Left: image */}
          <div className="relative aspect-video overflow-hidden rounded-sm md:aspect-[4/3]">
            <Image
              src="/images/torstein/bakvideokamera.JPEG"
              alt="Torstein Vegheim bak kamera"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#121212]/30" />
          </div>

          {/* Right: contact info */}
          <div className="space-y-8">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#e8c97a]">
                La oss snakke
              </p>
              <h2 className="font-serif text-3xl font-bold text-[#f5f5f5] md:text-4xl">Kontakt</h2>
            </div>

            <p className="text-[#a3a3a3] leading-relaxed">
              Har du en idé til en musikkproduksjon? Trenger du en erfaren regissør til ditt neste
              prosjekt? Ta gjerne kontakt for en uforpliktende prat.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:torstein@vegheimregi.no"
                className="group flex items-center gap-4 rounded-sm border border-[#2a2a2a] bg-[#1a1a1a] px-5 py-4 transition-colors hover:border-[#e8c97a]/40"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#e8c97a]/10">
                  <Mail size={18} className="text-[#e8c97a]" />
                </div>
                <div>
                  <p className="text-xs text-[#6b6b6b]">E-post</p>
                  <p className="text-sm text-[#f5f5f5] group-hover:text-[#e8c97a] transition-colors">
                    torstein@vegheimregi.no
                  </p>
                </div>
              </a>

              <a
                href="tel:+4795240685"
                className="group flex items-center gap-4 rounded-sm border border-[#2a2a2a] bg-[#1a1a1a] px-5 py-4 transition-colors hover:border-[#e8c97a]/40"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#e8c97a]/10">
                  <Phone size={18} className="text-[#e8c97a]" />
                </div>
                <div>
                  <p className="text-xs text-[#6b6b6b]">Telefon</p>
                  <p className="text-sm text-[#f5f5f5] group-hover:text-[#e8c97a] transition-colors">
                    +47 952 40 685
                  </p>
                </div>
              </a>
            </div>

            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="mailto:torstein@vegheimregi.no">
                <Mail size={16} />
                Send e-post
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
