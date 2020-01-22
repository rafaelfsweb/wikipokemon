import React from 'react';

export default function Pagination({ gotoNextPage, gotoPreviousPage }) {
  return (
    <div>
      {gotoPreviousPage && <button onClick={gotoPreviousPage}>Anterior</button>}
      {gotoNextPage && <button onClick={(event) => gotoNextPage(event.target.value)}>Próxima</button>}
    </div>
  );
}
