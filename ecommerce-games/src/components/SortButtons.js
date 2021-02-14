// import '../App.css';

const SortButtons = ({data, handleOrder}) => {
  return (
    <section className='sort-buttons-box'>
      <h5>Ordenar por:</h5>
      {/* <button 
        className='btn btn-dark btn-sm mr-2'
        onClick={() => handleOrder}
      >Preço (Menor)</button>
      <button className='btn btn-outline-dark btn-sm mr-2'>Avaliação</button>
      <button className='btn btn-outline-dark btn-sm'>Nome (A-Z)</button> */}

      <select class='form-select' aria-label='Products order select'>
        <option selected>Relevância</option>
        <option value='price'>Preço (Menor)</option>
        <option value='score'>Avaliação</option>
        <option value='name'>Nome (A-Z)</option>
      </select>
    </section>
  );
}

export default SortButtons;

