import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "SoleAuthenticity",
    img: "/soleauthenticity.png",
    desc: "A website to check your shoe authentic or replica, read news and feedback on all over the world about your brand shoe which you care and collapse with a lot of authentic shoe's store to buy/sold its",
    path: "https://sole-authenticity-cus-service.vercel.app/",
  },
  {
    id: 2,
    title: "FPT Adventures Admin",
    img: "/fptadventures-admin.png",
    desc: "A website admin system to manage the events, schools, student, items and missions in a metaverse games of FPT HCM University Campus. Managers may handle all occurrences in the game in the most complete and safe way possible by using a diversified and easy-to-use online application.",
    path: "https://fpt-3d-project-admin.vercel.app/",
  },
  {
    id: 3,
    title: "FPT Adventures User",
    img: "/fptadventures-user.png",
    desc: "The admin web application manages a website application, which is the website that players utilize. The website employs the Vite and ThreeJS programming languages, which make the page rich and full of effects. Students will log in to learn how to download the app to their phone, how to play the game, how to offer comments to the system, and how to monitor their rating in the game.",
    path: "https://fpt-3dmap-guest.vercel.app/",
  },
  {
    id: 4,
    title: "PA Design",
    img: "/padesign.png",
    desc: "A PA Design online application that allows users to examine and learn about buildings, architecture, and interior design in a realistic manner. To contact the engineer and sign a working contract, the online application will include design images as well as real-life photos.",
    path: "https://pa-design.vercel.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={() => (window.location.href = item.path)}>
              See Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
