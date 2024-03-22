import Special from "../Special/Special";

const Cousin = ({name, asset}) => {
  return (
    <div>
      <p>{name}</p>
      <section className="flex">
        { asset && <Special asset={asset}></Special>}
        
      </section>
    </div>
  );
};

export default Cousin;