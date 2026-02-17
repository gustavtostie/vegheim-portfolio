import { Video, Lightbulb, Users, Mic } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const services = [
  {
    icon: Video,
    title: 'Regi',
    description:
      'Flerkameraregi for konserter, TV-produksjoner og musikkdokumentarer. Erfaring fra de største og minste settingene – alltid med musikken i fokus.',
  },
  {
    icon: Lightbulb,
    title: 'Konseptutvikling',
    description:
      'Hjelp til å forme musikkfilm­ideer fra begynnelse til slutt. Dramaturgi, fortellerperspektiv og visuelt uttrykk som løfter innholdet.',
  },
  {
    icon: Users,
    title: 'Rådgivning',
    description:
      'Strategisk og kreativ rådgivning for kulturproduksjoner og institusjoner. Over 40 år med innsikt i hva som fungerer foran – og bak – kameraet.',
  },
  {
    icon: Mic,
    title: 'Foredrag',
    description:
      'Engasjerende foredrag om musikkformidling, TV-regi og historiefortelling – basert på et langt liv i norsk kulturliv og kringkasting.',
  },
]

export function Services() {
  return (
    <section id="tjenester" className="section-padding bg-[#121212]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#e8c97a]">
            Hva jeg tilbyr
          </p>
          <h2 className="font-serif text-3xl font-bold text-[#f5f5f5] md:text-4xl">Tjenester</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.title} className="border-[#2a2a2a] bg-[#1a1a1a]">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-sm bg-[#e8c97a]/10">
                    <Icon size={20} className="text-[#e8c97a]" />
                  </div>
                  <h3 className="mb-2 font-semibold text-[#f5f5f5]">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-[#a3a3a3]">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
