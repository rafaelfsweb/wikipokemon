import React from 'react';

// import { Container } from './styles';

export default function BerriesList({ berry }) {
  return (
    <div>
      {
        berry.map(p => (
          <div key={p}>{p}</div>
        ))
      }
    </div>
  );
}
