import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn, MdOutlineMailOutline } from "react-icons/md";
import img from "/public/contactUs.jpg";

export default function Contact() {
    return (
        <div className="flex flex-col mt-16">
          
            <div className="h-[35rem]">
                <img src={img} alt="Contact Us" className="w-full h-full object-cover" />
            </div>

            <div className="flex gap-10">
            <div className="p-8 border">
                <h1 className="text-center text-2xl font-semibold">HEAD OF THE DEPARTMENT</h1>
                <p className="text-center text-lg mt-2">Prof. Sarat Saharia</p>
                <p className="mt-4">Department of Computer Science and Engineering, School of Engineering</p>

                <div className="mt-4 ">
                    <div className="flex items-center mt-2">
                        <FaPhoneAlt size={20} className="text-blue-500  mr-2" />
                        <p>03712-275105</p>
                    </div>
                    <div className="flex items-center mt-2">
                        <MdLocationOn className="text-red-500 text-sm mr-2" />
                        <p>Napaam, Assam, India - 784028</p>
                    </div>
                    <div className="flex items-center mt-2">
                        <MdOutlineMailOutline className="text-green-500 text-sm mr-2" />
                        <p>sarat@tezu.ernet.in</p>
                    </div>
                </div>
            </div>
            <div className="p-8 border">
                <h1 className="text-center text-2xl font-semibold">HEAD OF THE DEPARTMENT</h1>
                <p className="text-center text-lg mt-2">Prof. Sarat Saharia</p>
                <p className="mt-4">Department of Computer Science and Engineering, School of Engineering</p>

                <div className="mt-4">
                    <div className="flex items-center mt-2">
                        <FaPhoneAlt size={20} className="mr-2" />
                        <p>03712-275105</p>
                    </div>
                    <div className="flex items-center mt-2">
                        <MdLocationOn className="text-red-500 text-sm mr-2" />
                        <p>Napaam, Assam, India - 784028</p>
                    </div>
                    <div className="flex items-center mt-2">
                        <MdOutlineMailOutline className="text-green-500 text-sm mr-2" />
                        <p>sarat@tezu.ernet.in</p>
                    </div>
                </div>
            </div>
            <div className="p-8 border">
                <h1 className="text-center text-2xl font-semibold">HEAD OF THE DEPARTMENT</h1>
                <p className="text-center text-lg mt-2">Prof. Sarat Saharia</p>
                <p className="mt-4">Department of Computer Science and Engineering, School of Engineering</p>

                <div className="mt-4">
                    <div className="flex items-center mt-2">
                        <FaPhoneAlt size={20} className="text-blue-500  mr-2" />
                        <p>03712-275105</p>
                    </div>
                    <div className="flex items-center mt-2">
                        <MdLocationOn className="text-red-500 text-sm mr-2" />
                        <p>Napaam, Assam, India - 784028</p>
                    </div>
                    <div className="flex items-center mt-2">
                        <MdOutlineMailOutline className="text-green-500 text-sm mr-2" />
                        <p>sarat@tezu.ernet.in</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}
