import React from 'react';

const CreateAnalysis = () => {
    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
            <br/>
            <div
                className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-[700px] xl:p-0 dark:bg-blue-950 dark:border-blue-950">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-center text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl dark:text-white">
                        Тесты
                    </h1>
                    <form className="space-y-45 md:space-y-6">
                        <div className='flex'>
                            <label
                                className="block mb-2 text-lg font-medium text-gray-900 dark:text-white flex-1 mt-4">
                                Выбирайте файла
                            </label>
                            <input type="file"
                                   className="file-input file-input-bordered file-input-info w-full max-w-xs border-none"/>
                        </div>
                        <div className="flex">
                            <label
                                className="block mb-2 text-lg font-medium text-gray-900 dark:text-white flex-1 mt-8">
                                Киста
                            </label>
                            <select
                                className="select select-bordered w-[40%] max-w-xs mt-6"
                                required={true}
                            >
                                <option value="" disabled>
                                    Выберите
                                </option>
                                <option value="Да">
                                    Да
                                </option>
                                <option value="Нет">
                                    Нет
                                </option>
                            </select>
                        </div>
                        <div className="flex">
                            <label
                                className="block mb-2 text-lg font-medium text-gray-900 dark:text-white flex-1 mt-8">
                                Фиброаденома
                            </label>
                            <select
                                className="select select-bordered w-[40%] max-w-xs mt-6"
                                required={true}
                            >
                                <option value="" disabled>
                                    Выберите
                                </option>
                                <option value="Да">
                                    Да
                                </option>
                                <option value="Нет">
                                    Нет
                                </option>
                            </select>
                        </div>

                        <div className="flex">
                            <label
                                className="block mb-2 text-lg font-medium text-gray-900 dark:text-white flex-1 mt-8">
                                Кальцинаты
                            </label>
                            <select
                                className="select select-bordered w-[40%] max-w-xs mt-6"
                                required={true}
                            >
                                <option value="" disabled>
                                    Выберите
                                </option>
                                <option value="Да">
                                    Да
                                </option>
                                <option value="Нет">
                                    Нет
                                </option>
                            </select>
                        </div>

                        <div className="flex">
                            <label
                                className="block mb-2 text-lg font-medium text-gray-900 dark:text-white flex-1 mt-8">
                                Фиброкистозная мастопатия
                            </label>
                            <select
                                className="select select-bordered w-[40%] max-w-xs mt-6"
                                required={true}
                            >
                                <option value="" disabled>
                                    Выберите
                                </option>
                                <option value="Да">
                                    Да
                                </option>
                                <option value="Нет">
                                    Нет
                                </option>
                            </select>
                        </div>

                        <div className="flex">
                            <label
                                className="block mb-2 text-lg font-medium text-gray-900 dark:text-white flex-1 mt-8">
                                Опухоль
                            </label>
                            <select
                                className="select select-bordered w-[40%] max-w-xs mt-6"
                                required={true}
                            >
                                <option value="" disabled>
                                    Выберите
                                </option>
                                <option value="Отсутствует">
                                    Отсутствует
                                </option>
                                <option value="Доброкачественное образование">
                                    Доброкачественное образование
                                </option>
                                <option value="Злокачественное образование">
                                    Злокачественное образование
                                </option>
                            </select>
                        </div>
                        <button className="btn border-none bg-blue-600 text-white w-full">Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateAnalysis;