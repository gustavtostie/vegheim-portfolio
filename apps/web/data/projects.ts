export interface Project {
  id: string
  title: string
  year: string
  description: string
  /** Path relative to /public – e.g. /images/projects/kalvoya.jpg */
  imageSrc: string
  /** NRK TV or YouTube link. undefined = not yet available online */
  href?: string
  /** Which platform the link leads to */
  platform?: 'nrk' | 'youtube'
  /** Show this project prominently in the hero grid */
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'kalvoya',
    title: 'Dokumentar om Kalvøyafestivalen',
    year: '2021',
    description:
      'En varm og nær dokumentar om den folkekjære musikk­festivalen på Kalvøya utenfor Oslo. Vegheim fanger festivalånden og musikerne bak scenen.',
    imageSrc: '/images/projects/kalvoya.jpg',
    href: 'https://tv.nrk.no/program/MKMU94000021',
    platform: 'nrk',
    featured: true,
  },
  {
    id: 'andsnes',
    title: 'Klangen av Andsnes',
    year: '2023',
    description:
      'Portrett av verdensberømte pianisten Leif Ove Andsnes – en intim reise inn i hans musikk­univers og tanker om det å formidle klassisk musikk.',
    imageSrc: '/images/projects/andsnes.jpg',
    href: 'https://tv.nrk.no/program/MKMU17000022',
    platform: 'nrk',
    featured: true,
  },
  {
    id: 'tine-thing',
    title: 'Portrett av Tine Thing Helseth',
    year: '2023',
    description:
      'Møt trompetvirtuosen Tine Thing Helseth i et varmt og personlig portrett som viser kunstneren og mennesket bak instrumentet.',
    imageSrc: '/images/projects/tine-thing.jpg',
    href: 'https://tv.nrk.no/program/MKMU18000022',
    platform: 'nrk',
    featured: true,
  },
  {
    id: 'kongefamilien',
    title: 'Året med Kongefamilien',
    year: '2018–2021',
    description:
      'Fire år bak kamera i den norske kongefamiliens hverdag. En unik tilgang som ga TV-seerne et sjeldent innblikk i hofflivet.',
    imageSrc: '/images/projects/kongefamilien.jpg',
    href: 'https://tv.nrk.no/serie/aaret-med-kongefamilien',
    platform: 'nrk',
    featured: true,
  },
  {
    id: 'lise-davidsen',
    title: 'Portrett av Lise Davidsen',
    year: '2019',
    description:
      'Portrett av den internasjonale operastjernen Lise Davidsen – fra norske røtter til verdens største operascener.',
    imageSrc: '/images/projects/lise-davidsen.jpg',
    href: 'https://tv.nrk.no/program/MKTV23000020',
    platform: 'nrk',
  },
  {
    id: 'tolv-bla',
    title: 'Tolv Blå – Vold & Virud',
    year: '2019',
    description:
      'Et poetisk møte mellom Jan Erik Volds tekster og Viruds musikk. Kulturportrett i samarbeid med Jan Erik Vold.',
    imageSrc: '/images/projects/tolv-bla.jpg',
    href: 'https://tv.nrk.no/program/MKTV23000019',
    platform: 'nrk',
  },
  {
    id: 'raga-rockers',
    title: 'Raga Rockers – Fritt Liv',
    year: '1989',
    description:
      'Et av de tidligste arbeidene – musikkvideo for Raga Rockers. Et dokument fra norsk rockehistorie.',
    imageSrc: '/images/projects/raga-rockers.jpg',
    href: 'https://www.youtube.com/watch?v=HS-1kybb8oE',
    platform: 'youtube',
  },
  {
    id: 'kork',
    title: 'Kringkastingsorkestret (KORK)',
    year: '2000–2024',
    description:
      'En rekke konsertopptak og musikkserier med NRKs eget Kringkastkingsorkester over to tiår.',
    imageSrc: '/images/projects/kork.jpg',
  },
  {
    id: 'opera-bjørvika',
    title: 'Åpning av Den Norske Opera i Bjørvika',
    year: '2008',
    description:
      'Billedregi på den historiske åpningsgallaen for Den Norske Opera & Ballett i Bjørvika.',
    imageSrc: '/images/projects/opera.jpg',
  },
  {
    id: 'tv-aksjonen',
    title: 'TV-Aksjonen',
    year: '2011–2018',
    description:
      'Hoved­regi på NRKs store innsamlings­aksjon i åtte år på rad – Norges mest sette direktesendte program.',
    imageSrc: '/images/projects/tv-aksjonen.jpg',
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
