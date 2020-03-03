import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const NewBookForm = () => {
 const { dispatch } = useContext(BookContext);
 const [title, setTitle] = useState('');
 const [author, setAuthor] = useState('');

 const handleTitleChange = e => {
  setTitle(e.target.value);
 }

 const handleAuthorChange = e => {
  setAuthor(e.target.value);
 }

const handleSubmit = e => {
 e.preventDefault();
 dispatch({type: 'ADD_BOOK', book: {
    title: title,
    author: author
 }});
 setAuthor('');
 setTitle('');
}
 return (
   <div className="div-form"> 
      <form onSubmit={handleSubmit}>
         <label>Enter book title:</label>    
         <input type='text' value={title} 
         onChange={handleTitleChange} placeholder='book title' required />     
         <label>Enter book author:</label>
         <input type='text' value={author} 
         onChange={handleAuthorChange} placeholder='author' required />
         <input type='submit' value="add a book" />
      </form>
  </div>
 );
}
 
export default NewBookForm;