
import './style.css';

const isRegistered = true;
export default function Register (){
    return (
        <div className="bg-white relative">
            <div className="flex flex-col items-center justify-between pt-0 pr-10 pl-10 pb-0 mt-8 mr-auto">
                <div className='flex flex-col itmes-center justify-center w-full pr-10 pl-10 lg:flex-row'>
                    <div className='w-full mt-12 mr-0 mb-0 ml-0 relative max-w-2xl'>
                        <div className="flex flex-col justify-center items-center shadow-2xl"> 
                            <p className="w-full text-4xl font-medium text-center font-serif">
                                {
                                    isRegistered ? "Registration Successful" : "Sign up for an account"
                                }
                            </p>
                            {
                                isRegistered?<button>Login</button>:null

                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}