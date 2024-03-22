import Cousin from "../Cousin/Cousin";

const Aunty = () => {
  return (
    <div>
      <h2>Aunty</h2>
      <section className="flex">
        <Cousin name={'Sajeeb'}></Cousin>
        <Cousin name={'Ruhul'}></Cousin>
        <Cousin name={'Jannat'}></Cousin>
      </section>
    </div>
  );
};

export default Aunty;