import { Link, useRouteError } from "react-router-dom";

function Error() {
  let error = useRouteError();
  
  return (
    <>
      <div className='grid h-screen px-4 bg-white place-content-center'>
        <div className='text-center'>
          <h1 className='mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Uh-oh!
          </h1>
          <p className='mt-4 text-gray-500'>Try searching again, or return home to start from the beginning.</p>
          <p className='mt-4 text-gray-500'>{error.status}</p>
          <p className='mt-4 text-gray-800'>{error.statusText}</p>
          <Link
            to='/'
            className='inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring'
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </>
  );
}

export default Error;
