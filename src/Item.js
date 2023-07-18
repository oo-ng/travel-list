export const Item=({id, description, quantity, packed, onDeletion})=>{
    
    const handleDeletion = (event)=>{
        
        console.log({id})

    }
    return(
        <li  >
            <span style={packed?{textDecoration: "line-through"}:{}}>{quantity}, {description}</span>
            <button onClick={handleDeletion}>❌</button>
        </li>
    )

    

}