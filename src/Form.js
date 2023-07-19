import React from 'react'
import { useState } from 'react';
import { Item } from './Item';


export const Form =({newForm, changeNewForm})=>{

    

    const [searchField, setSearchField] = useState("");
    const [selectedOption, setSelectedOption] = useState(1);
    

    const handleSubmit =(event)=>{
        event.preventDefault();
        if(!searchField){return;}
       
        console.log(`From handleSubmit ${searchField}, ${selectedOption}`)

        const newItem = {
            description:searchField,
            quantity:selectedOption,
            packed:false,
            id:Date.now()
        };


        

        changeNewForm([...newForm, newItem]);
        console.log(newForm);

        setSearchField("");
        setSelectedOption(1);

        
    }

    const handleTextChange = (event) =>{
        setSearchField(event.target.value);
        console.log(searchField);

    }

    const handleOptionChange=(event)=>{
        setSelectedOption(Number(event.target.value));
        console.log(event.target.value);
    }

    return(
        <form className='add-form' onSubmit={handleSubmit}>
            <h3>What do you need for your trip?</h3>
            <select value={selectedOption} onChange={handleOptionChange}>

                {Array.from( {length:20}, (_,i)=>i+1).
                map((num)=>
                <option key={num} value={num}>
                    {num}
                </option>)
                
                } 
            </select>
            <input value={searchField} onChange={handleTextChange} type="text" placeholder='Things to pack'/>
            <button type="submit">Add</button>
        </form>
    )
}