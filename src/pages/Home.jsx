import { useState } from "react";
import Header from "./Header.jsx";

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
import vk1 from "../assets/vk1.svg";
import vk2 from "../assets/vk2.svg";
import link1 from "../assets/link1.svg";
import github1 from "../assets/github1.svg";
import email1 from "../assets/email1.svg";

export default function Home() {
  return (
    <main className="">
      <Header />

      <h1
        id="Header"
        className="font-inter font-bold text-[2.5rem] sm:text-[3.25rem] md:text-[4.25rem] lg:text-[6.25rem] -tracking-[0.02rem]  -lg:tracking-[0.05rem] max-w-[1200px] mx-auto text-center lg:leading-[0.95] py-[-4rem] md:py-[6rem] lg:py-[11.625rem]"
      >
        <span className="text-[#7544B1]">Modern Web Developer</span>{" "}
        <span className="block md:inline">Delivering</span>
        Full-Stack Solutions
      </h1>

      <section
        id="About"
        className="bg-[#EBEBEB] mx-4 px-6 py-8 rounded-xl lg:mx-[2.5rem] lg:px-[7.063rem] lg:py-[4.625rem]"
      >
        <div className="mx-auto flex max-w-6xl items-start flex-col lg:flex-row lg:items-start lg:gap-[11.875] lg:justify-center gap-10 ">
          <div className="flex max-w-md flex-col gap-4 text-center lg:text-left">
            <h1 className="font-black font-inter text-[2.25rem] md:text-[3rem] lg:text-[3.75rem] tracking-[-0.01em]">
              Gio Patrick
            </h1>
            <img
              src={arrow}
              alt="underline"
              className="w-[14rem] mx-auto lg:mx-0 -mt-4"
            />
            <h3 className="font-dm font-bold text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] tracking-[-0.06em] text-[#7545B0]">
              Full-Stack Developer
            </h3>

            <div className="flex flex-col font-dm text-[1.1rem] md:text-[1.25rem] tracking-[-0.01em] items-start">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=giopatrick11@gmail.com"
                className="flex items-center font-bold text-[1.25rem] gap-2 hover:underline"
                alt="Email Icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={email} />
                giopatrick11@gmail.com
              </a>
              <a
                href="https://github.com/giopatrick11"
                className="flex items-center font-bold text-[1.25rem] gap-2 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="Github Icon" />
                giopatrick11
              </a>
              <div className="flex gap-1.25 font-bold items-center">
                <a
                  href="https://www.dropbox.com/scl/fi/qdv090ftwiaq3wj2jt8hp/GioCimeni_CV.pdf?rlkey=a0w3ehad41odrmtanp1thctfy&st=ri9dqp0v&dl=0"
                  className="text-[1.1rem]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CV
                </a>
                <a
                  href="https://www.dropbox.com/scl/fi/qdv090ftwiaq3wj2jt8hp/GioCimeni_CV.pdf?rlkey=a0w3ehad41odrmtanp1thctfy&st=ri9dqp0v&dl=0"
                  className="text-[1.2rem] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cvlink.com
                </a>
              </div>
            </div>
          </div>
          <p className="max-w-xl text-[1rem] md:text-[1.125rem] leading-relaxed lg:text-left text-center self-center">
            I’m a full-stack developer building modern web applications with
            React and Tailwind CSS on the frontend, and PHP with Laravel on the
            backend. I focus on role-based systems, structured data, and
            responsive interfaces designed around real user workflows. I value
            clean, maintainable code, performance, and reliability, and I adapt
            quickly to new tools and project needs.
          </p>
        </div>
        <div className="mx-auto lg:mx-30 max-w-2xl rounded-xl border border-gray-400 p-4 mt-10">
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

      <div className="flex flex-wrap py-8 md:gap-10 md:py-12 lg:gap-[5rem] lg:py-[5.75rem] gap-6 justify-center items-center">
        <img src={react} alt="React Logo" className="h-8 md:h-10 lg:h-12" />
        <img
          src={tailwind}
          alt="Tailwind Logo"
          className="h-8 md:h-10 lg:h-12"
        />
        <img src={php} alt="PHP Logo" className="h-8 md:h-10 lg:h-12" />
        <img src={laravel} alt="Laravel Logo" className="h-8 md:h-10 lg:h-12" />
        <img src={mysql} alt="MySQL Logo" className="h-8 md:h-10 lg:h-12" />
        <img src={vite} alt="Viite Logo" className="h-8 md:h-10 lg:h-12" />
      </div>

      <section id="Projects" className="bg-[#EBEBEB] py-[6.25rem]">
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

          <div className="py-3 lg:py-[4.438rem]">
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
              <a
                href="https://github.com/giopatrick11/Laundry-Shop-Crud"
                className="underline text-[1.25rem] flex gap-1 py-2 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check on github
                <img src={arrow1} alt="Arrow" />
              </a>
            </div>

            <div className="flex flex-col items-center gap-6 py-6 md:flex-row md:justify-center md:gap-6 lg:gap-[1.125rem] lg:py-[1.875rem]">
              <div className="flex flex-col items-center gap-4">
                <a
                  href="https://github.com/giopatrick11/Laundry-Shop-Crud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="w-full h-auto transition-transform duration-200 group-hover:scale-[1.02]">
                    <img
                      src={login}
                      alt="Log-In Page"
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </a>
                <p className="text-sm font-medium">Log-In Page</p>
              </div>

              <div className="flex flex-col items-center gap-4">
                <a
                  href="https://github.com/giopatrick11/Laundry-Shop-Crud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="flex items-center justify-center transition-transform duration-200 group-hover:scale-[1.02]">
                    <img
                      src={signup}
                      alt="Signup Page"
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </a>
                <p className="text-sm font-medium">Signup Page</p>
              </div>
            </div>
          </div>
          <div className="my-12 h-px w-full bg-gray-300" />
          <div className="py-3 lg:py-[4.438rem]">
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
              <a
                href="https://github.com/giopatrick11/New-Pet-Track"
                className="underline text-[1.25rem] flex gap-1 py-2 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check on github
                <img src={arrow1} alt="Arrow" />
              </a>
            </div>

            <div className="flex flex-col items-center gap-6 py-6 md:flex-row md:justify-center md:gap-6 lg:gap-[1.125rem] lg:py-[1.875rem]">
              <div className="flex flex-col items-center gap-4">
                <a
                  href="https://github.com/giopatrick11/New-Pet-Track"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="flex items-center justify-center transition-transform duration-200 group-hover:scale-[1.02]">
                    <img
                      src={petrack2}
                      alt="Log-In Page"
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </a>
                <p className="text-sm font-medium">Landing Page (Light Mode)</p>
              </div>

              <div className="flex flex-col items-center gap-4">
                <a
                  href="https://github.com/giopatrick11/New-Pet-Track"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="flex items-center justify-center transition-transform duration-200 group-hover:scale-[1.02]">
                    <img
                      src={petrack1}
                      alt="Signup Page"
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </a>
                <p className="text-sm font-medium">Landing Page (Light Mode)</p>
              </div>
            </div>
          </div>
          <div className="my-12 h-px w-full bg-gray-300" />
          <div className="py-3 lg:py-[4.438rem]">
            <div className="items-start flex flex-col">
              <h3 className="font-dm text-[2rem] font-bold tracking-[-0.05em]">
                Videokeman
              </h3>
              <p className="italic text-[1.25rem] tracking-[-0.05em] py-2   ">
                PHP • MySQL • JavaScript • HTML • CSS
              </p>
              <p className="text-[1.25rem] tracking-[-0.05em] max-w-[40rem]">
                A web-based music lyrics platform built with core PHP and MySQL,
                featuring dynamic song browsing, search, pagination, and
                user-submitted content. The system supports session-based
                authentication, lyric viewing pages, random song discovery, and
                structured database integration to manage songs, users, and
                uploads through a simple, responsive interface focused on
                usability and content accessibility.
              </p>
              <a
                href="https://github.com/giopatrick11/Videokeman"
                className="underline text-[1.25rem] flex gap-1 py-2 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check on github
                <img src={arrow1} alt="Arrow" />
              </a>
            </div>

            <div className="flex flex-col items-center gap-6 py-6 md:flex-row md:justify-center md:gap-6 lg:gap-[1.125rem] lg:py-[1.875rem]">
              <div className="flex flex-col items-center gap-4">
                <a
                  href="https://github.com/giopatrick11/Videokeman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="flex items-center justify-center transition-transform duration-200 group-hover:scale-[1.02]">
                    <img
                      src={vk1}
                      alt="Log-In Page"
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </a>
                <p className="text-sm font-medium">Landing Page</p>
              </div>

              <div className="flex flex-col items-center gap-4">
                <a
                  href="https://github.com/giopatrick11/Videokeman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="flex items-center justify-center transition-transform duration-200 group-hover:scale-[1.02]">
                    <img
                      src={vk2}
                      alt="Signup Page"
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </a>
                <p className="text-sm font-medium">Lyrics Page</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#1B1B1B]">
        <div
          className="   flex
      flex-col
      items-center
      gap-6
      px-6
      py-8
      md:px-10
      md:py-10
      lg:flex-row
      lg:items-center
      lg:justify-between
      lg:px-[6.625rem]
      lg:py-[4.125rem]"
        >
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/giocimeni/ "
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={link1}
                alt="LinkedIn"
                className="inline-block border-b-2 border-transparent hover:border-white transition-colors duration-200"
              />
            </a>

            <a
              href="https://github.com/giopatrick11"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github1}
                alt="GitHub"
                className="inline-block border-b-2 border-transparent hover:border-white transition-colors duration-200"
              />
            </a>

            <a
              href="https://www.dropbox.com/scl/fi/qdv090ftwiaq3wj2jt8hp/GioCimeni_CV.pdf?rlkey=a0w3ehad41odrmtanp1thctfy&st=ri9dqp0v&dl=0"
              className="text-[#FFFFFF] text-[1.4rem] font-bold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=giopatrick11@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={email1}
                alt="Email"
                className="inline-block border-b-2 border-transparent hover:border-white transition-colors duration-200"
              />
            </a>
          </div>

          <a href="#Header">
            <h1 className="text-[#F2F2F2] text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] font-medium">
              Gio
            </h1>
          </a>
        </div>
      </footer>
    </main>
  );
}
