import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../assets/css/details.css'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { MdPayment } from 'react-icons/md'
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';
import 'react-toastify/dist/ReactToastify.css';
import ModalBox from '../components/ModalBox'


const DetailPage = () => {
    const { id } = useParams()
    const [data, setData] = useState()
    const [sameItems, setSameItems] = useState([])
    const dispatch = useDispatch();
    const [active, setActive] = useState(false);

    
    const handleShow = () => {
        setActive(true)
    }

    useEffect(() => {
        const getItem = async () => {
        await axios.get(`http://localhost:5000/api/product/all-products/${id}`)
        .then(res => {
            setData(res.data)
            getSameItems(res.data.categoryId);
        })
        .catch(err => console.log(err))
        }

        const getSameItems = async (id) => {
            await axios.get(`http://localhost:5000/api/product/all-products/category/${id}`)
            .then(res => {
                setSameItems(res.data)
            })
            .catch(err => console.log(err))
        }
    
        getItem()
    }, [])


  const handleAddToCart = () => {
    dispatch(addItem({ ...data,count: 1 }));
    toast.success('Məhsul səbətə əlavə olundu', {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
  };

    
  return (
    <>
        {
            data ? <section id='Details'>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5">
                        <div className="item-photo">
                            <img src={data.image} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="item-desc">
                            <h4>{data.name}</h4>
                            <p>{data.description}</p>
                            <ul>
                                <li>Şəhər: <span>Bakı</span></li>
                                <li>Çatdırılma: <span>{data.shipping ? 'Var' : 'Yoxdur'}</span></li>
                            </ul>
                            <p className='item-price'>{data.price} AZN</p>
                            <div className="add-to-cart">
                                <button onClick={handleShow}><MdPayment /> Sifariş et</button>
                                <button onClick={handleAddToCart}><HiOutlineShoppingCart /> Səbətə at</button>
                            </div>
                        </div>
                    </div>
                    <ToastContainer />
                    <ModalBox id={id} data={active}/>
                </div>

                <div className="familiars">
                    <h3>Oxşar məhsullar</h3>
                    <div className="row">
                        {
                            sameItems && sameItems.slice(0,4).map(item => {
                                return(
                                    <div key={item._id} className="col-lg-3">
                                        <Link to={`/details/${item._id}`}>
                                            <div className="item-box">
                                            <div className="item-image">
                                                <img className='img-fluid' src={item.image} alt="" />
                                            </div>
                                            <div className="item-content">
                                                <h5>{item.name}</h5>
                                                <p>{item.price} AZN</p>
                                                <button><HiOutlineShoppingCart /> Səbətə at</button>
                                            </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section> : 'is loading...'
        }
    </>
  )
}

export default DetailPage