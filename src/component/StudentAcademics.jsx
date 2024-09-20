import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function StudentAcademics(){

      return(
        <div className="mt-[64px]">
    <div className='flex gap-6'>
        {/* Sidebar */}
        <ul className="w-1/6 bg-[#004e89] h-fit  p-4 shadow-lg">
            <li className='border-b border-white py-3 px-4 text-white hover:bg-[#00345d] hover:rounded-md transition duration-300 ease-in-out'>
                <Link to="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="inline size-6 pr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
</svg>

                Assignments</Link>
            </li>
            <li className='border-b border-white py-3 px-4 text-white hover:bg-[#00345d] hover:rounded-md transition duration-300 ease-in-out'>
                <Link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 inline pr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.99 14.993l6-6m6 3.001c0 1.268-.63 2.39-1.593 3.069a3.746 3.746 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043 3.745 3.745 0 01-3.068 1.593c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 01-3.296-1.043 3.746 3.746 0 01-1.043-3.297 3.746 3.746 0 01-1.593-3.068c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 011.043-3.297 3.745 3.745 0 013.296-1.042 3.745 3.745 0 013.068-1.594c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.296 1.043 3.746 3.746 0 011.043 3.297 3.746 3.746 0 011.593 3.068z" />
                    </svg>
                    Marks
                </Link>
            </li>
            <li className='border-b border-white py-3 px-4 text-white hover:bg-[#00345d] hover:rounded-md transition duration-300 ease-in-out'>
                <Link to="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="inline pr-2 size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>

                Attendance</Link>
            </li>
            <li className='border-b border-white py-3 px-4 text-white hover:bg-[#00345d] hover:rounded-md transition duration-300 ease-in-out'>
                <Link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 inline pr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125" />
                    </svg>
                    Time Table
                </Link>
            </li>
            <li className='border-b border-white py-3 px-4 text-white hover:bg-[#00345d] hover:rounded-md transition duration-300 ease-in-out'>
                <Link to="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="inline pr-2 size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
</svg>

                Grade Card</Link>
            </li>
            <li className='py-3 px-4 text-white hover:bg-[#00345d] hover:rounded-md transition duration-300 ease-in-out'>
                <Link to="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 inline pr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
</svg>
Academic Calendar</Link>
            </li>
        </ul>

        {/* Cards Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full pr-2 py-5'>
            <div className='border rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300 ease-in-out'>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPV0S6QPMqXN7rCVsTPsQzKSWcb2mpBU6Z4Q&s" alt="Full Stack Developer" className="w-full h-40 object-cover rounded-lg" />
                </div>
                <div className='mt-4'>
                    <p className='font-semibold text-lg'>Full Stack Developer</p>
                    <button className='border border-blue-500 text-blue-500 rounded-lg py-1.5 px-4 mt-3 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out'>Enroll</button>
                </div>
            </div>
            <div className='border rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300 ease-in-out'>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPV0S6QPMqXN7rCVsTPsQzKSWcb2mpBU6Z4Q&s" alt="Full Stack Developer" className="w-full h-40 object-cover rounded-lg" />
                </div>
                <div className='mt-4'>
                    <p className='font-semibold text-lg'>Full Stack Developer</p>
                    <button className='border border-blue-500 text-blue-500 rounded-lg py-1.5 px-4 mt-3 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out'>Enroll</button>
                </div>
            </div>
            <div className='border rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300 ease-in-out'>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPV0S6QPMqXN7rCVsTPsQzKSWcb2mpBU6Z4Q&s" alt="Full Stack Developer" className="w-full h-40 object-cover rounded-lg" />
                </div>
                <div className='mt-4'>
                    <p className='font-semibold text-lg'>Full Stack Developer</p>
                    <button className='border border-blue-500 text-blue-500 rounded-lg py-1.5 px-4 mt-3 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out'>Enroll</button>
                </div>
            </div>
            <div className='border rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300 ease-in-out'>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPV0S6QPMqXN7rCVsTPsQzKSWcb2mpBU6Z4Q&s" alt="Full Stack Developer" className="w-full h-40 object-cover rounded-lg" />
                </div>
                <div className='mt-4'>
                    <p className='font-semibold text-lg'>Full Stack Developer</p>
                    <button className='border border-blue-500 text-blue-500 rounded-lg py-1.5 px-4 mt-3 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out'>Enroll</button>
                </div>
            </div>
        </div>
    </div>
</div>
        // part 2

  //       const [assignmentsTotal] = useState(5); // Total number of assignments
  //       const [assignmentsCompleted, setAssignmentsCompleted] = useState(3); // Completed assignments
  
  // const [quizScores] = useState([70, 85, 90]); // Quiz scores (in percentages)

  // // Calculate percentage progress for assignments
  // const assignmentProgress = (assignmentsCompleted / assignmentsTotal) * 100;

  // // Calculate average quiz score
  // const totalQuizScores = quizScores.reduce((acc, score) => acc + score, 0);
  // const averageQuizScore = totalQuizScores / quizScores.length;

  // // Overall progress (50% weightage for assignments, 50% for quizzes)
  // const overallProgress = (assignmentProgress * 0.5 + averageQuizScore * 0.5).toFixed(2);

  // return (
  //   <div className="p-6 bg-gray-50">
  //     <div className="bg-white p-4 shadow-lg rounded-lg max-w-md mx-auto">
  //       <h2 className="text-xl font-bold mb-4">Student Progress</h2>

  //       {/* Assignments Progress */}
  //       <div className="mb-4">
  //         <h3 className="font-semibold">Assignments Progress</h3>
  //         <p>Completed {assignmentsCompleted} of {assignmentsTotal} assignments</p>
  //         <div className="relative w-full bg-gray-200 rounded-full h-4">
  //           <div
  //             className="absolute top-0 left-0 h-4 bg-blue-500 rounded-full"
  //             style={{ width: `${assignmentProgress}%` }}
  //           ></div>
  //         </div>
  //         <p className="text-sm text-gray-500 mt-2">{assignmentProgress.toFixed(2)}% complete</p>
  //       </div>

  //       {/* Quiz Progress */}
  //       <div className="mb-4">
  //         <h3 className="font-semibold">Quiz Average Score</h3>
  //         <p>Average Score: {averageQuizScore.toFixed(2)}%</p>
  //         <div className="relative w-full bg-gray-200 rounded-full h-4">
  //           <div
  //             className="absolute top-0 left-0 h-4 bg-green-500 rounded-full"
  //             style={{ width: `${averageQuizScore}%` }}
  //           ></div>
  //         </div>
  //       </div>

  //       {/* Overall Progress */}
  //       <div>
  //         <h3 className="font-semibold">Overall Progress</h3>
  //         <div className="relative w-full bg-gray-200 rounded-full h-4">
  //           <div
  //             className="absolute top-0 left-0 h-4 bg-purple-500 rounded-full"
  //             style={{ width: `${overallProgress}%` }}
  //           ></div>
  //         </div>
  //         <p className="text-sm text-gray-500 mt-2">{overallProgress}% overall progress</p>
  //       </div>
  //     </div>
  //   </div>
  )

}