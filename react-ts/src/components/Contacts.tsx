import React from "react";


const Contacts: React.FC<{contacts: any[]}> =(props)=>{
return (
    <ul>
      {props.contacts.map((contact)=>{
      return(
         <li key={contact.id}>
           <p>{contact.name}</p>
           <p>{contact.handle}</p>
         </li> 
      )
      })}  
    </ul>
)
}
export default Contacts;