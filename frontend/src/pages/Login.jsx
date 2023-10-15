import React, {useRef} from 'react';
import {toast} from "react-toastify";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Login() {
    const username = useRef(null)
    const email = useRef(null)
    const password1 = useRef(null)
    const password2 = useRef(null)
    const policy = useRef(null)

    const navigate = useNavigate()

    const submitForm = async (event) => {
        event.preventDefault()
        if (!policy.current.checked) {
            toast.error('Please accept the Terms and Conditions!')
            policy.current.focus()
            return
        }
        if (password1.current.value !== password2.current.value) {
            toast.error('Password does not match!')
            return
        }

        const registerData = JSON.stringify({
            username: username.current.value,
            password: password1.current.value,
            email: email.current.value
        })

        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://127.0.0.1:8000/register/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: registerData
        };

        const {status, data} = await axios.request(config)

        switch (status) {
            case 201:
                toast.success('You registered successfully!')
                navigate('/')
                localStorage.setItem('user', JSON.stringify(data))
                break

            case 400:
                toast.error('Username or email is already in use!')
                break

            case undefined:
                toast.error('Username or email is already in use!')
                break
            default:
                toast.error('Something went wrong!')

        }
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="flex justify-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-[60%] max-w-[400px]" src="/logo-ycw.svg" alt="logo"/>
                </div>
                <div
                    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Login
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#" onSubmit={submitForm}>
                            <div>
                                <label htmlFor="phone"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Phone
                                </label>
                                <input
                                    ref={username}
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="your phone"
                                    required=""/>
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >Password
                                </label>
                                <input
                                    ref={password1}
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required=""
                                />
                            </div>
                            <button className="btn btn-info w-full">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;