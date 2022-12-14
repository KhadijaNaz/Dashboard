import React,{ Children } from 'react';
import {useState} from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';
import { FaTh, FaBars } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import CIcon from '@coreui/icons-react'
import {
  cilPuzzle
} from '@coreui/icons'

const Sidebar = ({children}) => {
    const[isOpen,setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const menuItem=[
        {
         path: "/dashboard",
         name: "Dashboard",
         icon: <FaTh/>
        },
        {
            path:"/passwords",
            name:"Passwords",  
        },
       {
        path:"/personalinfo",
        name:"Personal Info",
       },
       {
        path:"/categories/securenotes",
        name:"Secure Notes",
       },
       {
        path:"/categories/creditcard",
        name:"Credit Card",
       },
        {
            path: "/folders",
            name: "Folders",

           },
        {
         path: "/databreachmonitoring",
         name: "Data Breach",
        },
        {
         path: "/darkwebmonitoring",
         name: "Darkweb",
        },
        ]
    return (

        

       <div className='container'>
        <div style={{width: isOpen ? "250px" : "80px" }} className='sidebar'>
            <div className='top_section'>
                <h1 style={{display: isOpen ? "block" : "none" }}className='Logo'> LOGO </h1>
                <div style={{marginLeft: isOpen ? "50px" : "0.5px" }}className='bars'>
                <div style={{marginLeft: isOpen ? "block" : "none" }}className='link'>
                   <FaBars onClick={toggle} />
                    </div>
                </div>

            </div>
            {
                 menuItem.map((item,index)=>(
                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                       <div className="icon">{item.icon}</div> 
                       <div style={{display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                       
                    </NavLink>
                 ))
            }
                
        </div>
         <main>{children}</main>
       </div>
    );
};

export default Sidebar;
