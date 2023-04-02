import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { registerUser,reset } from "../features/user/userSlice";

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isSucess } = useSelector((store) => store.user);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, settelephone] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");

  const userData = {
    name,
    email,
    telephone,
    passwordOne,
  };
  useEffect(() => {
    if (isSucess) {
      navigate('/login')
    }
    dispatch(reset())
  }, [isSucess, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(registerUser(userData));
  };

  return (
    <>
      <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-lg text-center'>
          <h1 className='text-2xl font-bold sm:text-3xl'>Register</h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className='mx-auto mt-8 mb-0 max-w-md space-y-4'
        >
          <div>
            <label className='sr-only'>User Name</label>

            <div className='relative'>
              <input
                type='text'
                className='w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm'
                placeholder='Enter User Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
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
            <label className='sr-only'>Mobile Number</label>

            <div className='relative'>
              <input
                type='text'
                className='w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm'
                placeholder='Enter Mobile Number'
                value={telephone}
                onChange={(e) => settelephone(e.target.value)}
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
                value={passwordOne}
                onChange={(e) => setPasswordOne(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label className='sr-only'>Confirm Password</label>

            <div className='relative'>
              <input
                type='password'
                className='w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm'
                placeholder='Confirm password'
                value={passwordTwo}
                onChange={(e) => setPasswordTwo(e.target.value)}
              />
            </div>
          </div>
          <button
            className='space-x-4   btn btn-outline btn-info btn-block'
            type='submit'
          >
            Create Account
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
