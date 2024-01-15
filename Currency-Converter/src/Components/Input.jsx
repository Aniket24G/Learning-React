import React from "react";
import { useId } from "react";

function Input({label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency="usd",
    amountDisable=false,
    currencyDisable=false,
    classname=""}){
        const amountInputId = useId()
    return(
        <div className={`bg-white p-3 rounded-lg text-sm flex ${classname}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">{label}</label>
                <input 
                id={amountInputId}
                type="number"
                className="outline-none w-full bg-transparent py-1.5"
                placeholder="Amount"
                disabled={amountDisable}
                value={amount}
                onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p classname="text-blacl/40 mb-2 w-full">Currency Type</p>
                <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                value={selectCurrency} 
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                disabled={currencyDisable}
                >
                    {currencyOptions.map((currency)=> (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default Input;