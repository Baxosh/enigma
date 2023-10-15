import React, {useState} from 'react';
import {Pie} from "react-chartjs-2";
import {Chart, ArcElement} from 'chart.js';

Chart.register(ArcElement);

function Answer() {
    const data = {
        labels: ['Low', 'Medium', 'High'],
        datasets: [
            {
                data: [1.6, 98.4],
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(76, 197, 144, 0.5)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(76, 197, 144, 5)'],
            },
        ],
    };
    const data2 = {
        labels: ['Low', 'Medium', 'High'],
        datasets: [
            {
                data: [11, 89],
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(76, 197, 144, 0.5)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(76, 197, 144, 1)'],
            },
        ],
    };
    return (
        <section className="bg-gray-50 dark:bg-blue-950">
            <br/>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-full lg:py-0">
                <div className="flex justify-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-[70%] max-w-[400px]" src="/logo-ycw.svg" alt="logo"/>
                </div>
                <div
                    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-[700px] xl:p-0 dark:bg-blue-900 dark:border-blue-900">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl dark:text-white">
                            Риск заболеть раком
                            молочной железы:
                        </h1>
                        <div className="space-y-45 md:space-y-6">
                            <div>
                                <div className="flex">
                                    <div className="w-[270px] h-[270px] flex-1">
                                        <Pie data={data}/>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="block text-5xl font-medium text-gray-900 dark:text-red-400">1.6
                                            %</h3>
                                        <br/>
                                        <h3 className="block text-base font-medium text-gray-900 dark:text-white">в
                                            течение 5 лет</h3>
                                        <hr/>
                                        <h3 className="block text-base dark:text-white">1.6% — среднее значение для
                                            белых
                                            женщин в возрасте 35 лет</h3>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div>
                                <div className="flex">
                                    <div className="w-[270px] h-[270px] flex-1">
                                        <Pie data={data2}/>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="block text-5xl font-medium text-gray-900 dark:text-red-400">10.1%</h3>
                                        <br/>
                                        <h3 className="block text-base font-medium text-gray-900 dark:text-white">в
                                            течение жизни
                                        </h3>
                                        <hr/>
                                        <h3 className="block text-base dark:text-white">12.6% — среднее значение для
                                            белых
                                            женщин в возрасте 35 лет</h3>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div>
                                <h1 className="text-center text-4xl font-bold leading-tight tracking-tight text-red-900 md:text-4xl dark:text-red-600">
                                    Посоветуйтесь с маммологом и загрузите анализы маммографии после прохождения !
                                </h1>
                            </div>
                            {/*<button className="btn bg-blue-950 border-none text-white w-full"*/}
                            {/*        onClick={() => window.location.href = '/test'}>Назад*/}
                            {/*</button>*/}
                            <button className="btn bg-blue-950 border-none text-white w-full"
                                    onClick={() => window.location.href = '/login'}>Вход
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
        </section>
    );
}

export default Answer;
