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

      <h1 className="font-inter font-bold text-[2.5rem] sm:text-[3.25rem] md:text-[4.25rem] lg:text-[6.25rem] -tracking-[0.02rem]  -lg:tracking-[0.05rem] max-w-[1200px] mx-auto text-center lg:leading-[0.95] py-[-4rem] md:py-[6rem] lg:py-[11.625rem]">
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

      <section className="bg-[#EBEBEB] py-[6.25rem]">
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
                      className="w-full h-auto rounded-xl"
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
                      className="w-full h-auto rounded-xl"
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
                      className="w-full h-auto rounded-xl"
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
                      className="w-full h-auto rounded-xl"
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
              <a href="" className="underline text-[1.25rem] flex gap-1 py-2">
                Check on github
                <img src={arrow1} alt="Arrow" />
              </a>
            </div>

            <div className="flex justify-center gap-[1.125rem] mt-[1.875rem]">
              <div className="flex flex-col items-center gap-4">
                <a
                  href="https://github.com/giopatrick11/laundry-shop-login"
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
                      src={vk2}
                      alt="Signup Page"
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </a>
                <p className="text-sm font-medium">Signup Page</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#1B1B1B]">
        <div className="flex items-center justify-between px-[6.625rem] py-[4.125rem]">
          {/* LEFT SIDE */}
          <div className="flex items-center gap-[1.5rem]">
            <a href="">
              <img src={link1} alt="LinkedIn" />
            </a>

            <a href="">
              <img src={github1} alt="GitHub" />
            </a>

            <a href="" className="text-[#FFFFFF] text-[1.4rem] font-bold">
              CV
            </a>

            <a href="">
              <img src={email1} alt="Email" />
            </a>
          </div>

          {/* RIGHT SIDE */}
          <h1 className="text-[#F2F2F2] text-[2.5rem] font-medium">Gio</h1>
        </div>
      </footer>
    </main>
  );
}
