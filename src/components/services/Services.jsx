/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      //   animate="animate"
      //   whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
            <button>WHAT I USE?</button>
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>ReactJS (TypeScript & JavaScript)</h2>
          <p>
            Using ReactJS, I can build robust and scalable web applications that
            provide a seamless user experience. By leveraging React's
            component-based architecture, I develop reusable UI elements that
            enhance code maintainability and promote efficient development
            practices.
          </p>
          <button
            onClick={() =>
              (window.location.href =
                "https://legacy.reactjs.org/docs/getting-started.html")
            }
          >
            Go
          </button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>NextJS</h2>
          <p>
            With Next.js, I can easily handle server-side rendering, allowing me
            to generate dynamic web pages with pre-rendered content. This
            results in improved SEO, faster initial page loads, and enhanced
            user interactivity.
          </p>
          <button
            onClick={() => (window.location.href = "https://nextjs.org/docs")}
          >
            Go
          </button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>HTML, CSS, JavaScript</h2>
          <p>
            I strive to stay on top of the latest web development trends and
            best practices, continuously expanding my knowledge and skills to
            enhance the quality and efficiency of my work. I am committed to
            writing clean, maintainable, and scalable code that adheres to
            industry standards.
          </p>
          <button
            onClick={() =>
              (window.location.href =
                "https://developer.mozilla.org/en-US/docs/Learn/CSS")
            }
          >
            Go
          </button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Bootstrap & Tailwind</h2>
          <p>
            By combining the strengths of Bootstrap and Tailwind CSS, I can
            deliver websites that are not only aesthetically pleasing but also
            mobile-friendly and optimized for different screen sizes. I focus on
            creating intuitive and user-friendly experiences by leveraging the
            responsive features and extensive component libraries provided by
            these frameworks.
          </p>
          <button
            onClick={() =>
              (window.location.href = "https://v2.tailwindcss.com/docs")
            }
          >
            Go
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
