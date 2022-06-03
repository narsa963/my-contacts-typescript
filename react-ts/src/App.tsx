import React, { useEffect, useState } from 'react';

import './App.css';
import Contacts from './components/Contacts';
import {IContact }  from './components/contact';


const App: React.FC<any> =(props)=> {
  const [allContacts, setAllContacts]= useState<IContact[]>([]);

  useEffect(()=>{
    fetch("http://localhost:5001/contacts", {method:'GET',

    headers :  {
      Authorization:"dgfhsgerb",
      Accept: "application/json"
    }
  }).then(res=>res.json()).then(result=>{
    let allContacts = result as IContact[];
    setAllContacts(allContacts);
    console.log(result);
    console.log(result.contacts);
  })
  },[]);
  

  return (
    <div >
    <Contacts  contacts={allContacts}/>
    </div>
  );
}

export default App;
