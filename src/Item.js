export const Item=({id, description, quantity, packed, idToDeleteI, setIdToDeleteI, initialItemsI, setInitialItemsI} )=>{
    
    
    const handleDeletion = (event)=>{
        setIdToDeleteI(id);

        
        console.log("From Item.js "+idToDeleteI);
        setInitialItemsI((newList)=>newList.filter((items)=>items.id!==id));

    }
    return(
        <div className="list">
            <li>
                <button></button>
                <span style={packed?{textDecoration: "line-through"}:{}}>{quantity}, {description}</span>
                <button onClick={handleDeletion}>❌</button>
            </li>
        </div>
        
    )

    

}