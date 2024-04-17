
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Roots = () => {
    return (
        <div>
           <div className='mb-20'>
           <Navbar></Navbar>
           
           </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;