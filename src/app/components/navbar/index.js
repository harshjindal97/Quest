"use client"

import { Fragment, useState } from "react";
import "./index.css"
import { adminNavOptions , navOptions } from "@/app/utils";
import {FaEllipsisV } from "react-icons/fa";

const isAuth = false;
const isAdminView = false;
const user={
    role:"admin"
};

export default function Navbar(){

    const [togglemenu , setToggleMenu] = useState(false);
    function Navitems (){
        return (
            <div className="flex justify-between items-center w-full">
                <ul className="flex flex-column ">
                    {
                        isAdminView? adminNavOptions.map(items=><li className="cursor-pointer marginClass" key={items.id}>
                            {items.label}
                        </li>) : navOptions.map(items=><li className="cursor-pointer marginClass">
                            {items.label}
                        </li>)
                    }
                </ul>
            </div>
        )
    }

    const handleOnClick = () => {
        if(togglemenu==false){
            setToggleMenu(true);
        }else{
            setToggleMenu(false);
        }
        
    }

    return(
        <nav className="bg-white w-full fixed top-0 left-0 border-b z-20 border-grey-200 ">
            <div className="max-w-screen-xl flex flex-wrap justify-between p-4 mx-auto">
                <div className="flex items-center cursor-pointer ">
                    <span className="place-content-center text-2xl font-semibold whitespace-nowrap fontss marginClass navbar-heading">
                        Quest Shoe
                    </span>
                </div>


                <div className="flex items-center gap-14 navbar-menuComponents">
                    <Navitems/>
                </div>

                <div className="flex gap-4 items-center navbar-right-components">
                    {
                        !isAdminView && isAuth ?
                        <Fragment>
                        <butoton>Account</butoton>
                        <butoton>Cart</butoton>
                    </Fragment>: null
                    }
                    {
                        user.role == "admin" ? 
                        isAdminView ? <button className="marginClass">Client View</button> : <button className="marginClass">Admin View</button>
                        :
                        null
                    }
                    {
                        isAuth ? <button className="marginClass">Logout</button>:
                        <div className="flex gap-4">
                            <button className="marginClass">Login</button>
                            <button className="marginClass">Signup</button>
                            <div className="flex justify-center items-center three-dots" onClick={handleOnClick}><FaEllipsisV/></div>
                            
                        </div>
                    }
                    
                </div>
            </div>
            <div>
                {
                    togglemenu? <div className="flex items-center gap-14 ">
                    <Navitems/>
                </div>: null
                }
            </div>
            

        </nav>
    )
}