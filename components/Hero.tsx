"use client";

import { Mail, Linkedin, Github, ArrowDown } from "lucide-react";
import HeroAbstract from "./HeroAbstract";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold">
            KUSHAGRA GUPTA
          </h1>

          <p className="mt-6 text-lg text-gray-400 max-w-2xl">
            Backend-Focused Full-Stack Engineer
          </p>

          <p className="mt-4 text-sm text-gray-500">
            Node.js · Express · React · MongoDB · Redis · Elasticsearch · Kafka · Azure
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#projects" className="px-6 py-3 bg-white text-black rounded-lg hover:scale-105 transition-transform duration-200">
              View Projects
            </a>
            <a href="/Kushagra_Resume.pdf" className="px-6 py-3 border border-gray-600 rounded-lg hover:scale-105 transition-transform duration-200">
              Download Resume
            </a>
            </div>


            <div className="mt-10 mb-5 flex justify-start gap-10">
              <a
                href="mailto:kushagra.gupta05@outlook.com"
                aria-label="Email"
                className="hover:text-white text-gray-400 transition"
              >
                <Mail size={22} />
              </a>

              <a
                href="https://linkedin.com/in/kushagra-gupta05"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-white text-gray-400 transition"
              >
                <Linkedin size={22} />
              </a>

              <a
                href="https://github.com/05-kush"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-white text-gray-400 transition"
              >
                <Github size={22} />
              </a>

            </div>
          </div>
          <div
            className="
              absolute right-[-100px] top-[15%] md:right-0 md:top-1/2
              z-0 pointer-events-none
              opacity-50 md:opacity-80 text-white
              [mask-image:linear-gradient(to_left,black_60%,transparent)]
              [-webkit-mask-image:linear-gradient(to_left,black_60%,transparent)]
            "
            style={{ animation: "floatSlow 06s ease-in-out infinite" }}
          >
            <HeroAbstract className="w-[300px] md:w-[600px] h-auto blur-[0.3px]" />
          </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down" className="text-gray-500 hover:text-white transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>

    </section>
  );
}
