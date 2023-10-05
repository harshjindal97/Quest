'use client'
import { useRouter } from 'next/navigation';
import InputComponent from '../components/formelements/inputComponent';
import SelectComponent from '../components/formelements/selectComponent';
import { loginFormControl} from '../utils';


export default function Login(){

    const router = useRouter()
    return(
        <div className="bg-white relative ">
            <div className="mt-12 mr-10 ml-10 mb-0 flex flex-col justify-center items-center tosmall:mr-3 tosmall:ml-3">
                <div className="p-10 pt-12 w-full flex flex-col justify-center items-center small:p-0">
                    <div className="flex flex-col justify-center items-center mt-12 relative w-full lg:w-6/12 md:w-7/12 sm:w-8/12">
                        <div className="flex flex-col justify-center items-center shadow-2xl p-10 w-full">
                            <p className="text-4xl text-serif text-center font-medium small:text-2xl">Login</p>
                            
                                <div className="w-full relative mt-5 space-y-8">
                                    {
                                        loginFormControl.map((items)=>
                                            items.componentType == "input" ? <InputComponent key={items.id}
                                            type={items.type} placeholder={items.placeholder} label={items.label} 
                                            />:
                                            items.componentType == 'select' ? <SelectComponent
                                            options={items.options} label={items.label}
                                            />
                                            :null
                                        )
                                        
                                    }
                                    <button className="bg-black text-white p-3 rounded w-full">
                                        Login
                                    </button>

                                    <div className='flex flex-col gap-2'>
                                        <p>New to Website !</p>
                                        <button className='bg-black w-full border rounded text-white p-3' onClick={()=>{router.push("/register")}}>
                                            Register
                                        </button>

                                    </div>
                                </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}