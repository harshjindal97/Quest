

export default function SelectComponent ({label , value , onChange , options = []}){
    return(
        <div className="relative">
            <p className="pt-0 pb-0 pr-2 pl-2 text-grey-600 font-medium -mt-3 mr-0 ml-2 mb-0" >{label}</p>
            <select 
            value={value} 
            onChange={onChange}
            className="border placeholder-grey-400 w-full">
                {
                    options && options.length?
                    options.map((items)=> <option id={items.id} value={items.id}>{items.label}</option> ):
                    <option id="" value="">Select</option>
                }
            </select>
        </div>
    )
}