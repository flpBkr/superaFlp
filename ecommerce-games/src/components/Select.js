const Select = ({ setSortType}) => {
  return (
    <section className='order-select-box'>
      <span>Ordenar por:</span>
      <select onChange={(e) => setSortType(e.target.value)}> 
        <option value='default'>Relevância</option>
        <option value='price'>Preço (Menor)</option>
        <option value='score'>Avaliação</option>
        <option value='name'>Nome (A-Z)</option>
      </select>
    </section>
  );
}

export default Select;

