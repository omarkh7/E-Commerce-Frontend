import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { FaTh, FaBars, FaCaretDown, FaSquare } from "react-icons/fa";

const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./login-admin";
};

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    // const BlogmenuItem = [
    //     {
    //         path: "/dashblogs",
    //         name: "Blogs",
    //         icon: <FaSquare />,
    //     },
    // ];

    const InfomenuItem = [
        {
            path: "/DashCategory",
            name: "Categories",
            icon: <FaTh />,
        },  
        
    

        {
            path: "/DashOrders",
            name: "Orders",
            icon: <FaTh />,
        },
        {
            path: "/DashPages",
            name: "Pages",
            icon: <FaTh />,
        },
        {
            path: "/DashProducts",
            name: "Products",
            icon: <FaTh />,
        },
        {
            path: "/DashUsers",
            name: "Users",
            icon: <FaTh />,
        },
        // {
        //     path: "/dashbio",
        //     name: "Bio",
        //     icon: <FaTh />,
        // },
        // {
        //     path: "/dashendorsements&compliments",
        //     name: "Endor&Compl",
        //     icon: <FaTh />,
        // },
        // {
        //     path: "/dashhighlights",
        //     name: "Highlights",
        //     icon: <FaTh />,
        // },
        // ,
        // {
        //     path: "/dashwnews&articles",
        //     name: "News & Articles",
        //     icon: <FaTh />,
        // },
        // {
        //     path: "/dashsocialmediaaccounts",
        //     name: "Social Accounts",
        //     icon: <FaTh />,
        // },
        // { path: "/dashtalks&workshops", name: "Talks & Workshops", icon: <FaTh /> },

        // { path: "/dashworkexperience", name: "Work Experience", icon: <FaTh /> },
        // {
        //     path: "/dashwriteupsprojects",
        //     name: "Writeups Projects",
        //     icon: <FaTh />,
        // },
    ];

    return (
        <div className="containerdash">
            <div style={{ width: isOpen ? "225px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
                        Admin
                    </h1>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>

                <NavLink
                    to="#"
                    className="link"
                    activeClassName="active"
                    onClick={toggleDropdown}
                >
                    <div className="icon">
                        <FaSquare />
                    </div>
                    <div
                        style={{ display: isOpen ? "block" : "none" }}
                        className="link_text"
                    >
                        Info Dash
                        <FaCaretDown
                            style={{
                                marginLeft: "5px",
                                transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                            }}
                        />
                    </div>



                </NavLink>
                {isDropdownOpen &&
                    InfomenuItem.map((item, index) => (
                        <NavLink
                            to={item.path}
                            key={index}
                            className="link dropdown_item"
                            activeClassName="active"
                        >
                            <div className="icon">{item.icon}</div>
                            <div
                                style={{ display: isOpen ? "block" : "none" }}
                                className="link_text"
                            >
                                {item.name}
                            </div>
                        </NavLink>
                    ))}

                <br></br>

                {/* {BlogmenuItem.map((item, index) => (
                    <NavLink
                        className="link"
                        to={item.path}
                        key={index}
                        activeClassName="active"
                    >
                        <div className="icon">{item.icon}</div>
                        <div
                            style={{ display: isOpen ? "block" : "none" }}
                            className="link_text"
                        >
                            {item.name}
                        </div>
                    </NavLink>
                ))} */}


                <button
                    style={{ display: isOpen ? "block" : "none" }}
                    className="logoutBTN"
                    onClick={logOut}
                >
                    Logout
                </button>
            </div>
            <div className="content">{children}</div>
        </div>
    );
};

export default Sidebar;