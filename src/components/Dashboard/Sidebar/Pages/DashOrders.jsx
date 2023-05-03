import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Pages.css";
import Sidebar from "../Sidebar";

function DashOrders() {
    const form = useRef();
    const [allOrders, setAllOrders] = useState([]);
    const [selectedInfo, setSelectedInfo] = useState({});
    const [isUpdateMode, setIsUpdateMode] = useState(false);


    const [newInfo, setNewInfo] = useState({
        status: false,
        payment_status: false,


    });
    async function fetchData() {
        try {
            // Retrieve the token from local storage
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NGFhMzgyNGU3Y2Y4N2IwZjI1MzEzYyIsImlhdCI6MTY4MjYxNTI3MCwiZXhwIjoxNjgyNjE3MDcwfQ.-1dRJ8e1gzPDScwE0WSdtKrXi8IvmPdQF53JOrbbrOk'

            // Set the authorization header for Axios
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            // Make the GET request
            const response = await axios.get('http://localhost:8000/api/authorized/orders');

            // Set the items in state
            setAllOrders(response.data.orders);
            console.log("getall", response.data.orders)
        } catch (error) {
            console.error("what", error)
        }
    }


    useEffect(() => {
        fetchData();
    }, []);

    // console.log('sida', allOrders.map())

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8000/api/authorized/orders/${id}`);
        toast.success("Deleted Successfully", 2000);
        await fetchData();
    };



    const handleUpdate = (info) => {
        setSelectedInfo(info);
        setIsUpdateMode(true);
    };




    const updateUser = async () => {
        const formData = new FormData();
        formData.append("status", selectedInfo.status.toString());
        formData.append("payment_status", selectedInfo.payment_status.toString());
        // console.log("UPDATE", isUpdateMode)

        await axios.put(
            `http://localhost:8000/api/authorized/orders/${selectedInfo._id}`,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
        toast.success("Updated Successfully", 2000);
        setIsUpdateMode(false);
        fetchData();
    };
    return (
        <div className="compflex">
            <Sidebar />
            <div className="container-info">


                {isUpdateMode && (
                    <div className="container-info">
                        <input
                            className="inputadd"
                            type="checkbox"
                            value={selectedInfo.status}
                            onChange={(e) =>
                                setSelectedInfo({ ...selectedInfo, status: e.target.checked })
                            }
                        />
                        <input
                            className="inputadd"
                            type="checkbox"
                            value={selectedInfo.payment_status}
                            onChange={(e) =>
                                setSelectedInfo({ ...selectedInfo, payment_status: e.target.checked })
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
                                <th scope="col">quantity</th>
                                <th scope="col">Order Status</th>
                                <th scope="col">Payment Status</th>
                                <th scope="col">Ordered At</th>
                                <th scope="col">Color</th>
                                <th scope="col">size</th>
                                <th scope="col">FullName</th>
                                <th scope="col">phoneNumber</th>
                                <th scope="col">countInStock</th>
                                <th scope="col">name</th>
                                <th scope="col">image</th>
                                <th scope="col">images</th>
                                <th scope="col">Total Price</th>

                            </tr>
                        </thead>
                        <tbody>
                            {allOrders
                                .map((info, index) => (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{info.cart.map((info) => (info.quantity)
                                        )}</td>
                                        <td>{info.status ? 'Delivered' : 'pending'}</td>
                                        <td>{info.payment_status ? 'Paid' : 'pending'}</td>
                                        <td>{info.createdAt}</td>
                                        <td>{info.cart.map((info) => (info.color)
                                        )}</td>
                                        <td>{info.cart.map((info, index) => (<p>
                                            Product {index}: {info.size}
                                        </p>))} </td>
                                        <td>{info.user_id.fullName}</td>
                                        <td>{info.user_id.phoneNumber}</td>
                                        <td>{info.cart.map((info) => (info.product_id.countInStock)
                                        )}</td>
                                        <td>{info.cart.map((info) => (info.product_id.name)
                                        )}</td>
                                        <td>{info.cart.map((info) => (info.product_id.image)
                                        )}</td>
                                        <td>{info.cart.map((info) => (info.product_id.images)
                                        )}</td>
                                        <td>{info.total_price}</td>
                                        <td>
                                            <button
                                                className="buttonedit"
                                                onClick={() => handleUpdate(info)}
                                            >
                                                Edit
                                            </button>
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

export default DashOrders;