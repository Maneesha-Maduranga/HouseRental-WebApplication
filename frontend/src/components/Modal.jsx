import { Link } from "react-router-dom";
import { Close } from "../assets/icons";

//Redux
import {useDispatch } from 'react-redux'
import { closeModal,openModal } from '../features/modal/modalSlice'

function Modal() {

  const dispatch = useDispatch();


  return (
    <div className='flex justify-center px-4'>
      <div className='card w-96 bg-base-100 shadow-xl'>
        <div className='card-body'>
        
          <div className='card-actions justify-end'>
            <button className='btn btn-square btn-sm' onClick={() => dispatch(closeModal())}>
              <Close />
            </button>
          </div>

          <h2 className='card-title justify-center'>Register As</h2>
          <div className='card-actions justify-center'>
            <Link to='/register' className='btn btn-info w-32'>
              Publisher
            </Link>
            <Link to='#' className='btn btn-info w-32'>
              User
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
