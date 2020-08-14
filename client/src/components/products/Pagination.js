import React from 'react';
import './css/Products.css';

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
   const pageNumbers = [];

   for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
      pageNumbers.push(i);
   }

   return (
      <nav className='mt-5'>
         <ul className='pagination pagination-lg justify-content-center'>
            {pageNumbers.map((number) => (
               <li key={number} className='page-item'>
                  <button
                     onClick={() => paginate(number)}
                     className='page-link'
                  >
                     {number}
                  </button>
               </li>
            ))}
         </ul>
      </nav>
   );
};

export default Pagination;
