import React,{useEffect,useContext} from 'react'

import noteContext from '../context/notes/noteContext';


import Note from "./Notes";

export default function Home()
 {

  const first = useContext(noteContext);
  const { fetchevery} = first;

  useEffect(() => {
   
    fetchevery();
    
    
  
         // eslint-disable-next-line
    }, []);









  return (
   
  <Note/>
 


    
  )
}
