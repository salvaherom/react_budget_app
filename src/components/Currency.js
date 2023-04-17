import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [toggled, setToggled] = useState(false);

    const submitCurrency = (currency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency
        });
    }

    return (
        <div className='alert alert-secondary inline'>
            <div class={`dropdown ${toggled ? 'show' : ''}`} onClick={e => setToggled(!toggled)}>
                <button class="btn btn-success dropdown-toggle" type="button" id="dropdownCurrency" data-toggle="dropdown">
                    Currency ({currency.sign} {currency.name})
                </button>
                <div class={`dropdown-menu bg-success ${toggled ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#" onClick={e => submitCurrency({ name: "Dollar", sign: "$" })}>$ Dollar</a>
                    <a class="dropdown-item" href="#" onClick={e => submitCurrency({ name: "Pound", sign: "£" })}>£ Pound</a>
                    <a class="dropdown-item" href="#" onClick={e => submitCurrency({ name: "Euro", sign: "€" })}>€ Euro</a>
                    <a class="dropdown-item" href="#" onClick={e => submitCurrency({ name: "Ruppee", sign: "₹" })}>₹ Ruppee</a>
                </div>
            </div>
        </div>
    );
};

export default Currency;