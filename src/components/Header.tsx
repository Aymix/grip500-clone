import { UTILITY, NAV } from "@/data/header";

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-4 ${className}`}>{children}</div>;
}

export function SiteHeader() {
  return (
    <header className="font-[family-name:var(--font-saira)]">
      {/* Row 1 — utility strip (white, 32px, right-aligned) */}
      <div className="bg-white">
        <Container className="flex h-[32px] items-center justify-end gap-6">
          {UTILITY.map((u) => (
            <a
              key={u.label}
              href={u.href}
              className="flex items-center gap-1.5 text-[12px] font-semibold uppercase leading-3 text-gr-grey-2 hover:text-gr-orange transition-colors"
            >
              {u.icon && <i className={`fa ${u.icon} text-[14px] text-gr-orange`} aria-hidden />}
              {u.label}
            </a>
          ))}
        </Container>
      </div>

      {/* Row 2 — dark menu (logo / nav / panier), 65px */}
      <div className="bg-gr-dark">
        <Container className="flex h-[65px] items-center gap-8">
          {/* Logo */}
          <a href="#" className="shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/logo.png" alt="grip500.fr" width={165} height={35} className="h-[35px] w-auto" />
          </a>

          {/* Nav */}
          <nav className="flex items-center gap-7">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className="flex items-center gap-1.5 text-[14px] font-semibold uppercase text-gr-grey hover:text-white transition-colors"
              >
                {n.label}
                {n.caret && <i className="fa fa-angle-down text-[14px]" aria-hidden />}
              </a>
            ))}
          </nav>

          {/* Panier pill */}
          <a
            href="#"
            className="ml-auto flex h-[41px] items-center gap-2 rounded-[20px] bg-gr-pill px-5 text-[13px] font-semibold text-gr-grey hover:text-white transition-colors"
          >
            <i className="fa fa-basket text-[20px] text-gr-orange" aria-hidden />
            Panier (0)
          </a>
        </Container>
      </div>
    </header>
  );
}
