import img from "/public/profile.jpg"
import { PiAddressBookTabs } from "react-icons/pi";
export default function StudentDashboard(){

    return(

        <div className="bg-[#ced4da]">

            <div className="px-32 py-24">
                <h1 className="font-semibold text-2xl text-[#004e89] mb-8"> Student Profile</h1>

                <div className="flex gap-10 ">
                    <div className="border py-5 px-8 bg-white rounded-xl w-1/4">
                        <img src={img} alt="img" className="h-28 w-28 rounded-full  mx-auto"/>
                        <p className="text-center font-semibold mt-2">Sadhyarshi Shukla</p>
                        <hr className="pr-5 mt-2"/>
                        <div className="mt-5">
                            <p className="font-semibold">Student ID: <span className="ml-1 font-normal"> CSM22001</span></p>
                            <p className="font-semibold">Semester  : <span className="ml-2 font-normal"> 3rd</span></p>
                            <p className="font-semibold">Batch : <span className="ml-3 font-normal"> 2021-2025</span></p>
                        </div>
                        
                    </div>

                    <div className="bg-white py-5 px-8 rounded-lg w-3/4">
                        <h1 className="mb-5 text-lg font-semibold text-center text-[#004e89]"> GENERAL INFORMATION</h1>
                        <div className="flex items-center justify-center">
                            <div className=" border w-1/2">
                                <p className="text-lg pl-4  mb-2">Email</p>
                                <hr/>
                                <p className="text-lg pl-4  mb-2">Course</p>
                                <hr/>
                                <p className="text-lg pl-4  mb-2">Branch</p>
                                <hr/>
                                <p className="text-lg pl-4  mb-2">Mobile</p>
                                <hr/>
                                <p className="text-lg pl-4   mb-2">Gender</p>
                                <hr/>
                                <p className="text-lg pl-4  mb-2">Institute Rno.</p>
                                <hr/>
                            </div>
                            <div className=" border w-1/2">
                                <p className="text-lg pl-4 mb-2">sadhyarshi@gmail.com</p>
                                <hr/>
                                <p className="text-lg pl-4 mb-2">BE</p>
                                <hr/>
                                <p className="text-lg pl-4 mb-2">CSE</p>
                                <hr/>
                                <p className="text-lg pl-4 mb-2">784122122</p>
                                <hr/>
                                <p className="text-lg pl-4 mb-2">Male</p>
                                <hr/>
                                <p className="text-lg pl-4 mb-2">TU/CSM/22/001</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="py-5">

                    <div className="flex items-center gap-2">
 
                        <div className="flex flex-col bg-white py-5 px-8 w-1/2 rounded-lg">

                            <h1 className="mb-5 text-lg font-semibold text-[#004e89]"> PERSONAL DETAILS</h1>
                            <div className="flex "> 
                                
                                <div className="mr-14">
                                    <p className="text-lg mb-2">Adhar No</p>
                                    <p className="text-lg mb-2">Date of Birth</p>
                                    <p className="text-lg mb-2">Address</p>
                                    <p className="text-lg mb-2">Nationality</p>
                                    <p className="text-lg mb-2">Domicil</p>
                                    <p className="text-lg mb-2">Blood Group</p>
                                </div>
                                <div>
                                    <p className="text-lg mb-2">Female</p>
                                    <p className="text-lg mb-2">01-01-2001</p>
                                    <p className="text-lg mb-2">Charlie Street, HP</p>
                                    <p className="text-lg mb-2">Indian</p>
                                    <p className="text-lg mb-2">2257897894</p>
                                    <p className="text-lg mb-2">A</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col bg-white py-5 px-8 w-1/2 rounded-lg">

                            <h1 className="mb-5 text-lg font-semibold text-[#004e89]"> PARENTS DETAILS</h1>

                            <div className="flex">

                                <div className="mr-14">
                                    <p className="text-lg mb-2">Father's Name</p>
                                    <p className="text-lg mb-2">Occupation</p>
                                    <p className="text-lg mb-2">Mobile</p>
                                    <p className="text-lg mb-2">Mother's Name</p>
                                    <p className="text-lg mb-2">Occupation</p>
                                    <p className="text-lg mb-2">Mobile</p>
                                </div>
                                <div>
                                    <p className="text-lg mb-2">Xnbxcn</p>
                                    <p className="text-lg mb-2">Buiness Man</p>
                                    <p className="text-lg mb-2">981145225</p>
                                    <p className="text-lg mb-2">Abcjnv</p>
                                    <p className="text-lg mb-2"> Teacher</p>
                                    <p className="text-lg mb-2">4512254878</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}