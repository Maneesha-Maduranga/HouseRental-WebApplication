import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Layout
import Main from "./layout/Main";
import SalesLayout from "./layout/SalesLayout";
import DashboardLayout from './layout/DashboardLayout'

//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Sales, { salesLoader } from "./pages/Sales";
import Error from "./pages/Error";
import Detail, { detailLoader } from "./pages/Detail";
import Register from "./pages/Regitser";
import Login from "./pages/Login";

import CreatListing from "./pages/user/CreateListing";
import MyListing,{listingLoader} from "./pages/user/MyListing"


import Dashboard,{dashboardLoader} from './pages/Dashboard';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Main />} errorElement={<Error />}>
      <Route index element={<Home />} />

      <Route path='listing' element={<SalesLayout />}>
        <Route index element={<Sales />} loader={salesLoader} />
        <Route path=':id' element={<Detail />} loader={detailLoader} />
      </Route>

      <Route path='dashboard' element={<DashboardLayout />}>
        <Route index element={<Dashboard/>} loader={dashboardLoader} />
        <Route path=":id" element={<MyListing />} loader={listingLoader} />
        <Route path="create" element={<CreatListing />} />
       

      </Route>
      
      <Route path="register" element={<Register/>} />
      <Route path="login" element={<Login />} />

      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  )
);

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
