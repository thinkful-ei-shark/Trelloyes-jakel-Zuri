import React from 'react';
import Card from './Card';
import './lists.css'


function List(props) {
  return (
    <div className='List'>
      {/* content goes here */}
      <section class="List">
        <header class="List-header">
          <h2>First list</h2>
        </header>
        <div class="List-cards">
          {props.cards.map(card =>
            <Card key={card.id} title={card.title} content={card.content} />
          )}
        </div>
      </section>
    </div>
  );
}

export default List;







