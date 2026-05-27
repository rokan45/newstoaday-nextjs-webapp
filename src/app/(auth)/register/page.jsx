'use client'
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleRegister = (data) => {
        console.log(data, "data");
    }


    return (
        <div className='bg-[#f3f3f3] min-h-screen flex items-center justify-center font-sans antialiased'>

            <div class="bg-white w-full max-w-137.5 p-10 md:p-14 shadow-sm">


                <div class="text-center mb-8">
                    <h2 class="text-2xl md:text-3xl font-bold text-[#333333]">Register Here!</h2>
                </div>


                <hr class="border-[#f0f0f0] mb-8" />

                <form class="space-y-6" onSubmit={handleSubmit(handleRegister)}>

                    {/* Name field */}
                    <div class="space-y-2">
                        <label class="block text-sm font-bold text-[#333333]">Name</label>
                        <input
                            type="text"
                            
                            placeholder="Your Name"
                            class="w-full bg-[#f3f3f3] text-sm text-[#333333] placeholder-[#b3b3b3] p-4 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"

                            {...register("name", { required: 'true' })}

                        />
                        {errors.name && <span className='text-red-600 font-semibold'>This field is required</span>}
                    </div>

                    {/* Email */}
                    <div class="space-y-2">
                        <label class="block text-sm font-bold text-[#333333]">Email address</label>
                        <input
                            type="email"
                            
                            placeholder="Enter your email address"
                            class="w-full bg-[#f3f3f3] text-sm text-[#333333] placeholder-[#b3b3b3] p-4 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"

                            {...register("email", { required: 'true' })}

                        />
                          {errors.email && <span className='text-red-600 font-semibold'>This field is required</span>}
                    </div>

                    {/* photo Url */}
                    <div class="space-y-2">
                        <label class="block text-sm font-bold text-[#333333]">Photo URL</label>
                        <input
                            type="text"
                            
                            placeholder="Place the photo link"
                            class="w-full bg-[#f3f3f3] text-sm text-[#333333] placeholder-[#b3b3b3] p-4 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"

                            {...register("photo", { required: 'true' })}

                        />
                          {errors.photo && <span className='text-red-600 font-semibold'>This field is required</span>}
                    </div>


                    {/* Password */}
                    <div class="space-y-2">
                        <label class="block text-sm font-bold text-[#333333]">Password</label>
                        <input
                            type="password"
                            
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
                            Register
                        </button>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default RegisterPage;