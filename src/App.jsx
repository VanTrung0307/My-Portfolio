import Test from "./Test";
import "./app.scss";
import Navbar from "./components/Navbar/navbar";

const App = () => {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section>Parallax</section>
      <section>Services</section>
      <section>Parallax</section>
      <section>Portfoli1</section>
      <section>Portfoli2</section>
      <section>Portfoli3</section>
      <section>Contact</section>
      {/* <Test />
      <Test /> */}
    </div>
  );
};

export default App;
