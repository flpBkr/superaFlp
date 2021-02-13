import '../App.css';

const SortButtons = ({data}) => {
  return (
    <section className='sort-buttons-box'>
      <h5>Ordenar por:</h5>
      <button className="btn btn-dark btn-sm mr-2">Preço</button>
      <button className="btn btn-outline-dark btn-sm mr-2">Avaliação</button>
      <button className="btn btn-outline-dark btn-sm">Nome (A-Z)</button>
    </section>
  );
}

export default SortButtons;

