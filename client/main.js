
import Cat from './cat';
import React from 'react';
import {render} from 'react-dom';

const cats = ['Adon', 'Ruru', 'Honduco'];
const html = (
  <div>
    {cats.map((cat, key) =>
      <Cat name={cat} key={key}/>
    )}
  </div>
);

render(html, document.getElementById('app'))
