import React, {useState} from 'react';
import {Pie} from "react-chartjs-2";
import {BsClockHistory, BsFillCloudDownloadFill} from "react-icons/bs";
import CreateAnalysis from "../pages/CreateAnalysis.jsx";

function Dashboard() {
    const [click, setClick] = useState(false)

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

    const handleClickDownload = () => {
        setClick(true)
    }
    return (
        <div>
            {!click && (
                <div className='w-full border-r border-gray-200 p-10 flex flex-col gap-10'>
                    <div className='bg-blue-950 rounded-lg h-[300px]'>
                        <div className="flex ml-20 mt-4">
                            <div className="w-[270px] h-[270px]">
                                <Pie data={data}/>
                            </div>
                            <div className="flex-1 ml-2">
                                <h3 className="block text-5xl font-medium text-gray-900 dark:text-red-400">1.6
                                    %</h3>
                                <br/>
                                <h3 className="block text-base font-medium text-gray-900 dark:text-white">в
                                    течение 5 лет</h3>
                                <hr width={170}/>
                                <h3 className="w-[70%] block text-base dark:text-white">1.6% — среднее значение для
                                    белых
                                    женщин в возрасте 35 лет</h3>

                            </div>
                            <div className="w-[270px] h-[270px]">
                                <Pie data={data2}/>
                            </div>
                            <div className="flex-1 ml-2">
                                <h3 className="block text-5xl font-medium text-gray-900 dark:text-red-400">10.1
                                    %</h3>
                                <br/>
                                <h3 className="block text-base font-medium text-gray-900 dark:text-white">в
                                    течение жизни</h3>
                                <hr width={170}/>
                                <h3 className="w-[70%] block text-base dark:text-white">12.6% — среднее значение для
                                    белых
                                    женщин в возрасте 35 лет</h3>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {!click && (
                <div className='flex p-10 gap-16'>
                    <button className="btn btn-wide bg-blue-600 text-white flex-1" onClick={handleClickDownload}>
                        Загрузить
                        <BsFillCloudDownloadFill/>
                    </button>
                    <button className="btn btn-wide bg-blue-600 text-white	 flex-1">История <BsClockHistory/>
                    </button>
                </div>
            )}
            {click && (
                <CreateAnalysis/>
            )}
        </div>
    );
}

export default Dashboard;