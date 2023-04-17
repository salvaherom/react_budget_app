import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { expenses, budget } = useContext(AppContext); 
    const totalEspenses = expenses.reduce((total, item) => total += item.cost, 0);
    const alertType = totalEspenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: £{budget - totalEspenses}</span>
        </div>
    );
};
export default Remaining;
