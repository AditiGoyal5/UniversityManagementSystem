import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/login', {
        fullName,
        password,
      });

      console.log(response.data);
      localStorage.setItem('token', response.data); 
      navigate('/'); 
    } catch (error) {
      if (error.response) {
       
        setError(error.response.data.message || 'Invalid credentials');
      } else if (error.request) {
        
        setError('No response from the server. Please try again.');
      } else {
        
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-1/2 p-6">
          <div className="flex items-center justify-center h-full">
            <div>
              <img src="https://img.freepik.com/free-vector/young-students-walking-front-university-college-building-flat-vector-illustration-cartoon-people-relaxing-sitting-grass-campus_74855-8747.jpg?t=st=1725604022~exp=1725607622~hmac=1ba44be263ef31b3b1b24bef24b57e91ca2f02ed5fea6c829504bec680e27efa&w=1060" alt="Illustration" />
            </div>
          </div>
        </div>

        <div className="w-1/2 p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-700 tracking-wider">LOGIN</h2>
            <p className="text-lg text-gray-600 mt-8">Welcome to Tezpur University</p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="username">
                Student ID
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg"
                type="text"
                id="username"
                placeholder="David Brooks"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="password">
                Password
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg"
                type="password"
                id="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            <div className="mb-4 flex items-center justify-between">
              <a href="#" className="text-sm text-gray-600 hover:underline">Forgot password?</a>
            </div>

            <div className="mb-4">
              <button type="submit" className="w-full bg-gray-800 text-white py-2 rounded-lg">
                Login
              </button>
            </div>

            {/* <div className="flex items-center justify-center">
              <button className="flex items-center justify-center w-full py-2 text-gray-700 border rounded-lg">
                <FaGoogle className="w-6 h-4 mr-2" />
                Sign in with Google
              </button>
            </div>

            <div className="mt-4 text-center">
              <Link to="/signup" className="text-sm text-gray-600 hover:underline">New to Trippy? Create Account</Link>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
