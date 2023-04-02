import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card"

function Dashboard() {

  const {data,listing} = useLoaderData();
  
  
  
  return(
    <div className='flex flex-col '>
      <div className=' bg-white shadow-lg w-64 place-self-center'>
        <div className='h-20 overflow-hidden rounded-t-lg bg-[#7dd3fc]'></div>
        <div className='mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 '>
          <img src='https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp' />
        </div>
        <div className='p-2'>
          <h4 className='mb-2 text-2xl font-semibold'>{data.name}</h4>
          <hr />
          <p className='mt-1'>
          {data.email}
          </p>
          <p className='mt-1'>
          {data.telephone}
          </p>
        </div>
      </div>
      <div className="divider">My Listing</div>
      <div className='grid lg:grid-cols-3 gap-2'>
     {listing && listing.map((item) => {
      return <Card key={item._id} item={item} />;
     })}
      
    </div>
    </div>
  );
 
}

export default Dashboard;

export const dashboardLoader = async () => {
  const resonce = await axios.get("/api/v1/auth/me");

  return resonce.data;
};
