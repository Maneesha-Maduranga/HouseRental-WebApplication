import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


import { createListing } from "../../features/listing/listSlice";

function CreatListing() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: "",
      address: "",
      city: "",
      description: "",
      price: "",
      rooms: "",
      bedrooms: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required(),
      address: Yup.string().required(),
      city: Yup.string().required(),
      description: Yup.string().required().max(100),
      price: Yup.number().required(),
      rooms: Yup.number().required(),
      bedroom: Yup.number(),
    }),
    onSubmit: (values) => {
      dispatch(createListing(values))
      navigate('/dashboard')
    },
  });

  return (
    <form
      className='mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8'
      onSubmit={formik.handleSubmit}
    >
      <div className='mb-4'>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          name='title'
          type='text'
          placeholder='Enter Title'
          onChange={formik.handleChange}
         
         value={formik.values.title}
        />
        {formik.touched.title && formik.errors.title ? (
         <div><p className="text-red-500 text-xs italic">{formik.errors.title}</p></div>
       ) : null}
      </div>

      <div className='mb-4'>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          name='address'
          type='text'
          placeholder='Enter Address'
          onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.address}
        />
         {formik.touched.address && formik.errors.address ? (
         <div><p className="text-red-500 text-xs italic">{formik.errors.address}</p></div>
       ) : null}
      </div>

      <div className='mb-4'>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          name='city'
          type='text'
          placeholder='Enter City'
          onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.city}
        />
         {formik.touched.city && formik.errors.city ? (
         <div><p className="text-red-500 text-xs italic">{formik.errors.city}</p></div>
       ) : null}
      </div>

      <div className='mb-4'>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          name='description'
          type='text'
          placeholder='Enter Description'
          onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.description}
        />
         {formik.touched.description && formik.errors.description ? (
         <div><p className="text-red-500 text-xs italic">{formik.errors.description}</p></div>
       ) : null}
      </div>

      <div className='mb-4'>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          name='price'
          type='number'
          placeholder='Enter Price'
          onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.price}

        />
         {formik.touched.price && formik.errors.price ? (
         <div><p className="text-red-500 text-xs italic">{formik.errors.price}</p></div>
       ) : null}
      </div>

      <div className='mb-4'>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          name='rooms'
          type='number'
          placeholder='Enter Rooms'
          onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.rooms}
        />
         {formik.touched.rooms && formik.errors.rooms ? (
         <div><p className="text-red-500 text-xs italic">{formik.errors.rooms}</p></div>
       ) : null}
      </div>

      <div className='mb-4'>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          name='bedrooms'
          type='number'
          placeholder='Enter Bedrooms'
          onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.bedrooms}
        />
         {formik.touched.bedrooms && formik.errors.bedrooms ? (
         <div><p className="text-red-500 text-xs italic">{formik.errors.bedrooms}</p></div>
       ) : null}
      </div>

      <button className='btn btn-block' type='submit'>
        Create
      </button>
    </form>
  );
}

export default CreatListing;
