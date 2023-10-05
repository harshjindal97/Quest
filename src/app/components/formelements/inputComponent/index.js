


export default function InputComponent({label ,placeholder ,value, type , onChange}){
    return(
        <div>
            <p className="pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-slate-800 bg-white" >{label}</p>
            <input 
            placeholder={placeholder}
            value={value}
            type={type || "text"}
            onChange={onChange}
            className="border placeholder-grey-400 w-full focus:outline-none focus:border-black p-3 small:p-2  text-base small:text-1xl bg-white border-grey-400 "
            />
        </div>
    )
}
