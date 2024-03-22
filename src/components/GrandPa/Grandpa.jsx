import Aunty from "../Aunty/Aunty";
import Dada from "../Dada/Dada";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css';

const Grandpa = () => {
  return (
    <div className="grandpa">
      <h2>GrandPa</h2>
      <section className="flex">
        <Dada></Dada>
        <Uncle></Uncle>
        <Aunty></Aunty>
      </section>
    </div>
  );
};

export default Grandpa;