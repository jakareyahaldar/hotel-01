export default function CheckIn(){
    return (
        <section className="h-dvh">
             <div className="flex flex-col justify-center items-center pt-50">
                <h2 className="text-4xl">Check In</h2>
                <p className="text-lg text-cyan-700">Check in your room by fill your all information. and confrom your order.</p>
             </div>
             <form className="w-[600px] m-auto mt-20">
                <div className="grid grid-cols-2">
                    <Input type="name" placeholder="First Name: " />
                    <Input type="name" placeholder="Last Name: " />
                    <Input type="email" placeholder="Email: " />
                    <Input type="phone" placeholder="Phone:" />
                    <Input type="textarea" placeholder="Special Requests" />
                </div>
                <button className="w-full py-3 bg-amber-600 font-bold text-lg hover:bg-amber-400 transition">Confrom Room</button>
             </form>
        </section>
    )
}



function Input({type,placeholder,name}){
    return(
        <div className={`flex flex-col p-5 ${type==="textarea"?"col-span-2":""}`}>
            <label>{placeholder}</label>
            {
                type === "textarea" ? <textarea className="outline-0 border-b-2 border-black " rows={3} name={name}></textarea> : <input className="outline-0 border-b-2 border-black" type={type} name={name} />
            }
        </div>
    )
}