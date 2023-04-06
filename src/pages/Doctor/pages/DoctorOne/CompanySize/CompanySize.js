import { ItemCount } from './ItemCount';
import './style.css';

export const CompanySize = () => {
  return (
    <>
      <section className='counter-wrapper'>
        <div className='container'>
          <div className='row'>
            <ItemCount icon='1' counter='358' title='Worldwide Branches' />
            <ItemCount icon='2' counter='358' title='Hospital Formed' />
            <ItemCount icon='3' counter='238' title='Local Partners' />
          </div>
        </div>
      </section>
    </>
  );
};
