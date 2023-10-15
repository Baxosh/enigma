import React from 'react';
import {AiOutlinePlus} from "react-icons/ai";

function MyCard() {
    return (
        <div className="bg-primary w-full p-8 rounded-lg text-base-100 flex flex-col gap-8">
            <div className="flex justify-between">
                <h1 className="text-2xl font-semibold">My Card</h1>
                <button className="text-sm text-gray-400">Add New</button>
            </div>
            <div className='flex justify-between flex-wrap'>
                <div className="card w-[48%] bg-info mb-3">
                    <div className="px-4 py-4 flex flex-col gap-4">
                        <div className='flex justify-between'>
                            <img className="w-14" src="/card-chip.png" alt="chip"/>
                            <img className="w-14" src="/visa.png" alt="chip"/>
                        </div>
                        <div>
                            <p className="text-xs tracking-wider">Total Balance</p>
                            <h1 className="text-2xl font-semibold my-2 leading-none tracking-wider">$10.120.00</h1>
                        </div>
                        <div>
                            <p className="text-xs mb-2 tracking-wider">**** **** **** 2090</p>
                        </div>
                    </div>
                </div>
                <div className="card w-[48%] border border-info text-info mb-3 text-7xl font-extralight flex items-center justify-center">
                    <AiOutlinePlus />
                </div>
            </div>
        </div>
    );
}

export default MyCard;