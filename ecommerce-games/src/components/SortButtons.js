import '../App.css';

const SortButtons = ({data}) => {
  return (
    <section className='sort-buttons-box'>
      <h4>Ordenar Por:</h4>
      <button>Preço</button>
      <button>Avaliação</button>
      <button>Nome (A-Z)</button>
    </section>
  );
}

export default SortButtons;

