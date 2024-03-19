import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';
import Notesitem1 from './Notesitem1';


export default function Notes() {
  const first = useContext(noteContext);
  const { Blog} = first;
 
  return (
    <div className="row my-3 mx-2">
          <h2>Everyone Blog:</h2>
   
     {Array.isArray(Blog) ? (
        Blog.map((Note) => (
          <Notesitem1 key={Note.id}  note={Note} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
