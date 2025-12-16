import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`relative transition-colors duration-200 ${
        open ? "bg-[#EBEBEB]" : "bg-transparent lg:bg-white"
      }`}
    >
      <section className="flex items-center justify-between mx-auto max-w-6xl px-6 lg:px-12 xl:px-0 pt-12">
        <h1 className="font-dm font-black text-[#7545B0] text-[2.25rem] lg:text-[2.5rem]">
          Gio
        </h1>
        <ul className="hidden lg:flex text-[1.5rem] lg:text-[1.5rem] font-dm font-medium gap-8">
          <li>
            <a
              href="#about Me"
              className="flex transition-all duration-200 hover:bg-muted hover:-translate-y-1"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#about Me"
              className="flex transition-all duration-200 hover:bg-muted hover:-translate-y-1"
            >
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setOpen(false)}>
              Contact Me
            </a>
          </li>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1.5"
          aria-label="Toggle Menu"
        >
          <span className="h-[2px] w-6 bg-black" />
          <span className="h-[2px] w-6 bg-black" />
          <span className="h-[2px] w-6 bg-black" />
        </button>
      </section>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open
            ? "max-h-[300px] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2"
        }`}
      >
        <div className="mt-3 px-5 rounded-l bg-[#EBEBEB] p-6">
          <ul className="flex flex-col gap-4 text-[1.25rem] font-dm">
            <li>
              <a href="#about" onClick={() => setOpen(false)}>
                About Me
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setOpen(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setOpen(false)}>
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
