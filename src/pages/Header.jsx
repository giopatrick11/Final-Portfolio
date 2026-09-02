import { useEffect, useState } from "react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeMenu = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", closeMenu);
    return () => window.removeEventListener("keydown", closeMenu);
  }, []);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Gio Patrick Cimeni — home">
          <span className="brand-mark" aria-hidden="true">GC</span>
          <span className="brand-name">Gio Patrick</span>
        </a>

        <div className="desktop-nav">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </div>

        <a className="button button-small desktop-contact" href="#contact">
          Let’s talk
        </a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((current) => !current)}
        >
          <span />
          <span />
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`mobile-nav ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        {navigation.map((item) => (
          <a key={item.href} href={item.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a href="#contact" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>Let’s talk</a>
      </div>
    </header>
  );
}
