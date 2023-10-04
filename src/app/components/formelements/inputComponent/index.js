


export default function InputComponent({label ,placeholder ,value, type , onChange}){
    return(
        <div>
            <p className="pt-0 pb-0 pr-2 pl-2 text-grey-600 font-medium -mt-3 mr-0 ml-2 mb-0" >{label}</p>
            <input 
            placeholder={placeholder}
            value={value}
            type={type || "text"}
            onChange={onChange}
            className="border placeholder-grey-400 w-full"
            />
        </div>
    )
}
