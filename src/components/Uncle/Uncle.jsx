import Cousin from "../Cousin/Cousin";

const Uncle = ({asset}) => {

  return (
    <div>
      <h2>Uncle</h2>
      <section className="flex">
        <Cousin asset={asset} name={'Sajib'}></Cousin>
        <Cousin asset={asset} name={'Sharif'}></Cousin>
      </section>
    </div>
  );
};

export default Uncle;