"use client";
import { motion, easeInOut } from "motion/react";
import { BadgeCheck, Github, Linkedin, ChevronRight } from "lucide-react";

export default function Home() {
  // Container variant controls when children animate
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // time between each child animation
      },
    },
  };

  // Each child animation
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeInOut } },
  };

  return (
    <div className="sm:max-w-2xl m-auto">
      {/* === HEADER === */}
      <motion.header
        variants={container}
        initial="hidden"
        animate="show"
        className="z-50 backdrop-blur-xs sticky top-2 p-3 mb-8 rounded-4xl m-auto mt-4 border-2"
      >
        <motion.ul variants={container} className="flex justify-center gap-5">
          <motion.li
            variants={item}
            className="font-bold cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out"
          >
            <a href="#about">About</a>
          </motion.li>
          <motion.li
            variants={item}
            className="font-bold cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out"
          >
            <a href="#projects">Projects</a>
          </motion.li>
        </motion.ul>
      </motion.header>

      {/* === MAIN === */}
      <main className="p-4">
        {/* === HERO SECTION === */}
        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-3 mb-8"
        >
          <motion.div variants={item} className="flex gap-2 items-center">
            <h1 className="font-bold text-3xl">Madin Phagami</h1>
            <BadgeCheck />
          </motion.div>

          <motion.h2 variants={item}>Web Developer</motion.h2>
          <motion.h2 variants={item}>madinphagami@gmail.com</motion.h2>
          <motion.h2 variants={item}>
            Tāmaki Makaurau / Auckland, New Zealand
          </motion.h2>

          <motion.div variants={item} className="flex gap-2">
            <a
              href="https://www.linkedin.com/in/madinphagami/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5" />
            </a>
            <a
              href="https://github.com/madinphagami"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5" />
            </a>
          </motion.div>
        </motion.section>

        {/* === ABOUT SECTION === */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-3 mb-15"
        >
          <motion.h2 variants={item} id="about" className="font-bold text-2xl">
            <ChevronRight className="inline" /> 👋 About
          </motion.h2>

          <motion.p variants={item} className="text-justify">
            Hi, I’m <strong>Madin Phagami</strong>, an aspiring Web Developer
            from Tāmaki Makaurau / Auckland, New Zealand 🇳🇿. I love creating
            clean and functional websites that are both enjoyable to use and
            easy to navigate. I work with technologies like React, Next.js, and
            Tailwind CSS, and I’m always exploring new tools and techniques to
            keep learning and improving.
          </motion.p>

          <motion.p variants={item} className="text-justify">
            Outside of coding, I enjoy 🎮 gaming, 🎵 listening to music, and
            exploring nature 🌿 around Auckland. I’m always excited to connect
            with other developers, share ideas, and collaborate on projects. If
            you’d like to chat, collaborate, or just say hi, feel free to email
            me ✉️ or connect with me on LinkedIn.
          </motion.p>
        </motion.section>

        {/* === TECH STACK === */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-3 mb-15"
        >
          <motion.h2 variants={item} className="font-bold text-2xl">
            <ChevronRight className="inline" /> Tech Stack
          </motion.h2>

          <motion.ul
            variants={container}
            className="flex gap-4 justify-center items-center flex-wrap"
          >
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "ReactJS",
              "Tailwind CSS",
              "NextJS",
              "Supabase",
              "Motion.dev",
            ].map((tech) => (
              <motion.li
                key={tech}
                variants={item}
                className="border rounded-lg px-2 py-1 cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out"
              >
                {tech}
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>

        {/* === PROJECTS === */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-3 mb-15"
        >
          <motion.h2
            variants={item}
            id="projects"
            className="font-bold text-2xl"
          >
            <ChevronRight className="inline" /> Projects
          </motion.h2>

          <motion.div variants={container} className="flex flex-col gap-5">
            {[1, 2, 3].map((n) => (
              <motion.div
                key={n}
                variants={item}
                whileTap={{
                  scale: 0.9,
                  transition: { duration: 0.05, ease: "easeInOut" },
                }}
                className="p-5 border rounded-2xl cursor-pointer transform hover:scale-105 transition-transform duration-200 ease-in-out"
              >
                <div className="flex flex-col gap-2">
                  <h2>In Progress</h2>
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Enim harum, voluptatem laborum vel vero magni consequuntur
                    quae iste tempore fuga alias molestias reiciendis non
                    necessitatibus quam earum sint? Explicabo, nesciunt!
                  </p>
                  <div className="flex gap-2">
                    <p className="border rounded-lg px-2">Tailwind</p>
                    <p className="border rounded-lg px-2">ReactJS</p>
                    <p className="border rounded-lg px-2">NextJS</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </main>

      {/* === FOOTER === */}
      <motion.footer
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="p-4 flex flex-col gap-2"
      >
        <motion.h2 variants={item} className="font-bold text-3xl">
          <ChevronRight className="inline" /> Location
        </motion.h2>
        <motion.iframe
          variants={item}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25530.203544026244!2d174.73227047240874!3d-36.88375839595937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d463612a11ff1%3A0x500ef6143a2e6e0!2sMount%20Eden%2C%20Auckland!5e0!3m2!1sen!2snz!4v1761363381774!5m2!1sen!2snz"
          className="w-full h-72 rounded-2xl"
        ></motion.iframe>
      </motion.footer>
    </div>
  );
}
