import axios from 'axios';
import './Pages.css'
import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Pages.css";
import Sidebar from "../Sidebar";





function YourComponent() {
    const form = useRef();
    const [allUsers, setAllUsers] = useState([]);
    const [selectedInfo, setSelectedInfo] = useState({});
    const [isUpdateMode, setIsUpdateMode] = useState(false);

    const [newInfo, setNewInfo] = useState({
        fullName: "",
        email: "",
        password: "",
        phoneNumber: "",
        location: "",
        role: "",

    });
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);




    async function fetchData() {
        try {
            // Retrieve the token from local storage
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NGE5NTRjOTU5OTRhM2Q2MWEwNWJlOSIsImlhdCI6MTY4MjYxMTI4MywiZXhwIjoxNjgyNjEzMDgzfQ.QPq8g25pRVDt91P12qvirDYmd4z_3sp3RoNHrFT3kIk'

            // Set the authorization header for Axios
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            // Make the GET request
            const response = await axios.get('http://localhost:8000/api/users/getall');

            // Set the items in state
            setItems(response.data.user);
            console.log(response.data)
        } catch (error) {
            console.error("what", error)
        }
    }

<<<<<<< HEAD
    const handleAdd = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("fullName", newInfo.fullName);
        formData.append("email", newInfo.email);
        formData.append("password", newInfo.password);
        formData.append("phoneNumber", newInfo.phoneNumber);
        formData.append("location", newInfo.location);
        try {
            const response = await axios.post(
                "http://localhost:8000/api/users/register", formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            // console.log(response)


            toast.success("Added Successfully", 2000);
            fetchData();
            setNewInfo({
                fullName: '',
                email: '',
                password: '',
                phoneNumber: '',
                location: '',

            });
        } catch (error) {
            console.error(error);
        }
    };
=======
    // const handleAdd = async (e) => {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append("fullName", newInfo.fullName);
    //     formData.append("email", newInfo.email);
    //     formData.append("password", newInfo.password);
    //     formData.append("phoneNumber", newInfo.phoneNumber);
    //     formData.append("location", newInfo.location);
    //     try {
    //         const response = await axios.post(
    //             "http://localhost:8000/api/users/register", formData,
    //             {
    //                 headers: {
    //                     'Content-Type': 'application/x-www-form-urlencoded'
    //                 },
    //             }
    //         );
    //         console.log("RESPONSE",response)


    //         toast.success("Added Successfully", 2000);
    //         fetchData();
    //         setNewInfo({
    //             fullName: '',
    //             email: '',
    //             password: '',
    //             phoneNumber: '',
    //             location: '',

    //         });
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };
>>>>>>> master


    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8000/api/users/delete/${id}`);
        toast.success("Deleted Successfully", 2000);
        await fetchData();
    };



    return (
        <div className="compflex">
            <Sidebar />
            <div className="container-info">
                <div>
<<<<<<< HEAD
                    <form
=======
                    {/* <form
>>>>>>> master
                        ref={selectedInfo}
                        className="contact-formm"
                        encType="multipart/form-data"
                    >
                        <input
                            className="inputadd"
                            type="text"
                            value={newInfo.fullName}
                            onChange={(e) =>
                                setNewInfo({ ...newInfo, fullName: e.target.value })
                            }
                            placeholder="Enter FullName"
                        />
                        <input
                            className="inputadd"
                            type="text"
                            value={newInfo.email}
                            onChange={(e) =>
                                setNewInfo({ ...newInfo, email: e.target.value })
                            }
                            placeholder="Enter Email"
                        /><input
                            className="inputadd"
                            type="text"
                            value={newInfo.password}
                            onChange={(e) =>
                                setNewInfo({ ...newInfo, password: e.target.value })
                            }
                            placeholder="Enter Password"
                        /><input
                            className="inputadd"
                            type="text"
                            value={newInfo.phoneNumber}
                            onChange={(e) =>
                                setNewInfo({ ...newInfo, phoneNumber: e.target.value })
                            }
                            placeholder="Enter PhoneNumber"
                        /><input
                            className="inputadd"
                            type="text"
                            value={newInfo.location}
                            onChange={(e) =>
                                setNewInfo({ ...newInfo, location: e.target.value })
                            }
                            placeholder="Enter Location"
<<<<<<< HEAD
                        />

                        <button className="buttonadd" onClick={handleAdd}>
                            Add
                        </button>
                    </form>
=======
                        /> */}

                        {/* <button className="buttonadd" onClick={handleAdd}>
                            Add
                        </button> */}
                    {/* </form> */}
>>>>>>> master
                </div>

                <div>
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">NB</th>
                                <th scope="col">FullName</th>
                                <th scope="col">Email</th>
<<<<<<< HEAD
                                <th scope="col">Password</th>
=======
                                {/* <th scope="col">Password</th> */}
>>>>>>> master
                                <th scope="col">PhoneNumber</th>
                                <th scope="col">Location</th>
                                <th scope="col">Role</th>

                            </tr>
                        </thead>
                        <tbody>
                            {items
                                .map((info, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{info.fullName}</td>
                                        <td>{info.email}</td>
<<<<<<< HEAD
                                        <td>{info.password}</td>
=======
                                        {/* <td>{info.password}</td> */}
>>>>>>> master
                                        <td>{info.phoneNumber}</td>
                                        <td>{info.location}</td>
                                        <td>{info.role}</td>
                                        <td>

                                            <button
                                                className="buttondelete"
                                                onClick={() => deleteUser(info._id)}>

                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
                <ToastContainer />
            </div>
        </div>

    );
}


export default YourComponent;





