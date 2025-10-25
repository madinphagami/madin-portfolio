import { BadgeCheck, Github, Linkedin, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="sm:max-w-2xl m-auto ">
        <header className="backdrop-blur-xs sticky top-3 max-w-2/3  p-3 mb-8 rounded-4xl m-auto mt-2 border-2">
          <ul className="flex justify-center gap-5">
            <li className="font-bold cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out">
              <a href="#about">About</a>
            </li>
            <li className="font-bold cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out">
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </header>

        <main className="p-4">
          <section className="flex flex-col gap-3 mb-8">
            <div className="flex gap-2 items-center">
              <h1 className="font-bold text-3xl">Madin Phagami</h1>
              <BadgeCheck />
            </div>
            <h2>Web Developer</h2>
            <h2>madinphagami@gmail.com</h2>
            <h2>Tāmaki Makaurau / Auckland, New Zealand</h2>
            <div className="flex gap-2">
              <a
                href="https://www.linkedin.com/in/madinphagami/"
                target="_blank"
              >
                <Linkedin className="w-5" />
              </a>
              <a href="https://github.com/madinphagami" target="_blank">
                <Github className="w-5" />
              </a>
            </div>
          </section>

          <section className="flex flex-col gap-3 mb-15">
            <h2 id="about" className="font-bold text-2xl">
              <ChevronRight className="inline" /> 👋 About
            </h2>
            <p className="text-justify">
              Hi, I’m <strong>Madin Phagami</strong>, an aspiring Web Developer
              from Tāmaki Makaurau / Auckland, New Zealand 🇳🇿. I love creating
              clean and functional websites that are both enjoyable to use and
              easy to navigate. I work with technologies like React, Next.js,
              and Tailwind CSS 🚀, and I’m always exploring new tools and
              techniques to keep learning and improving.
            </p>
            <p className="text-justify">
              Outside of coding, I enjoy 🎮 gaming, 🎵 listening to music, and
              exploring nature 🌿 around Auckland. I’m always excited to connect
              with other developers, share ideas, and collaborate on projects.
              If you’d like to chat, collaborate, or just say hi, feel free to
              email me ✉️ or connect with me on LinkedIn.
            </p>
          </section>

          <section className="flex flex-col gap-3 mb-15">
            <h2 className="font-bold text-2xl">
              <ChevronRight className="inline" />
              Tech Stack
            </h2>
            <ul className="flex gap-4 justify-center items-center flex-wrap">
              <li className="border rounded-lg px-2 py-1 cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out">
                HTML
              </li>
              <li className="border rounded-lg px-2 py-1 cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out">
                CSS
              </li>
              <li className="border rounded-lg px-2 py-1 cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out">
                JavaScript
              </li>
              <li className="border rounded-lg px-2 py-1 cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out">
                ReactJS
              </li>
              <li className="border rounded-lg px-2 py-1 cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out">
                Tailwind CSS
              </li>
              <li className="border rounded-lg px-2 py-1 cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out">
                NextJS
              </li>
            </ul>
          </section>

          <section className="flex flex-col gap-3 mb-15">
            <h2 id="projects" className="font-bold text-2xl">
              <ChevronRight className="inline" />
              Projects
            </h2>

            <div className="flex flex-col gap-5">
              <div className="p-5 border rounded-2xl cursor-pointer transform hover:scale-105 transition-transform duration-200 ease-in-out">
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
              </div>

              <div className="p-5 border rounded-2xl cursor-pointer transform hover:scale-105 transition-transform duration-200 ease-in-out">
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
              </div>

              <div className="p-5 border rounded-2xl cursor-pointer transform hover:scale-105 transition-transform duration-200 ease-in-out">
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
              </div>
            </div>
          </section>
        </main>
        <footer className="p-4 flex flex-col gap-2">
          <h2 className="font-bold text-3xl">
            <ChevronRight className="inline" />
            Location
          </h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25530.203544026244!2d174.73227047240874!3d-36.88375839595937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d463612a11ff1%3A0x500ef6143a2e6e0!2sMount%20Eden%2C%20Auckland!5e0!3m2!1sen!2snz!4v1761363381774!5m2!1sen!2snz"
            className="w-full h-72 rounded-2xl"
          ></iframe>
        </footer>
      </div>
    </>
  );
}
