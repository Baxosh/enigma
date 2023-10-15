import React, {useState} from 'react';
import axios from "axios";

function Test() {
    const [selectedAge, setSelectedAge] = useState('');
    const [selectedCount, setSelectedCount] = useState('');
    const [selectedCount2, setSelectedCount2] = useState('');
    const [selectedCount3, setSelectedCount3] = useState('');
    const [selectedMenstrualAge, setSelectedMenstrualAge] = useState('');
    const [selectedGaveBirthAge, setSelectedGaveBirthAge] = useState('');
    const [selectedInput, setSelectedInput] = useState(false);
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

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
        if (event.target.value === '1' || event.target.value === '2') {
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

    const handleChangePhone = (event) => {
        setPhone(event.target.value);
    };


    const handleFormSubmit = (event) => {
        event.preventDefault();
        axios({
            url: 'http://localhost:8000/api/v1/users/calculate',
            method: 'POST',
            data: {
                phone: +phone,
                age: +selectedAge,
                first_menstrual: +selectedMenstrualAge,
                first_live_birth: 1,
                first_degree_cancer: 1,
                previous_breast_biopsy: +selectedCount2,
                atypical_hyperplasia: 1,
                full_name: 'Alirizo',
            }
        })
            .then(res => {
                window.location.href = '/answer'
                localStorage.setItem('items', res.config.data)
            })
            .catch(err => console.log(err))

        setSelectedAge('');
        setSelectedCount('');
        setSelectedCount2('');
        setSelectedCount3('');
        setSelectedMenstrualAge('');
        setSelectedGaveBirthAge('');

        // window.location.href = '/answer';
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
                                    <option value=''>
                                        Не знаю
                                    </option>
                                    <option value='0'>
                                        Ноль
                                    </option>
                                    <option value='1'>
                                        Одна
                                    </option>
                                    <option value='2'>
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
                                        <option value="0">
                                            Не знаю
                                        </option>
                                        <option value="1">
                                            Нет
                                        </option>
                                        <option value="2">
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
                                        value={phone}
                                        onInput={handleChangePhone}
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
