import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Pages.css";
import Sidebar from "../Sidebar";

function DashCategory() {
    const form = useRef();
    const [allcategories, setAllCategories] = useState([]);
    const [infos, setUsers] = useState([]);
    const [selectedInfo, setSelectedInfo] = useState({});
    const [isUpdateMode, setIsUpdateMode] = useState(false);
    const [infoImage, setInfoImage] = useState(null);

    const [newInfo, setNewInfo] = useState({

        info_name: "",
        info_product_id: "",
    });

    const APIKEY = "http://localhost:8000/api/category/allcategories"

    const Categories = async () => {
        try {
            const res = await axios.get(APIKEY);
            setAllCategories(res.data.data)
            console.log("categoires", res.data.data)

        } catch (error) {
            console.log(error)
        }
    }





    useEffect(() => {
        Categories();
    }, []);

    const handleAdd = async () => {
        const formData = new FormData();
        formData.append("info_name", newInfo.info_name);
        formData.append("info_product_id", newInfo.info_product_id);

        await axios.post(`https://localhost:8000/category`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        toast.success("Added Successfully", 2000);
        loadUsers();
        setNewInfo({
            info_name: "",
            info_product_id: "",
            info_image: null,

        });
    };

    const loadUsers = async () => {
        const result = await axios.get("https://localhost:8000/category");
        console.log(result.data);
        setUsers(result.data);
    };

    const deleteUser = async (id) => {
        await axios.delete(`https://localhost:8000/category/${id}`);
        toast.success("Deleted Successfully", 2000);
        loadUsers();
    };

    const handleUpdate = (info) => {
        setSelectedInfo(info);
        setIsUpdateMode(true);
    };

    const updateUser = async () => {
        const formData = new FormData();
        formData.append("info_name", selectedInfo.info_name);
        formData.append("info_product_id", selectedInfo.info_product_id);

        await axios.put(
            `https://localhost:8000/category/${selectedInfo._id}`,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
        toast.success("Updated Successfully", 2000);
        loadUsers();
        setIsUpdateMode(false);
    };
    return (
        <div className="compflex">
            <Sidebar />
            <div className="container-info">
                <div>

                    <form
                        ref={selectedInfo}
                        className="contact-formm"
                        encType="multipart/form-data"
                    >
                        <input
                            className="inputadd"
                            type="text"
                            value={newInfo.info_name}
                            onChange={(e) =>
                                setNewInfo({ ...newInfo, info_name: e.target.value })
                            }
                            placeholder="Enter name"
                        />
                        <input
                            className="inputadd"
                            type="text"
                            value={newInfo.info_product_id}
                            onChange={(e) =>
                                setNewInfo({ ...newInfo, info_product_id: e.target.value })
                            }
                            placeholder="Enter product_id"
                        />



                        <button className="buttonadd" onClick={handleAdd}>
                            Add
                        </button>
                    </form>
                </div>

                {isUpdateMode && (
                    <div className="container-info">
                        <input
                            className="inputadd"
                            type="text"
                            value={selectedInfo.info_name}
                            onChange={(e) =>
                                setSelectedInfo({ ...selectedInfo, info_name: e.target.value })
                            }
                        />
                        <input
                            className="inputadd"
                            type="text"
                            value={selectedInfo.info_product_id}
                            onChange={(e) =>
                                setSelectedInfo({
                                    ...selectedInfo,
                                    info_product_id: e.target.value,
                                })
                            }
                        />



                        <div className="compflexbutton">
                            <button className="buttonadd" onClick={updateUser}>
                                Save
                            </button>
                            <button
                                className="buttonadd"
                                onClick={() => setIsUpdateMode(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">NB</th>
                                <th scope="col">Name</th>
                                <th scope="col">Image</th>

                            </tr>
                        </thead>
                        <tbody>
                            {allcategories

                                .map((info, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{info.name}</td>
                                        <td><img src={info.image} alt={info.name} /></td>



                                        <td>
                                            <button
                                                className="buttonedit"
                                                onClick={() => handleUpdate(info)}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="buttondelete"
                                                onClick={() => deleteUser(info._id)}
                                            >
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

export default DashCategory;