import Image from 'next/image'
import { ExternalLink, Play } from 'lucide-react'
import { projects } from '@/data/projects'
import { Badge } from '@/components/ui/badge'

export function PortfolioGrid() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="portfolio" className="section-padding bg-[#0e0e0e]">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#e8c97a]">
            Utvalgte verk
          </p>
          <h2 className="font-serif text-3xl font-bold text-[#f5f5f5] md:text-4xl">
            Produksjoner
          </h2>
        </div>

        {/* Featured grid – 2 cols on md, first item spans 2 rows */}
        <div className="mb-4 grid gap-4 md:grid-cols-2">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} large={i === 0} />
          ))}
        </div>

        {/* Remaining projects – smaller cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-[#6b6b6b]">
          Trykk på kortene for å se programmene på NRK TV
        </p>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: (typeof projects)[number]
  large?: boolean
}

function ProjectCard({ project, large = false }: ProjectCardProps) {
  const Wrapper = project.href ? 'a' : 'div'
  const wrapperProps = project.href
    ? {
        href: project.href,
        target: '_blank' as const,
        rel: 'noopener noreferrer',
      }
    : {}

  return (
    <Wrapper
      {...wrapperProps}
      className={`group relative overflow-hidden rounded-sm bg-[#1e1e1e] ${
        large ? 'md:row-span-2' : ''
      } ${project.href ? 'cursor-pointer' : ''}`}
    >
      {/* Image */}
      <div className={`relative w-full overflow-hidden ${large ? 'aspect-[4/5]' : 'aspect-video'}`}>
        <Image
          src={project.imageSrc}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes={large ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 640px) 100vw, 33vw'}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent" />

        {/* Play / external icon */}
        {project.href && (
          <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#121212]/80 text-[#e8c97a] opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
            {project.platform === 'nrk' ? <Play size={16} fill="currentColor" /> : <ExternalLink size={14} />}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="mb-2 flex items-center gap-2">
          <Badge variant="secondary" className="text-[10px]">
            {project.year}
          </Badge>
          {project.platform === 'nrk' && (
            <Badge variant="outline" className="text-[10px]">
              NRK TV
            </Badge>
          )}
          {project.platform === 'youtube' && (
            <Badge variant="outline" className="text-[10px]">
              YouTube
            </Badge>
          )}
        </div>
        <h3 className={`font-semibold text-[#f5f5f5] ${large ? 'text-xl md:text-2xl' : 'text-base'}`}>
          {project.title}
        </h3>
        <p
          className={`mt-1.5 text-[#a3a3a3] transition-all duration-300 ${
            large ? 'text-sm md:max-h-none' : 'line-clamp-2 text-xs'
          }`}
        >
          {project.description}
        </p>
      </div>
    </Wrapper>
  )
}
