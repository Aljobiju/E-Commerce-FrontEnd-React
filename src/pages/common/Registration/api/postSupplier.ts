import axios, { AxiosError } from 'axios'
import { FormInput } from '../types'
import axiosInstance from '../../../../config/configAxios'
import { baseUrl } from '../../../../config/configUrl'
import { APIResponseHandler } from '../../../../components/APIHandler/APIresponseHandler'
import { APIResponseType } from '../../../../components/APIHandler/types'
 
export const postSupplierRegistration=async(formData:FormInput)=>{
    return await axiosInstance.post(`${baseUrl.supplier}/supplierRegistration`,
    formData,{
        headers:{
            "Content-Type":"multipart/form-data"
        }
    }).then(res=>APIResponseHandler(res as APIResponseType,"Registration Successfull"))
    .catch(err=>APIResponseHandler(err as AxiosError))
 
}