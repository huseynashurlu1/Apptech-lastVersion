import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Messages = () => {
    const [data, setData] = useState([])

    useEffect(() => {
            const getMessages = async () => {
                await axios.get('http://167.172.105.171:5000/api/contact/messages')
                .then(res => setData(res.data))
                .catch(err => console.log(err))
            }
            getMessages()
    }, [])

    const DeleteHandler = async (id) => {
        try {
            const response = await axios.delete(`http://167.172.105.171:5000/api/contact/${id}`)
            setData(prevData => prevData.filter(item => item._id !== id));
            toast.error('Mesaj silindi', {
                position: "bottom-right",
                autoClose: 1200,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } catch (error) {
            console.log(error)
        } 
      }

  return (
    <div>
           <table className='table table-bordered'>
            <thead>
                <tr>
                <th>Ad</th>
                <th>Email</th>
                <th>Məzmunu</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    data && data.map(item => {
                        return(
                            <tr style={{verticalAlign: "baseline", fontSize: "13px"}} key={item._id}>
                                           <td>{item.fullname}</td>
                                           <td>{item.email}</td>
                                           <td>{item.subject}</td>
                                           <td>
                                            <button className='btn btn-danger' onClick={() => DeleteHandler(item._id)}>Delete</button>
                                           </td>
                                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
            <ToastContainer />
    </div>
  )
}

export default Messages
