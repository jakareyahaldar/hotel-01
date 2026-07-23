import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageHeaderWithImage from "../components/PageHeaderWithImage";
import { faMailBulk, faMessage } from "@fortawesome/free-solid-svg-icons";
import LocationOnMap from "../components/LocationOnMap";

export default function Contact(){
    return(
        <section>
            <PageHeaderWithImage heading="Contact us" subHeading="Hear you can contact us." />

            <div className="grid md:grid-cols-2 px-20 gap-10 md:px-52 lg:px-96 py-20">
                <div className="text-2xl">
                    <FontAwesomeIcon className="text-5xl" icon={faMailBulk} />
                    <h4 className="text-3xl font-bold mb-2">For communication and report an issue,<br/> Report us. via email.</h4>
                    <p>hotel@gmail.com</p>
                    <p className="text-xl opacity-65 mt-2">Or messsage from the form</p>
                </div>
                <form>
                    <h2 className="text-2xl font-bold mb-8">Contact</h2>
                    
                    <div className="grid grid-cols-2 gap-8">
                        <div className="flex flex-col gap-1">
                            <label>First Name</label>
                            <input type="name" className="border-b-2 outline-0"  />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label>Last Name</label>
                            <input type="name" className="border-b-2 outline-0" />
                        </div>
                        <div className="flex flex-col col-span-2 gap-1">
                            <label>Email</label>
                            <input type="email" className="border-b-2 outline-0" />
                        </div>
                        <div className="flex flex-col col-span-2 gap-1">
                            <label>Write your messsage</label>
                            <textarea type="text" rows={5} className="border-b-2 outline-0"></textarea>
                        </div>
                    </div>

                    <button className="px-4 py-2 rounded-xl bg-blue-700 text-white mt-8">Submit</button>

                </form>
            </div>

            <LocationOnMap />

        </section>
    )
}