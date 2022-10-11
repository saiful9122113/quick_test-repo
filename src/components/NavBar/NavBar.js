
import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon,XMarkIcon} from '@heroicons/react/24/solid';

const NavBar = () => {
    const [open,setOpen]=useState(false);
    const routes=[
        {id:1, name:'Home',path:'/home'},
        {id:2, name:'Satistics',path:'/statistics'},
        {id:3, name:'Blog',path:'/blog'}
    ]
    return (
        <nav className='bg-purple-200 w-full'>
            <div onClick={()=>setOpen(!open)} className="h-6 w-6 md:hidden">
            {
                open ? <XMarkIcon/> : <Bars3Icon/>
                // open ? <XMarkIcon/> : <Bars3Icon/>
            }
            </div>
            
            <div className='md:flex content-end'>
            <h1>Quick Test</h1>
            <ul className={`bg-purple-200 md:flex justify-center w-full md:static absolute duration-500 ease-in ${open ? 'top-6' : 'top-[-120px]'}`}>
                {
                    routes.map(route=><Link key={route.id} route={route}></Link>)
                }
            </ul>
            </div>
        </nav>
    );
};

export default NavBar;