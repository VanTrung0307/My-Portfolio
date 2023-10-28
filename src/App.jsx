import Test from "./Test";
import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">Parallax</section>
      <section>Services</section>
      <section id="Portfolio">Parallax</section>
      <section>Portfoli1</section>
      <section>Portfoli2</section>
      <section>Portfoli3</section>
      <section id="Contact">Contact</section>
      {/* <Test />
      <Test /> */}
    </div>
  );
};

export default App;
