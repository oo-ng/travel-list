import React from 'react'
import { Item } from './Item';

export const PackingList =( {initialItems, setInitialItems, idToDelete, setIdToDelete, setNoOfPacked, noOfPacked} )=>{

    


    const ItemsToBeRendered = initialItems.map((item)=>{
        
        return(
            <Item 
        noOfPackedI={noOfPacked}
        setNoOfPackedI={setNoOfPacked}
        setInitialItemsI={setInitialItems}
        initialItemsI={initialItems}
        idToDeleteI ={idToDelete}
        setIdToDeleteI={setIdToDelete}
        key = {item.id}
        id={item.id}
        description={item.description}
        quantity={item.quantity}
        packed={item.packed}
        />
        )
        
    })


    return (
       <div className="list">
        <ul >
            {ItemsToBeRendered}
        </ul>
       </div>
    )
}