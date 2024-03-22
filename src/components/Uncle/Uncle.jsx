import Cousin from "../Cousin/Cousin";

const Uncle = () => {

  return (
    <div>
      <h2>Uncle</h2>
      <section className="flex">
        <Cousin name={'Sajib'}></Cousin>
        <Cousin name={'Sharif'}></Cousin>
        <Cousin name={'Jannat'}></Cousin>
      </section>
    </div>
  );
};

export default Uncle;