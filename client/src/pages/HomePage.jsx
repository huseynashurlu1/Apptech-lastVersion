import '../assets/css/home.css'
import { LiaDotCircleSolid } from 'react-icons/lia'
import Category from '../components/Category/Category'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl';


const HomePage = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const getItems = async () => {
      await axios.get('http://localhost:5000/api/product/all-products')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
    }

    getItems()
  }, [])
 
  return (
    <section id="Home">
       <div className="container">
          <div className="CategorySlider">
            <div className="row">
              <div className="col-lg-3">
                <Category />
              </div>
              <div className="col-lg-9">
                <div className="slider">
                </div>
              </div>
            </div>
          </div>
          <div className="most-viewed">
            <div className="container">
              <div className="top">
                <h2>
                  <FormattedMessage id='Ən çox baxılanlar' defaultMessage='Ən çox baxılanlar'/>
                </h2>
              </div>
              <div className="bottom py-3">
              <div className="row">
                    {
                    data && data.map(item => {
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
          </div>

          <div className="most-viewed">
            <div className="container">
              <div className="top">
                  <h2>
                      <FormattedMessage id='Ən son əlavə olunanlar' defaultMessage='Ən son əlavə olunanlar'/>
                  </h2>
              </div>
              <div className="bottom py-3">
              <div className="row">
                    {
                    data && data.map(item => {
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
          </div>
      </div>
    </section>
  )
}
export default HomePage