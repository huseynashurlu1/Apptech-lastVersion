import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';



const CreateItem = () => {
    const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [item, setItem] = useState({
    name: '',
    description: '',
    price: '',
    image: null,
    shipping: false,
    categoryId: '',
    brandId: '',
  });

  useEffect(() => {
    async function getCategories() {
      await axios.get('http://localhost:5000/api/category/all-categories').then((data) => setCategories(data.data));
    }
    async function getBrands() {
      await axios.get('http://localhost:5000/api/brand/all-brands').then((data) => setBrands(data.data));
    }
    getCategories();
    getBrands();
  }, []); 

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setItem({ ...item, image: imageFile });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(item);
      await axios.post('http://localhost:5000/api/product/add', item);
      alert('Məhsul əlavə edildi');
    } catch (error) {
      console.error('Xəta:', error);
    }
  };

  return (
    <div className="container">
        <h3 style={{fontFamily: "Regular", padding: "20px 0"}}>Yeni məhsul</h3>
        <div className='col-lg-6 mx-auto'>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Məhsulun adı</Form.Label>
                <Form.Control type="text" onChange={(e) => setItem({ ...item, name: e.target.value })} defaultValue={item.name}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Qiyməti</Form.Label>
                <Form.Control type="number" onChange={(e) => setItem({ ...item, price: e.target.value })} defaultValue={item.price}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Təsviri</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={(e) => setItem({ ...item, description: e.target.value })} defaultValue={item.description}/>
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Şəkli</Form.Label>
                <Form.Control onChange={handleImageChange} type="file" />
            </Form.Group>
            <Form.Select name="categoryID" className='mb-4' aria-label="Default select example" onChange={(e) => setItem({ ...item, categoryId: e.target.value })} value={item.categoryId}>
                <option>Kateqoriya</option>
                {
                    categories && categories.map(item => {
                        return(
                           <option key={item._id} value={item._id}>{item.name}</option>
                        )
                    })
                }
                </Form.Select>
            <Form.Select onChange={(e) => setItem({ ...item, brandId: e.target.value })} value={item.brandId} name="categoryID" className='mb-4' aria-label="Default select example">
                <option>Brend</option>
                {
                    brands && brands.map(item => {
                        return(
                           <option key={item._id} value={item._id}>{item.name}</option>
                        )
                    })
                }
                </Form.Select>
                <Form.Check
                    inline
                    label="Çatdırılma"
                    name="shipping"
                    type="checkbox"
                    id=""
                    checked={item.shipping}
                    onChange={(e) => setItem({ ...item, shipping: e.target.checked })}
                    />
                                
             <button type='submit' className='btn btn-success w-100 mt-4'>Əlavə et</button>
            
        </Form>
    </div>
    </div>
  )
}

export default CreateItem