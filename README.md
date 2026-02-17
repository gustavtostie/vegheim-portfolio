# Torstein Vegheim – Portføljenettside

Profesjonell frilansside bygget med Next.js, Turbo og Tailwind CSS v4.

## Kom i gang

### Forutsetninger
- Node.js 18+
- pnpm (`npm install -g pnpm`)

### Installere og starte

```bash
# Installer avhengigheter (kun første gang)
pnpm install

# Start utviklingsserver
pnpm dev
```

Åpne [http://localhost:3000](http://localhost:3000) i nettleseren.

### Bygge for produksjon

```bash
pnpm build
```

---

## Legge til prosjektbilder

Alle prosjektbilder ligger i:

```
apps/web/public/images/projects/
```

Erstatt placeholder-filene med ekte bilder. Filnavnene må matche `imageSrc`-feltene i:

```
apps/web/data/projects.ts
```

| Fil i /projects/      | Prosjekt                       |
|-----------------------|-------------------------------|
| `kalvoya.jpg`         | Kalvøyafestivalen              |
| `andsnes.jpg`         | Portrett av Leif Ove Andsnes   |
| `tine-thing.jpg`      | Portrett av Tine Thing Helseth |
| `kongefamilien.jpg`   | Året med Kongefamilien         |
| `lise-davidsen.jpg`   | Portrett av Lise Davidsen      |
| `tolv-bla.jpg`        | Tolv Blå                       |
| `raga-rockers.jpg`    | Raga Rockers – Fritt Liv       |
| `kork.jpg`            | KORK                           |
| `opera.jpg`           | Åpning Den Norske Opera        |
| `tv-aksjonen.jpg`     | TV-Aksjonen                    |

Bilder av Torstein (portretter, bak kamera) ligger i:

```
apps/web/public/images/torstein/
```

## Filstruktur

```
vegheim-portfolio/
├── apps/web/
│   ├── app/
│   │   ├── layout.tsx       # Metadata + fonter
│   │   ├── page.tsx         # Sammensetter alle seksjoner
│   │   └── globals.css      # Tailwind v4 + tema
│   ├── components/
│   │   ├── ui/              # Shadcn-komponenter (Button, Card, Badge)
│   │   ├── nav.tsx          # Sticky navigasjon
│   │   ├── hero.tsx         # Hero med bilde + sitat
│   │   ├── about.tsx        # Om meg
│   │   ├── portfolio-grid.tsx  # Prosjektgalleri
│   │   ├── services.tsx     # Tjenestekort
│   │   ├── testimonial.tsx  # Sitat fra H.M. Kongen
│   │   ├── contact.tsx      # Kontaktseksjon
│   │   └── footer.tsx
│   ├── data/
│   │   └── projects.ts      # All prosjektdata – rediger her
│   └── public/images/
│       ├── torstein/        # Portretter
│       └── projects/        # Prosjektbilder
├── turbo.json
└── pnpm-workspace.yaml
```
