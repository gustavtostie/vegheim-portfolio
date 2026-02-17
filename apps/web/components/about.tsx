import Image from 'next/image'

export function About() {
  return (
    <section id="om" className="section-padding bg-[#121212]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          {/* Portrait */}
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-sm">
            <Image
              src="/images/torstein/cv_bilde.jpg"
              alt="Torstein Vegheim"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 80vw, 40vw"
            />
            {/* Subtle border accent */}
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[#e8c97a]/20" />
          </div>

          {/* Text */}
          <div className="space-y-6">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#e8c97a]">
                Om meg
              </p>
              <h2 className="font-serif text-3xl font-bold text-[#f5f5f5] md:text-4xl">
                Et liv bak kameraet
              </h2>
            </div>

            <div className="space-y-4 text-[#a3a3a3] leading-relaxed">
              <p>
                Jeg kom fra et levende musikkmiljø på Notodden, der vi på 70-tallet digget jazz og
                blues og hørte de store jazzmusikerne på Kongsbergfestivalen hvert eneste år. Slik
                begynte det – med musikk, fortellerlyst og et kamera.
              </p>
              <p>
                Etter å ha jobbet som foto og journalist for lokalpressen fikk jeg sjansen til å
                komme inn i NRK. Der ble jeg assistent for regilegenden{' '}
                <span className="text-[#f5f5f5]">Svein Erik Børja</span> og den fremragende
                regissøren <span className="text-[#f5f5f5]">Jan Horne</span>. Det ble grunnlaget
                for alt jeg siden har laget – historiefortellingens grunnprinsipper.
              </p>
              <p>
                I over <span className="text-[#f5f5f5]">40 år</span> har jeg hatt regi på klassiske
                musikk­produksjoner, konserter, portretter og dokumentarer – fra intim samtale med
                verdens ledende musikere til direktesending av store nasjonale arrangementer.
              </p>
              <p>
                Nå tilbyr jeg min erfaring som frilanser – til produksjoner som krever en regissør
                som forstår musikk fra innsiden, og som vet hvordan man fanger det øyeblikket der
                musikken virkelig lever.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 border-t border-[#2a2a2a] pt-6">
              {[
                { value: '40+', label: 'År i NRK' },
                { value: '8×', label: 'TV-Aksjonen' },
                { value: '1×', label: 'Gullruten' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-2xl font-bold text-[#e8c97a]">{stat.value}</p>
                  <p className="text-xs text-[#6b6b6b]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
