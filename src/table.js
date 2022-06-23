import React, {useState} from 'react';
import json from "./studentdata";
import {Formik}from "formik";


const emptyData = {
    id:"",
    first: "",
    last: "",
    book:"",
    address: "",
    phoneNumber: "",
    email: ""
}


const Table = () => {
   
     const[input, setInput] = useState(json);
     const [data, setData] = useState(emptyData);

    const handleChange = ({ target: { name, value } }) => {

        setData({ ...data, [name]: value })

    };
    const deleteData = (id)=>{
        const newData = [...data];
        const index = data.findIndex((del) => del.id===id );
        newData.splice(index,1);
        
        setData(newData);   
    }
    const handleSubmit = (evt)=>{
        evt.preventDefault();

        const newData = {
             id: data.id,
            first : data.first,
            last : data.last,
            book: data.book,
            address: data.address,
            phoneNumber: data.phoneNumber,
            email: data.email,
          };
          const newDatas = [...input,newData];
          setInput(newDatas);
          setData(emptyData);

       
    };
    
  

    return (
        <div>
          
               <h3>Library Data</h3>
               <Formik>
               <form className="row g-3 needs-validation" novalidate onSubmit={handleSubmit}>
               <div className="col-md-1">
                    <label htmlfor="id" className="form-label">ID</label>
                    <input type="text" className="form-control"
                        name="id"
                        value={data.id}
                        onChange={handleChange}

                        required />


                </div>
                <div className="col-md-4">
                    <label htmlfor="first" className="form-label">First name</label>
                    <input type="text" className="form-control"
                        name="first"
                        value={data.first}
                        onChange={handleChange}

                        required />


                </div>
                
                <div className="col-md-4">
                    <label htmlfor="last" className="form-label">Last name</label>
                    <input type="text" className="form-control"
                       name="last"
                        value={data.last}
                        onChange={handleChange}
                        required />

                </div>
                <div className="col-md-4">
                    <label htmlfor="first" className="form-label">book name</label>
                    <input type="text" className="form-control"
                        name="book"
                        value={data.book}
                        onChange={handleChange}

                        required />


                </div>
                <div className="col-md-4">
                    <label htmlfor="email" className="form-label">Email</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" className="form-control" id="email" aria-describedby="inputGroupPrepend"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            required />

                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlfor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address"
                    name="address"
                        value={data.address}
                        onChange={handleChange}

                        required />

                </div>
                <div className="col-md-6">
                    <label htmlfor="phoneNumber" className="form-label">Phone No</label>
                    <input type="text" className="form-control" id="phoneNumber"
                        name="phoneNumber"
                        value={data.phoneNumber}
                        onChange={handleChange}
                        required />

                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit" >Submit form</button>
                </div>
            </form>
            </Formik>  
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Address</th>
                        <th scope="col">PH.No</th>
                        <th scope="col">Email</th>
                        <th scope="col">Book</th>
                        <th scope="col">Action</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {input.map((data)=>{

                       return(
                        <tr>
                        <th scope="row">{data.id}</th>
                        <td>{data.first}</td>
                        <td>{data.last}</td>
                        <td>{data.address}</td>
                        <td>{data.phoneNumber}</td>
                        <td>{data.email}</td>
                        <td>{data.book}</td>
                        <td>
                        <button className='btn1' ><i  className="bi bi-pencil-square"></i></button>
                        <button type='button' onclick={()=>deleteData} className='btn1' ><i  class="bi bi-x-circle"></i></button>
                        
                        </td>
                       
                    </tr>   
                       );

                    })
                    }
                  
                </tbody>
            </table>
        </div>
    )
}

export default Table;