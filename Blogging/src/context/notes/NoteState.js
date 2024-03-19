import noteContext from './noteContext';
import { useState } from 'react';
const NoteState=(props)=>{

const url1="https://blog-backend-rosy-six.vercel.app";

// // 
// "http://localhost:4000";

const [Notes, setNotes] = useState([]);

const [Blog, setBlog] = useState([]);


//fetch note
const fetchnotes = async () => {
  
  const response = await fetch(`${url1}/api/notes/getuserinfo`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem('token')
    },
  });

  const json = await response.json();
  setNotes(json);
}


// fetch every user notes inrespective of any user
const fetchevery = async () => {
  
  const response = await fetch(`${url1}/api/notes/fetchevery`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
     
    },
  });

  const json = await response.json();
  setBlog(json);
}












//add a note add a note add a note add a note add a note
const addNote= async (title,description,url,tag)=>
{ 
  const response = await fetch(`${url1}/api/notes/addnotes`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      "auth-token" : localStorage.getItem('token')
    },
  
    body: JSON.stringify({title,description,url,tag}),
  });
  const json = await response.json(); 
  console.log(json);
 
 setNotes(Notes.concat(json));
}

 
//delete a note //delete a note  //delete a note
const deleteNote= async (id)=>
{

  const response = await fetch(`${url1}/api/notes/deleteNote/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "auth-token" :localStorage.getItem('token')
    },
  
   
  });
  const json= response.json(); 

  console.log(json)
    console.log("delete it",id);
const Newnote=Notes.filter(  (note)=>{return note._id!==id;})

  setNotes(Newnote);
}


//Edit a note   //Edit a note  //Edit a note
const editNote = async (id, title, description,url, tag) => {
  // console.log("jjus",{title,description,url,tag});
  const response = await fetch(`${url1}/api/notes/updateNote/${id}`, {
    method: "PUT",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      "auth-token" :localStorage.getItem('token')
    },
  
    body: JSON.stringify({title,description,url,tag}),

  });
  const json= response.json(); 
  console.log(json);
  
let newNotes=JSON.parse(JSON.stringify(Notes));

  // Update the local 'Notes' array
  for (let index = 0; index < newNotes.length; index++) {
    let element = newNotes[index];

    if (element._id === id) {
      
      newNotes[index].title = title;
      newNotes[index].description = description;
      newNotes[index].url = url;
      newNotes[index].tag = tag;
      break;
    }

  
  }
  setNotes(newNotes);
};

 
  return (
    <noteContext.Provider value={{Notes,Blog,setNotes,addNote,deleteNote,editNote,fetchevery,fetchnotes}}> 
    {props.children}
    </noteContext.Provider>
  )
}


export default NoteState;