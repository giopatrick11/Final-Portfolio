import arrow from "../assets/arrow-2.svg";
import email from "../assets/email.svg";
import github from "../assets/github.svg";

export default function Home() {
  return (
    <main className="animate-fade-in ">
      <section className="flex items-center justify-between px-[3.125rem] pt-[48px]">
        <h1 className="font-dm font-black text-[#7545B0] text-[2.5rem]">Gio</h1>
        <ul className="flex text-[1.5rem] font-dm font-medium gap-[2.125rem]">
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
            <a
              href="#about Me"
              className="flex transition-all duration-200 hover:bg-muted hover:-translate-y-1"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </section>

      <h1 className="font-inter font-bold text-[6.25rem] tracking-[-0.05rem] max-w-[1200px] mx-auto text-center leading-[0.95] pt-[7.188rem]">
        Modern Web Developer Delivering Full-Stack Solutions
      </h1>

      <section className="px-[7.063rem] mt-[5.063rem]">
        <div className="mx-auto flex max-w-6xl items-start justify-center gap-[11.875rem]">
          <div className="flex max-w-md flex-col gap-4">
            <h1 className="font-black font-inter text-[3.75rem] tracking-[-0.01em]">
              Gio Patrick
            </h1>
            <img
              src={arrow}
              alt="underline"
              className="w-[18.188rem] -mt-6 ml-2"
            />
            <h3 className="font-dm font-bold text-[2.5rem] tracking-[-0.06em] -mt-4 text-[#7545B0]">
              Full-Stack Developer
            </h3>

            <div className="flex flex-col font-dm text-[1.25rem] tracking-[-0.01em]">
              <a
                href="mailto:giopatrick11@gmail.com"
                className="flex items-center font-black text-[1.25rem] gap-2"
              >
                <img src={email} alt="Email Icon" />
                Giopatrick11@gmail.com
              </a>
              <a
                href="https://github.com/giopatrick11"
                className="flex items-center font-black text-[1.25rem] gap-2"
              >
                <img src={github} alt="Github Icon" />
                giopatrick11
              </a>
              <div className="flex gap-2 font-black text-[1.25rem]">
                <a href="">CV</a>
                <a href="">Resume</a>
              </div>
            </div>
          </div>
          <p className="max-w-xl text-[1.125rem] leading-[-0.01em] text-center self-center">
            I’m a full-stack developer building modern web applications with
            React and Tailwind CSS on the frontend, and PHP with Laravel on the
            backend. I focus on role-based systems, structured data, and
            responsive interfaces designed around real user workflows. I value
            clean, maintainable code, performance, and reliability, and I adapt
            quickly to new tools and project needs.
          </p>
        </div>
      </section>
    </main>
  );
}
