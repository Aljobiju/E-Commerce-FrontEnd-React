import { useNavigate } from "react-router";

export const Authorization = createContext<AuthorizationContext>({
    login:async()=>{},
    logout:()=>{},
});

const AuthContext=({children}:{children:ReactNode})=>{
    const navigate = useNavigate();
    const login=async({e_mail,password,client_type}:LoginFormInput)=>{
        const response=await loginUser({e_mail,password,client_type});
        if(response?.token){
            localStorage.setItem("jwt",response?.token);
            localStorage.setItem("registration_id",response?.registration_id);
            localStorage.setItem("role",response?.client_type);
            navigate(`/${response?.client_type}`)
        }
    }
}