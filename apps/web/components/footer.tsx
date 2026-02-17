export function Footer() {
  return (
    <footer className="border-t border-[#1e1e1e] bg-[#0e0e0e] px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-[#6b6b6b] sm:flex-row">
        <p>© {new Date().getFullYear()} Torstein Vegheim. Alle rettigheter forbeholdt.</p>
        <a
          href="mailto:torstein@vegheimregi.no"
          className="hover:text-[#a3a3a3] transition-colors"
        >
          torstein@vegheimregi.no
        </a>
      </div>
    </footer>
  )
}
