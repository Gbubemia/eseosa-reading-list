import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
 const { books } = useContext(BookContext);
 return (
  <div className='navbar'>
   <h1>Benin reading List</h1>
   {books.length > 1 ?
   <p>Currently you have { books.length } books to go through...</p>
   :
   books.length === 1 ?
   <p>Currently you have 1 book to go through...</p> 
   :
   <p>Currently you have no books to go through...</p> 
   }
  </div>
 );
}
 
export default Navbar;