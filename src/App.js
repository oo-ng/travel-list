import { Logo } from "./Logo";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";
import { useState } from "react";

function App() {

  const [newItems, setNewItem]= useState([])
  const [toBeDeletedID, setToBeDeletedID]  = useState(0);

  return (
    <div>
      <header> <Logo/> </header>
      <main> 
        <Form newForm={newItems} changeNewForm={setNewItem} /> 
        {console.log(newItems)}
        <PackingList initialItems={newItems} setInitialItems={setNewItem} idToDelete={toBeDeletedID} setIdToDelete={setToBeDeletedID} />
      </main>

      <Stats/>
      
      
    </div>
  );
}

export default App;
