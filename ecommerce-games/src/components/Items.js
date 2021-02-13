import '../App.css';
import SortButtons from './SortButtons';

const Items = ({data}) => {
  return (
    <main>
      <div className='offset-sm-1 col-sm-10 '>
        <SortButtons />
      
        <section className='products-box'>
          <div className='row'>
          {
            data && data.length>0 && data.map((item)=>
              <div className='col-sm-3 product-col'>
                <div className='product card'>
                  <img src={'assets/'+ item.image} className='card-img-top' />
                  <p className='product-name'>{item.name}</p>
                  <p>Preço: {item.price}</p>
                  <p>Avaliação: {item.score}</p>
                  <div className='count-buttons-box'>
                    <button className='btn btn-outline-success'>Adicionar/Remover</button>
                    <i>✔</i>
                  </div>
                </div>
              </div>
            )
          }
          </div>
        </section>
      </div>
    </main>
  );
}

export default Items;

