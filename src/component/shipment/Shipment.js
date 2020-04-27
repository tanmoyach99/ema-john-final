import React from 'react'
import { useForm } from 'react-hook-form'
import './shipment.css'
import { auth } from 'firebase'
import { useAuth } from '../Login/useAuth'

const  Shipment=() =>{
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => { console.log(data) };
  const auth = useAuth();



  return (
    
    <form className="form-submit" onSubmit={handleSubmit(onSubmit)}>
      
     
      <input className="submit" defaultValue={auth.user.name} name="name" ref={register({ required: true })} placeholder="name"/>
      {errors.name && <span className="required">name field is required</span>}

      <input className="submit" defaultValue={auth.user.email} name="email" ref={register({ required: true })} placeholder="email"/>
      {errors.email && <span className="required">email field is required</span>}

      <input className="submit" name="address" ref={register({ required: true })} placeholder="address"/>
      {errors.address && <span className="required">Address field is required</span>}

      <input className="submit" name="country" ref={register({ required: true })} placeholder="country"/>
      {errors.country && <span className="required">Country field is required</span>}

      <input className="submit" name="zipcode" ref={register({ required: true })} placeholder="zipcode"/>
      {errors.zipcode && <span className="required">Zipcode field is required</span>}
      
      <input type="submit" />
    </form>
  )
}
export default Shipment;