"use client"

import { Fragment, useEffect, useState } from "react";
import "./index.css"
import { adminNavOptions , navOptions , styles} from "@/app/utils";
import {FaEllipsisV } from "react-icons/fa";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {RiAccountCircleFill} from "react-icons/ri";
const isAuth = true;
const isAdminView = false;
const user={
    role:"admin"
};

export default function Navbar(props){

    const [togglemenu , setToggleMenu] = useState(false);
    function Navitems (){
        return (
            <div className="flex justify-between items-center w-full">
                <ul className="navItemsClass">
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
        <nav className=" w-full fixed top-0 left-0 border-b z-20 border-grey-200 ">
            <div className="bg-white max-w-screen-xl flex flex-wrap justify-between p-4 mx-auto nav_height">
                <div className="flex items-center cursor-pointer ">
                    <span className="place-content-center text-2xl font-semibold whitespace-nowrap fontss marginClass navbar-heading">
                        Quest Shoe
                    </span>
                </div>


                <div className="flex items-center gap-14 navbar-menuComponents">
                    <Navitems />
                </div>

                <div className="flex gap-1 items-center navbar-right-components">
                    {
                        !isAdminView && isAuth ?
                        <Fragment>
                        <butoton className=" cartButton"><RiAccountCircleFill/></butoton>
                        <butoton className=" buttonClass cartBtn">Account</butoton>
                        <butoton className=" cartBtn buttonClass">Cart</butoton>
                        <butoton className=" cartButton"><AiOutlineShoppingCart/> </butoton>
                    </Fragment>: null
                    }
                    {
                        user.role == "admin" ? 
                        isAdminView ? <button className="=buttonClass">Client View</button> : <button className="buttonClass adminButton">Admin View</button>
                        :
                        null
                    }
                    {
                        isAuth ? <div className="flex gap-1"><button className="buttonClass">Logout</button>
                                    <div className="flex justify-center items-center three-dots" onClick={handleOnClick}><FaEllipsisV/></div>
                        </div>:
                        <div className="flex gap-1">
                            <button className="buttonClass">Login</button>
                            <div className="flex justify-center items-center three-dots" onClick={handleOnClick}><FaEllipsisV/></div>
                            
                        </div>
                    }
                    
                </div>
            </div>
            <div className="bg-white pl-5">
                {
                    togglemenu? <div className="flex items-center gap-14 ">
                    <Navitems />
                </div>: null
                }
                
            </div>
            
            

        </nav>
       
    )
}