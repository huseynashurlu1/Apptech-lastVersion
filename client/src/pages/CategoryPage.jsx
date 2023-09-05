import axios from 'axios'
import { useState, useEffect } from 'react'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import '../assets/css/category.css';
import AlertBox from '../components/AlertBox'

const CategoryPage = () => {
  const { id } = useParams();
  const [data, setData] = useState([])
  const [brands, setBrands] = useState([])

  useEffect(() => {
    const getItems = async () => {
      await axios.get(`http://localhost:5000/api/product/all-products/category/${id}`)
      .then(res => {
        setData(res.data)
        const all_brands = [];
        res.data.forEach((product) => {
          all_brands.push(product.brandId);
        });
        setBrands(all_brands);
                
      })
      .catch(err => console.log(err))
    }

    getItems()
  }, [])

    const OptionHandler = (e) => {
        switch (e.target.value) {
          case "1":
            setData([...data].sort((a, b) => a.name.localeCompare(b.name)));
            break;
          case "2":
            setData([...data].sort((a, b) => b.name.localeCompare(a.name)));
            break;
          case "3":
              setData([...data].sort((a, b) => a.price - b.price));
              break;
          case "4":
              setData([...data].sort((a, b) => b.price - a.price));
              break;
          default:
              setData(data);
              break;
        }
      };

  if(data.length === 0) {
    return <AlertBox text='Bu kateqoriyaya uyğun məhsul yoxdur'/>
  }

  const BrandHandler = (e) => {
      const filtered = data.filter(item => item.brandId._id === e.target.value);
      setData(filtered)
  }

  return (
    <>
      {
        data ? <section id="Category">
        <div className="container">
          <div className="cat-top d-flex justify-content-between align-items-center">
              <h3>{data.length} məhsul</h3>
              <select onChange={OptionHandler}>
                <option value="">Sırala</option>
                <option value="1">A-Z</option>
                <option value="2">Z-A</option>
                <option value="3">Ucuzdan bahaya</option>
                <option value="4">Bahadan ucuza</option>
              </select>
          </div>
          <div className="row mt-4">
            <div className="col-lg-3">
              <div className="cat-filter-left">
                  <div className="for-brand">
                    <span>Brendə görə</span>
                    <select onChange={BrandHandler}>
                    <option value=''>------</option>
                    {
                        brands && brands.map(item => {
                          return(
                            <option value={item._id} key={item._id}>{item.name}</option>
                          )
                        })
                      }
                    </select>
                    <ul>
                      
                    </ul>
                  </div>
              </div>
            </div>
            <div className="col-lg-9">
            <div className="cat-filter">
            <div className="row gy-4">
              {
                data.map(item => {
                  return(
                    <div key={item._id} className="col-lg-4">
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
      </section> : 'is loading...'
      }
    </>
  )
}
export default CategoryPage