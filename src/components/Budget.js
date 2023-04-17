import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => 
{
    const { budget, expenses, dispatch } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => total += item.cost, 0);
    const setBudget = (budget) => {
        if(budget > 20000) {
            alert(`The value cannot exceed 20000 funds £${budget}`);
            return;
        }

        if(budget < totalExpenses) {
            alert(`The value cannot be lower than the expenses £${totalExpenses}`);
            return;    
        }

        dispatch({
            type: 'CHG_BUDGET',
            payload: budget,
        });
    };
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £<input required='required' type='number' id='budget' value={budget} style={{ marginLeft: '1rem', size: 5, display: 'inline', maxWidth: '50%' }}
                onChange={(event) => setBudget(event.target.value)}>
            </input>     
            </span>
        </div>
    );
};

export default Budget;
