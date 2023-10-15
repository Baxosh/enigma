import React, {useState} from 'react';

function Test() {
    const [selectedAge, setSelectedAge] = useState('');
    const [selectedCount, setSelectedCount] = useState('');
    const [selectedCount2, setSelectedCount2] = useState('');
    const [selectedCount3, setSelectedCount3] = useState('');
    const [selectedMenstrualAge, setSelectedMenstrualAge] = useState('');
    const [selectedGaveBirthAge, setSelectedGaveBirthAge] = useState('');
    const [selectedInput, setSelectedInput] = useState(false);
    const [name, setName] = useState('')
    const [phone, setPhone] = useState(null)

    const ages = [];

    for (let age = 35; age <= 90; age++) {
        ages.push(age);
    }

    const handleAgeChange = (event) => {
        setSelectedAge(event.target.value);
    };

    const handleSelectCountChange = (event) => {
        setSelectedCount(event.target.value);
    };

    const handleSelectCountChange2 = (event) => {
        setSelectedCount2(event.target.value);
        if (event.target.value === 'Одна' || event.target.value === 'Больше одной') {
            setSelectedInput(true)
        } else {
            setSelectedInput(false)
        }
    };

    const handleSelectCountChange3 = (event) => {
        setSelectedCount3(event.target.value);
    };

    const handleMenstrualAgeChange = (event) => {
        setSelectedMenstrualAge(event.target.value);
    };

    const handleGaveBirthAgeChanges = (event) => {
        setSelectedGaveBirthAge(event.target.value);
    };


    const handleFormSubmit = (event) => {
        event.preventDefault();

        const formData = {
            selectedAge,
            selectedCount,
            selectedCount2,
            selectedCount3,
            selectedMenstrualAge,
            selectedGaveBirthAge,
        };

        const formDataString = JSON.stringify(formData);

        localStorage.setItem('formData', formDataString);

        setSelectedAge('');
        setSelectedCount('');
        setSelectedCount2('');
        setSelectedCount3('');
        setSelectedMenstrualAge('');
        setSelectedGaveBirthAge('');

        window.location.href = '/answer';
    };

    return (
        <section className="bg-gray-50 dark:bg-blue-950">
            <br/>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                <div className="flex justify-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-[70%] max-w-[400px]" src="/logo-ycw.svg" alt="logo"/>
                </div>
                <div
                    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-[700px] xl:p-0 dark:bg-blue-800 dark:border-blue-800">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-center text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl dark:text-white">
                            Давайте определим риск развития РМЖ
                        </h1>
                        <form className="space-y-45 md:space-y-6" onSubmit={handleFormSubmit}>
                            <div className="flex">
                                <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white flex-1">
                                    Возраст
                                </label>
                                <input placeholder="Введите здесь"
                                       type='text' className="input input-bordered w-[40%] max-w-xs" required
                                       value={selectedAge}
                                       onInput={handleAgeChange}/>
                            </div>
                            <div className='flex'>
                                <label
                                    className="block mb-2 text-lg font-medium text-gray-900 dark:text-white flex-1 mt-6">
                                    В каком возрасте начались месячные?
                                </label>
                                <input type="text" placeholder="Введите здесь"
                                       className="input input-bordered w-[40%] max-w-xs mt-6"
                                       value={selectedMenstrualAge}
                                       onInput={handleMenstrualAgeChange}
                                       required={true}
                                />
                            </div>
                            <div className="flex">
                                <label
                                    className="block mb-2 text-lg font-medium text-gray-900 dark:text-white flex-1 mt-6">
                                    В каком возрасте впервые родили?
                                </label>
                                <input
                                    type="text"
                                    value={selectedGaveBirthAge}
                                    placeholder="Введите здесь"
                                    className="input input-bordered w-[40%] max-w-xs mt-6"
                                    required={true}
                                    onInput={handleGaveBirthAgeChanges}
                                />
                            </div>
                            <div className="flex">
                                <label
                                    className="block mb-2 text-lg font-medium text-gray-900 dark:text-white flex-1 mt-6">
                                    Количество родственников с раком груди
                                </label>
                                <select
                                    className="select select-bordered w-[40%] max-w-xs mt-6"
                                    value={selectedCount}
                                    onChange={handleSelectCountChange}
                                    required={true}
                                >
                                    <option value="" disabled>
                                        Выберите количество
                                    </option>
                                    <option value="Не знаю">
                                        Не знаю
                                    </option>
                                    <option value="Ноль">
                                        Ноль
                                    </option>
                                    <option value="Один">
                                        Один
                                    </option>
                                    <option value="Больше одного">
                                        Больше одного
                                    </option>
                                </select>
                            </div>
                            <div className="flex mt-4">
                                <label
                                    className="block mb-2 text-lg font-medium text-gray-900 dark:text-white flex-1 mt-6">
                                    Количество выполненных биопсий груди
                                </label>
                                <select
                                    className="select select-bordered w-[40%] max-w-xs mt-6"
                                    value={selectedCount2}
                                    onChange={handleSelectCountChange2}
                                    required={true}
                                >
                                    <option value="" disabled>
                                        Выберите количество
                                    </option>
                                    <option value="Не знаю">
                                        Не знаю
                                    </option>
                                    <option value="Ноль">
                                        Ноль
                                    </option>
                                    <option value="Одна">
                                        Одна
                                    </option>
                                    <option value="Больше одной">
                                        Больше одной
                                    </option>
                                </select>
                            </div>
                            {selectedInput && (
                                <div className="flex">
                                    <label
                                        className="block mb-2 text-lg font-medium text-gray-900 dark:text-white flex-1 mt-6">
                                        Была ли обнаружена атипичная гиперплазия?
                                    </label>
                                    <select
                                        className="select select-bordered w-[40%] max-w-xs mt-6"
                                        value={selectedCount3}
                                        onChange={handleSelectCountChange3}
                                        required={true}
                                    >
                                        <option value="" disabled>
                                            Выберите количество
                                        </option>
                                        <option value="Не знаю">
                                            Не знаю
                                        </option>
                                        <option value="Нет">
                                            Нет
                                        </option>
                                        <option value="Да">
                                            Да
                                        </option>
                                    </select>
                                </div>
                            )}
                            <div className="flex mt-4">
                                <label
                                    className="block mb-2 text-lg font-medium text-gray-900 dark:text-white flex-1 mt-6">
                                    Есть ли у вас вредные привычки ?
                                </label>
                                <select
                                    className="select select-bordered w-[40%] max-w-xs mt-6"
                                    required={true}
                                >
                                    <option value="Нет">
                                        Нет
                                    </option>
                                    <option value="Я курью">
                                        Я курью
                                    </option>
                                    <option value="Употреблюя алкоголь">
                                        Употреблюя алкоголь
                                    </option>
                                    <option value=" Не хочу рассказать об этом">
                                        Не хочу рассказать об этом
                                    </option>
                                </select>
                            </div>

                            <div className="flex mt-4">
                                <label
                                    className="block mb-2 text-lg font-medium text-gray-900 dark:text-white flex-1 mt-6">
                                    Был ли у вас аборт?
                                </label>
                                <select
                                    className="select select-bordered w-[40%] max-w-xs mt-6"
                                    required={true}
                                >
                                    <option value="Не было">
                                        Не было
                                    </option>
                                    <option value="Был один раз">
                                        Был один раз
                                    </option>
                                    <option value="Было больше одного раза">
                                        Было больше одного раза
                                    </option>
                                    <option value="Не хочу рассказать об этом">
                                        Не хочу рассказать об этом
                                    </option>
                                </select>
                            </div>
                            <div className="flex">
                                <div className="mb-6 flex-1">
                                    <label className="block text-lg font-medium text-gray-900 dark:text-white">
                                        Ваше имя
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Ваше имя"
                                        className="input input-bordered w-[80%] max-w-xs mt-2"
                                        required={true}
                                    />
                                </div>
                                <div className="mb-6 flex-1">
                                    <label className="block text-lg font-medium text-gray-900 dark:text-white">
                                        Номер телефона
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Номер телефона"
                                        className="input input-bordered w-[80%] max-w-xs mt-2"
                                        required={true}
                                    />
                                </div>
                            </div>
                            <button className="btn bg-blue-950 border-none text-white w-full">Отправить</button>
                        </form>
                    </div>
                </div>
            </div>
            <br/>
        </section>
    );
}

export default Test;
