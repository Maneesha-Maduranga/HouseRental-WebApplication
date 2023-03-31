import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Modal from "../components/Modal";

import { useSelector } from 'react-redux'

function Main() {

  const {isOpen} = useSelector((store) => store.modal)

  return (
    <div className='flex flex-col justify-between h-screen'>
      <Navbar />

      <main className='container mx-auto px-3  pb-12'>
        {isOpen && <Modal/>}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Main;
