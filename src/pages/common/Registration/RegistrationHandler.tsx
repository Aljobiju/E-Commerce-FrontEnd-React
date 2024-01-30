import React, { useEffect, useState } from 'react'
import { FormInput } from './types';
import RegistrationPage from './RegistrationPage';
import { postSupplierRegistration } from './api/postSupplier';
 
const RegistrationHandler = () => {
    const initialFormData = {
        client_type: null,
        full_name: null,
        e_mail: null,
        password: null,
        profile_pic: null,
    };
   
    const [registrationDetails, setRegistrationDetails] = useState<FormInput>(initialFormData);
   
    const Register = (e: React.FormEvent) => {
        e.preventDefault();
   
        const formData = new FormData(e.target as HTMLFormElement);
   
        setRegistrationDetails({
            client_type: formData.get("client_type") as FormInput["client_type"],
            full_name: formData.get("full_name") as string,
            e_mail: formData.get("e_mail") as string,
            password: formData.get("password") as string,
            profile_pic: formData.get("profile_pic") as File,
        });
        console.log(registrationDetails)
    };
    useEffect(()=>{
      if(registrationDetails.client_type==="supplier")
      postSupplierRegistration(registrationDetails)
    })
   
  return (
    <div>
      <RegistrationPage Register={Register}/>
    </div>
  )
}
 
export default RegistrationHandler
 