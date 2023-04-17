import React, { useContext } from 'react';
import { TiDelete, TiPlus, TiMinus } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { id, name, cost } = props;
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    };
    return (
        <tr>
            <td>{name}</td>
            <td>{currency.sign}{cost}</td>
            <td><TiPlus size="1.5em" onClick={e => increaseAllocation(name)}></TiPlus></td>
            <td><TiMinus size="1.5em" onClick={e => decreaseAllocation(name)}>-</TiMinus></td>
            <td><TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
}
export default ExpenseItem;
