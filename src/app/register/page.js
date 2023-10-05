'use client'
import { useState } from 'react';
import InputComponent from '../components/formelements/inputComponent';
import SelectComponent from '../components/formelements/selectComponent';
import { registrationFormControl } from '../utils';
import './style.css';

const isRegistered = false;
export default function Register (){
const data = {
    name:"",
    email:"",
    password:"",
    role:""
}

    const [formData , setFormData] =useState(data);
    console.log(formData);
    return (
        <div className="bg-white relative">
            <div className="mt-12 flex flex-col w-full items-center justify-between pt-0 pr-10 pl-10 pb-0 mt-8 tosmall:mr-3 tosmall:ml-3">
                <div className='p-10 mt-2 pt-12 w-full flex flex-col justify-center items-center small:p-0'>
                    <div className='mt-12 w-full mt-12 mr-0 mb-0 ml-0 relative max-w-2xl lg:w-6/12 md:w-7/12 sm:w-8/12'>
                        <div className="flex flex-col justify-center items-center shadow-2xl p-10"> 
                            <p className="w-full text-4xl font-medium text-center font-serif small:text-2xl">
                                {
                                    isRegistered ? "Registration Successful" : "Sign up for an account"
                                }
                            </p>
                            {
                                isRegistered?
                                <button className="inline-flex bg-black w-full items-center justify-center px-6 py-4 text-white transition-all focus-shadow font-medium uppercase text-lg">
                                    Login
                                </button>:
                                <div className="w-full relative mt-5 space-y-8">
                                    {
                                        registrationFormControl.map((items)=>
                                            items.componentType == "input" ? <InputComponent key={items.id}
                                            type={items.type} placeholder={items.placeholder} label={items.label} 
                                            onChange={(event) => {
                                                setFormData({
                                                    ...formData,
                                                    [items.id]:event.target.value
                                                }
                                                )
                                            }}
                                            value={formData.id}
                                            />:null
                                        )
                                        
                                    }
                                    <button className="bg-black text-white p-3 rounded w-full">
                                        Register
                                    </button>
                                </div>

                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}