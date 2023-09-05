import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useParams } from 'react-router-dom';



const ProductDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState();
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        const getItem = async () => {
            await axios.get(`http://localhost:5000/api/product/all-products/${id}`)
            .then(res => {
                setData(res.data)
            })
            .catch(err => console.log(err))
            }
        getItem()
    })


  const checkHandler = () => {
    setIsChecked(!isChecked); 
  };

  return (
    <>
        {
            data &&  <div className="container">
            <h3 style={{fontFamily: "Regular", padding: "20px 0"}}>Yeni məhsul</h3>
            <div className='col-lg-6 mx-auto'>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Məhsulun adı</Form.Label>
                    <Form.Control type="text" defaultValue={data.name}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Qiyməti</Form.Label>
                    <Form.Control type="number" defaultValue={data.price}/>
                </Form.Group>
                <Form.Check
                    className='my-4'
                    inline
                    label="Endirimli məhsul"
                    name="shipping"
                    type='checkbox'
                    id=''
                    checked={isChecked}
                    onChange={checkHandler}
                />
                {
                    isChecked ? <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Endirimli qiyməti</Form.Label>
                    <Form.Control type="number"/>
                </Form.Group> : null
                }
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Təsviri</Form.Label>
                    <Form.Control defaultValue={data.description} as="textarea" rows={3}/>
                </Form.Group>
                <Form.Select disabled name="categoryID" className='mb-4' aria-label="Default select example">
                    <option>Kateqoriya</option>
                  
                    </Form.Select>
                <Form.Select disabled name="categoryID" className='mb-4' aria-label="Default select example">
                    <option>Brend</option>
                  
                </Form.Select>
                <Form.Check
                    inline
                    label="Çatdırılma"
                    name="shipping"
                    type='checkbox'
                    id=''
                    defaultChecked={data.shipping}
                />
                 
                 <button className='btn btn-warning text-white w-100 mt-4'>Redaktə et</button>
                
            </Form>
        </div>
            </div>
        }
    </>
  )
}

export default ProductDetails