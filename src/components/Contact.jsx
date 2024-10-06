import {CONTACT} from "../constants";

const Contact = () => {
  return (
    <div id="contacts" className=" text-white bg-gradient-to-b from-red-900 to-black py-20">
        <h1 className="my-10 text-center text-wrap text-2xl">Contact Us</h1>
        <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#" className="border-b">{CONTACT.email}</a>
        </div>  
    </div>
  )
}

export default Contact