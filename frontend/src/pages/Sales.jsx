import Card from "../components/Card";
import axios from "axios";
import { useLoaderData } from "react-router-dom";


function Sales() {

  const {data} = useLoaderData();
 
  return (
    <div className='grid lg:grid-cols-3 gap-2'>
      {
        
        data.map(item => {
          return <Card key={item._id} item={item} />
        })
      }
    </div>
  );
}

export default Sales;

export const salesLoader = async () => {
  try {
    const responce = await axios.get("http://localhost:3000/api/v1/listing");
    return responce.data
  } catch (error) {
    console.log(error);
  }
 
};
