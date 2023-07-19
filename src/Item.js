export const Item=({id, description, quantity, packed, idToDeleteI, setIdToDeleteI, initialItemsI, setInitialItemsI, setNoOfPackedI, noOfPackedI} )=>{
    
    
    const handleDeletion = (event)=>{
        setIdToDeleteI(id);
        console.log("From Item.js "+idToDeleteI);
        setInitialItemsI((newList)=>newList.filter((items)=>items.id!==id));

    }

    const handlePackedClick =(event)=>{
       
        const copyOfInitialItems = [...initialItemsI];
        const copy= copyOfInitialItems.find((item=>item.id===id));
        if(packed===true){
            copy.packed=false;
            setNoOfPackedI((num)=>num-1);
        }else{
            setNoOfPackedI((num)=>num+1)
            copy.packed=true;
        };
        setInitialItemsI(copyOfInitialItems);
       
    }
    return(
        <div className="list">
            <li>
                <button onClick={handlePackedClick}>✅</button>
                <span style={packed?{textDecoration: "line-through"}:{}}>{quantity}, {description}</span>
                <button onClick={handleDeletion}>❌</button>
            </li>
        </div>
        
    )

    

}