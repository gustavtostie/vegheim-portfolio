import { Quote } from 'lucide-react'

export function Testimonial() {
  return (
    <section className="bg-[#0e0e0e] px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <Quote size={36} className="mx-auto mb-8 text-[#e8c97a]/40" />
        <blockquote className="font-serif text-2xl font-light italic leading-relaxed text-[#f5f5f5] md:text-3xl">
          &ldquo;Torstein Vegheim er en utrolig talentfull regissør. Han har en unik evne til å
          fange essensen av musikk og formidle den på en visuell og engasjerende måte.&rdquo;
        </blockquote>
        <p className="mt-8 text-sm text-[#6b6b6b]">— Hans Majestet Kongen</p>
      </div>
    </section>
  )
}
