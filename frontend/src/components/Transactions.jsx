import React from 'react';
import {months} from "../utils/month.js";
import {AiOutlineRight} from "react-icons/ai";

function Transactions() {
    return (
        <div className="w-[25%] h-10 p-10 flex flex-col">
            <div className="flex items-center justify-between mb-10">
                <h1 className="text-2xl font-bold">Transactions</h1>
                <p className="text-xs text-gray-400 flex items-center">
                    View all
                    <AiOutlineRight />
                </p>
            </div>
            <div className='flex items-center justify-between'>
                <img className="w-6" src="/icons/food.png" alt="icon"/>
                <div>
                    <h1 className='font-semibold'>Central Burger</h1>
                    <p className="text-xs text-gray-400">Cafe and Restaurant</p>
                </div>
                <p className="text-xl font-semibold">-$138.56</p>
            </div>
            <div className="divider"></div>
            <div className='flex items-center justify-between'>
                <img className="w-6" src="/icons/health.png" alt="icon"/>
                <div>
                    <h1 className='font-semibold'>Health Pharmacy</h1>
                    <p className="text-xs text-gray-400">Health and care</p>
                </div>
                <p className="text-xl font-semibold">-$530.56</p>
            </div>
            <div className="divider"></div>
            <div className='flex items-center justify-between'>
                <img className="w-6" src="/icons/income.png" alt="icon"/>
                <div>
                    <h1 className='font-semibold'>Ibon terminal</h1>
                    <p className="text-xs text-gray-400">Card replenishment</p>
                </div>
                <p className="text-xl font-semibold text-success">$400.00</p>
            </div>
        </div>
    );
}

export default Transactions;