import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { Price, House, Night, User } from "../assets/icons";

function Detail() {
  const { data } = useLoaderData();

  return (
    <>
      <div className='card lg:card-side bg-base-100 shadow-xl'>
        <figure>
          <img
            alt='Home'
            src='https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            className='h-56 w-full rounded-md object-cover'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{data.title}</h2>
          <h3>{data.address}</h3>
          <h3>{data.city}</h3>
          <p>{data.description}</p>

          <div className='mt-6 flex items-center gap-8 text-xs'>
            <div className='sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2'>
            
              <Price/>
              <div className='mt-1.5 sm:mt-0'>
                <p className='text-gray-500'>Price</p>

                <p className='font-medium'>Rs:{data.price}</p>
              </div>
            </div>
            <div className='sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2'>
            
              <House/>
              <div className='mt-1.5 sm:mt-0'>
                <p className='text-gray-500'>Rooms</p>

                <p className='font-medium'>{data.rooms}</p>
              </div>
            </div>
            <div className='sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2'>
            
              <Night/>
              <div className='mt-1.5 sm:mt-0'>
                <p className='text-gray-500'>BedRooms</p>

                <p className='font-medium'>{data.bedroom}</p>
              </div>
            </div>
            <div className='sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2'>
            
              <User/>
              <div className='mt-1.5 sm:mt-0'>
                <p className='text-gray-500'>Publisher</p>

                <p className='font-medium'>{data.publisher}</p>
              </div>
            </div>
          </div>

          <div className='card-actions justify-end'>
            <button className='btn btn-outline btn-info'>Send enquiry</button>
          </div>
          
        </div>
      </div>
    </>
  );
}

export const detailLoader = async ({ params }) => {
  try {
    const { id } = params;
    const responce = await axios.get(
      "/api/v1/listing/" + id
    );
    return responce.data;
  } catch (error) {
    console.log(error);
  }
};

export default Detail;
