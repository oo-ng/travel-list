import { Logo } from "./Logo";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";
import { useState } from "react";

function App() {

  const [newItem, setNewItem]= useState([]) 


  return (
    <div>
      <header> <Logo/> </header>
      <main> 
        <Form newForm={newItem} changeNewForm={setNewItem}/> 
        {console.log(newItem)}
        <PackingList initialItems={newItem} />
      </main>

      <Stats/>
      
      
    </div>
  );
}

export default App;
