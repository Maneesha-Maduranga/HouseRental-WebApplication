import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../features/modal/modalSlice";

import { logoutUser, reset } from "../features/user/userSlice";

import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isSucess } = useSelector((store) => store.user);
  const userName = localStorage.getItem("userName");

  useEffect(() => {
    if (isSucess) {
      navigate("/");
    }
    dispatch(reset());
  }, [isSucess, logoutUser]);

  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <Link path='/'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
          </Link>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
          >
            {userName ? (
              <>
                <li>
                  <Link to='#'>Profile</Link>
                </li>
                <li>
                  <Link to='#'>My Listing</Link>
                </li>
                <li>
                  <Link to='#'>Create Listing</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to='login'>Login</Link>
                </li>
                <li>
                  <Link to='listing'>Listing</Link>
                </li>
                <li>
                  <Link to='contact'>Contact Us</Link>
                </li>
                <li>
                  <Link to='about'>About</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link className='btn btn-ghost normal-case text-xl' to='/'>
          DreamHomes
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          {userName ? (
            <>
              <li>
                <Link to='#'>Profile</Link>
              </li>
              <li>
                <Link to='#'>My Listing</Link>
              </li>
              <li>
                <Link to='#'>Create Listing</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to='login'>Login</Link>
              </li>
              <li>
                <Link to='listing'>Listing</Link>
              </li>
              <li>
                <Link to='contact'>Contact Us</Link>
              </li>
              <li>
                <Link to='about'>About</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      {userName ? (
        <div className='navbar-end '>
          <button className='btn' onClick={() => dispatch(logoutUser())}>
            Log Out
          </button>
        </div>
      ) : (
        <div className='navbar-end '>
          <button className='btn' onClick={() => dispatch(openModal())}>
            Get started
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
