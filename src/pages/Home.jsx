import arrow from "../assets/arrow-2.svg";
import email from "../assets/email.svg";
import github from "../assets/github.svg";
import react from "../assets/react.svg";
import tailwind from "../assets/tailwind.svg";
import php from "../assets/php.svg";
import laravel from "../assets/laravel(2).svg";
import mysql from "../assets/mysql.svg";
import vite from "../assets/vite.svg";
import arrow1 from "../assets/arrow(1).svg";
import login from "../assets/login.svg";
import signup from "../assets/signup.svg";
import petrack1 from "../assets/petrack1.svg";
import petrack2 from "../assets/petrack2.svg";

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

      <h1 className="font-inter font-bold text-[6.25rem] tracking-[-0.05rem] max-w-[1200px] mx-auto text-center leading-[0.95] py-[11.625rem]">
        Modern Web Developer Delivering Full-Stack Solutions
      </h1>

      <section className="px-[7.063rem] bg-[#EBEBEB] mx-[2.5rem] rounded-xl py-[4.625rem]">
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
                className="flex items-center font-bold text-[1.25rem] gap-2"
              >
                <img src={email} alt="Email Icon" />
                giopatrick11@gmail.com
              </a>
              <a
                href="https://github.com/giopatrick11"
                className="flex items-center font-bold text-[1.25rem] gap-2"
              >
                <img src={github} alt="Github Icon" />
                giopatrick11
              </a>
              <div className="flex gap-1.25 font-bold items-center">
                <a href="" className="text-[1.1rem]">
                  CV
                </a>
                <a href="" className="text-[1.2rem]">
                  cvlink.com
                </a>
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
        <div className="ml-13 max-w-2xl rounded-xl border border-gray-400 p-4 mt-[3.5rem]">
          <div className="space-y-6">
            <div>
              <h2 className="mb-4 text-lg font-semibold">Tech Stack</h2>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold">Frontend</h3>
                  <div className="flex flex-wrap gap-2 pb-3">
                    {["JavaScript", "React", "Tailwind CSS"].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-gray-300 px-3 py-1 text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-sm font-semibold">Backend</h3>
                  <div className="flex flex-wrap gap-2 pb-3 ">
                    {["PHP", "Laravel", "MySQL", "RESTful API"].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-gray-300 px-3 py-1 text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-sm font-semibold">Development Tools</h3>
                  <div className="flex flex-wrap gap-2 pb-3">
                    {[
                      "VSCode",
                      "XAMPP",
                      "Herd",
                      "PostMan",
                      "Git & Github",
                      "Figma",
                      "Canva",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-gray-300 px-3 py-1 text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex py-[5.75rem] gap-[5rem] justify-center items-center">
        <img src={react} alt="React Logo" className="" />
        <img src={tailwind} alt="Tailwind Logo" className="" />
        <img src={php} alt="PHP Logo" className="" />
        <img src={laravel} alt="Laravel Logo" className="" />
        <img src={mysql} alt="MySQL Logo" className="" />
        <img src={vite} alt="Viite Logo" className="" />
      </div>

      <section className="bg-[#EBEBEB]">
        <div className="px-[2.375rem]">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4">
            <h1 className="font-black font-inter text-[3.75rem] tracking-[-0.01em]">
              Projects
            </h1>
            <img
              src={arrow}
              alt="underline"
              className="w-[16.188rem] rotate-180 -mt-6 "
            />
            <h3 className="font-dm font-bold text-[2.5rem] tracking-[-0.06em] -mt-4 text-[#7545B0]">
              Recent Works
            </h3>
          </div>

          <div className="py-[4.438rem]">
            <div className="items-start flex flex-col">
              <h3 className="font-dm text-[2rem] font-bold tracking-[-0.05em]">
                Laundry Shop
              </h3>
              <p className="italic text-[1.25rem] tracking-[-0.05em] py-2   ">
                React • Tailwind • Laravel • PHP • Javascript • MySQL • RESTful
                API
              </p>
              <p className="text-[1.25rem] tracking-[-0.05em] max-w-[40rem]">
                A full-stack Laundry Shop Management System featuring secure
                role-based authentication for administrators and secretaries.
                Includes login and user management with form validation, a clean
                and responsive interface, and seamless integration between a
                React frontend, Laravel API, and MySQL database to ensure
                reliable data handling and smooth daily operations.
              </p>
              <a href="" className="underline text-[1.25rem] flex gap-1 py-2">
                Check on github
                <img src={arrow1} alt="Arrow" />
              </a>
            </div>

            <div className="flex justify-center gap-[1.125rem] py-[1.875rem]">
              <div className="flex flex-col items-center gap-4">
                <a
                  href="https://github.com/giopatrick11/laundry-shop-login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="flex items-center justify-center transition-transform duration-200 group-hover:scale-[1.02]">
                    <img
                      src={login}
                      alt="Log-In Page"
                      className="h-[32rem] rounded-xl"
                    />
                  </div>
                </a>
                <p className="text-sm font-medium">Log-In Page</p>
              </div>

              <div className="flex flex-col items-center gap-4">
                <a
                  href="https://github.com/giopatrick11/laundry-shop-signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="flex items-center justify-center transition-transform duration-200 group-hover:scale-[1.02]">
                    <img
                      src={signup}
                      alt="Signup Page"
                      className="h-[32rem] rounded-xl"
                    />
                  </div>
                </a>
                <p className="text-sm font-medium">Signup Page</p>
              </div>
            </div>
          </div>
          <div className="my-12 h-px w-full bg-gray-300" />
          <div className="py-[4.438rem]">
            <div className="items-start flex flex-col">
              <h3 className="font-dm text-[2rem] font-bold tracking-[-0.05em]">
                Pet Track
              </h3>
              <p className="italic text-[1.25rem] tracking-[-0.05em] py-2   ">
                React • JavaScript • Tailwind • UI State Management
              </p>
              <p className="text-[1.25rem] tracking-[-0.05em] max-w-[40rem]">
                A frontend-focused pet care management interface built with
                React, featuring modular components, client-side routing, and
                dynamic UI state handling. The application presents pet
                profiles, vaccination tracking, and appointment information
                through a clean, responsive layout, emphasizing usability,
                component reusability, and clear information hierarchy for an
                intuitive pet management experience.
              </p>
              <a href="" className="underline text-[1.25rem] flex gap-1 py-2">
                Check on github
                <img src={arrow1} alt="Arrow" />
              </a>
            </div>

            <div className="flex justify-center gap-[1.125rem] py-[1.875rem]">
              <div className="flex flex-col items-center gap-4">
                <a
                  href="https://github.com/giopatrick11/laundry-shop-login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="flex items-center justify-center transition-transform duration-200 group-hover:scale-[1.02]">
                    <img
                      src={petrack2}
                      alt="Log-In Page"
                      className="h-[32rem] rounded-xl"
                    />
                  </div>
                </a>
                <p className="text-sm font-medium">Landing Page (Light Mode)</p>
              </div>

              <div className="flex flex-col items-center gap-4">
                <a
                  href="https://github.com/giopatrick11/laundry-shop-signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="flex items-center justify-center transition-transform duration-200 group-hover:scale-[1.02]">
                    <img
                      src={petrack1}
                      alt="Signup Page"
                      className="h-[32rem] rounded-xl"
                    />
                  </div>
                </a>
                <p className="text-sm font-medium">Landing Page (Light Mode)</p>
              </div>
            </div>
          </div>
          <div className="my-12 h-px w-full bg-gray-300" />
          <div className="py-[4.438rem]">
            <div className="items-start flex flex-col">
              <h3 className="font-dm text-[2rem] font-bold tracking-[-0.05em]">
                Pet - Track
              </h3>
              <p className="italic text-[1.25rem] tracking-[-0.05em] py-2   ">
                React • JavaScript • Tailwind • UI State Management
              </p>
              <p className="text-[1.25rem] tracking-[-0.05em] max-w-[40rem]">
                A frontend-focused pet care management interface built with
                React, featuring modular components, client-side routing, and
                dynamic UI state handling. The application presents pet
                profiles, vaccination tracking, and appointment information
                through a clean, responsive layout, emphasizing usability,
                component reusability, and clear information hierarchy for an
                intuitive pet management experience.
              </p>
              <a href="" className="underline text-[1.25rem] flex gap-1 py-2">
                Check on github
                <img src={arrow1} alt="Arrow" />
              </a>
            </div>

            <div className="flex justify-center gap-[1.125rem] py-[1.875rem]">
              <div className="flex flex-col items-center gap-4">
                <a
                  href="https://github.com/giopatrick11/laundry-shop-login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="flex items-center justify-center transition-transform duration-200 group-hover:scale-[1.02]">
                    <img
                      src={login}
                      alt="Log-In Page"
                      className="h-[32rem] rounded-xl"
                    />
                  </div>
                </a>
                <p className="text-sm font-medium">Log-In Page</p>
              </div>

              <div className="flex flex-col items-center gap-4">
                <a
                  href="https://github.com/giopatrick11/laundry-shop-signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="flex items-center justify-center transition-transform duration-200 group-hover:scale-[1.02]">
                    <img
                      src={signup}
                      alt="Signup Page"
                      className="h-[32rem] rounded-xl"
                    />
                  </div>
                </a>
                <p className="text-sm font-medium">Signup Page</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
