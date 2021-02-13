import '../App.css';
import SortButtons from './SortButtons';

const Items = ({data}) => {
  return (
    <main>
      <SortButtons />

      <section className='products-box'>
        {
          data && data.length>0 && data.map((item)=>
            <div className='product'>
              <img src={'assets/'+ item.image} />
              <p>{item.name}</p>
              <p>Preço: {item.price}</p>
              <p>Avaliação: {item.score}</p>
              <div className='count-buttons-box'>
                <button>Adicionar/Remover</button>
                <i>✔</i>
              </div>
            </div>
          )
        }
      </section>
    </main>
  );
}

export default Items;

