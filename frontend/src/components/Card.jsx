import { Link } from "react-router-dom";

//Icons
import { House, Night } from "../assets/icons";

function Card({ item }) {
  return (
    <>
      <Link
        to={item._id}
        className='block rounded-lg p-4 shadow-sm shadow-indigo-100'
      >
        <img
          alt='Home'
          src='https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          className='h-56 w-full rounded-md object-cover'
        />

        <div className='mt-2'>
          <div>
            <div>
              <dt className='sr-only'>Price</dt>

              <dd className='text-sm text-gray-500'>Rs.{item.price}</dd>
            </div>

            <div>
              <dt className='sr-only'>Address</dt>

              <dd className='font-medium'>{item.address}</dd>
            </div>
          </div>

          <div className='mt-6 flex items-center gap-8 text-xs'>
            <div className='sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2'>
              <House />
              <div className='mt-1.5 sm:mt-0'>
                <p className='text-gray-500'>Room</p>

                <p className='font-medium'>{item.rooms} rooms</p>
              </div>
            </div>

            <div className='sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2'>
              <Night />

              <div className='mt-1.5 sm:mt-0'>
                <p className='text-gray-500'>Bedroom</p>

                <p className='font-medium'>{item.bedroom} rooms</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Card;
