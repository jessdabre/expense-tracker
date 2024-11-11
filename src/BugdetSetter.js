import React,{useState} from "react";

function BugdetSetter({setBudget}){
    const[inputValue, setInputValue]=useState('');
    const handleBugdet = () => {
        setBudget(parseFloat(inputValue));
        setInputValue('');
    };
    return(
        <div className='budget-setter'>
            <h2>Set Monthly Budget</h2>
            <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter Budget"/>
            <button onClick={handleBugdet}>Set Monthly Budget</button>
        </div>
    )
}

export default BugdetSetter;