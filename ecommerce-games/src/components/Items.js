import '../App.css';
import SortButtons from './SortButtons';
import { useState, useEffect } from 'react';

const Items = ({data, setData, onAdd, handleOrder}) => {
  // const filterByPrice = data.sort((a, b) => a.price - b.price);
  // const filterByScore = data.sort((a, b) => b.score - a.score);

  // console.log(filterByScore);
  const [sortType, setSortType] = useState('default');

  useEffect(() => {
    const sortArray = type => {
      const types = {
        price: 'price',
        score: 'score',
        name: 'name'
      };

      const sortProperty = types[type];
      const sorted = [...data].sort((a, b) => {
        if (sortProperty === 'price') {
          return a[sortProperty] - b[sortProperty];
        } else {
          return b[sortProperty] - a[sortProperty];
        }
      });
      setData(sorted);
    };
    sortArray(sortType);
  }, [sortType]); 

  return (
    <main>
      <div className='offset-sm-1 col-sm-10 '>
        {/* <SortButtons handleOrder={handleOrder} /> */}
        <select onChange={(e) => setSortType(e.target.value)}> 
        <option value='default'>Relevância</option>
        <option value='price'>Preço (Menor)</option>
        <option value='score'>Avaliação</option>
        <option value='name'>Nome (A-Z)</option>
      </select>
      
        <section className='products-box'>
          <div className='row'>
            {data && data.length>0 && data.map((item) =>
              <div className='col-sm-4 col-lg-3'>
                <div className='product card'>
                  <img src={'assets/'+ item.image} className='card-img-top' alt='product'/>
                  <h4 className='product-name'>{item.name}</h4>
                  <p>Preço: R$ {item.price}</p>
                  <p>{item.score} like(s)</p>
                  <div className='count-buttons-box'>
                    <button 
                      className='btn btn-outline-success' 
                      onClick={() => onAdd(item)}
                    >
                      Adicionar
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Items;

