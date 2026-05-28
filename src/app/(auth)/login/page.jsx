'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLogin = async(data) => {
        console.log(data, "data");

        const { data:res, error } = await authClient.signIn.email({
            email: data.email, // required
            password: data.password ,// required
            rememberMe: true,
            callbackURL: "/",
        });

        if(error){
            alert(error.message)
        }
        if(res){
            alert("Login Successfully!")
        }
    }


    return (
        <div className='bg-[#f3f3f3] min-h-screen flex items-center justify-center font-sans antialiased'>

            <div class="bg-white w-full max-w-137.5 p-10 md:p-14 shadow-sm">


                <div class="text-center mb-8">
                    <h2 class="text-2xl md:text-3xl font-bold text-[#333333]">Login your account</h2>
                </div>


                <hr class="border-[#f0f0f0] mb-8" />

                <form class="space-y-6" onSubmit={handleSubmit(handleLogin)}>


                    <div class="space-y-2">
                        <label class="block text-sm font-bold text-[#333333]">Email address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email address"
                            class="w-full bg-[#f3f3f3] text-sm text-[#333333] placeholder-[#b3b3b3] p-4 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"

                            {...register("email", { required: 'true' })}

                        />
                        {errors.email && <span>This field is required</span>}
                    </div>


                    <div class="space-y-2">
                        <label class="block text-sm font-bold text-[#333333]">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            class="w-full bg-[#f3f3f3] text-sm text-[#333333] placeholder-[#b3b3b3] p-4 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"

                            {...register("password", { required: 'true' })}
                        />
                        {errors.password && <span className='text-red-600 font-semibold'>This field is required</span>}
                    </div>


                    <div class="pt-2">
                        <button
                            type="submit"
                            class="w-full bg-[#404040] hover:bg-[#333333] text-white font-medium py-3.5 px-4 rounded transition duration-200"
                        >
                            Login
                        </button>
                    </div>

                </form>


                <div class="text-center mt-8 text-xs md:text-sm font-medium text-[#555555]">
                    Don't Have An Account ? <Link href="/register" class="text-[#ff5c5c] hover:underline font-bold ml-1">Register</Link>
                </div>

            </div>
        </div>
    );
};

export default LoginPage;