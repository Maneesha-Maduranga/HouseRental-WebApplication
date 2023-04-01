import { useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import { useEffect } from "react";


import { useSelector, useDispatch } from 'react-redux';
import { loginUser, reset} from '../features/user/userSlice';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {isSucess} = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  useEffect(()=>{
    if(isSucess){
      navigate('/dashboard')
    }
    dispatch(reset())
  },[isSucess,navigate])


  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password
    }
    dispatch(loginUser(userData))

  }

  return (
    <>
      <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-lg'>
          <h1 className='text-center text-2xl font-bold  sm:text-3xl'>
            Welcome back
          </h1>

          <form
            onSubmit={handleSubmit}
            className='mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8'
          >
            <div>
              <label className='sr-only'>Email</label>

              <div className='relative'>
                <input
                  type='email'
                  className='w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm'
                  placeholder='Enter email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className='sr-only'>Password</label>

              <div className='relative'>
                <input
                  type='password'
                  className='w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm'
                  placeholder='Enter password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button className='btn btn-block' type="submit">Sign In</button>

            <p className='text-center text-sm text-gray-500'>
              <Link to='/register'> No account? </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
