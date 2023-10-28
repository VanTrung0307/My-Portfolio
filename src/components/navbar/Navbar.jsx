import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{duration: 0.5}}
        >
          Van Trung
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/vantrun0307">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/_vantrun/">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.youtube.com/channel/UCLYv6syii8_xbcsepvIQRpg">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="https://github.com/VanTrung0307">
            <img src="/github.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
