import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch ,useSelector} from "react-redux";
import { addUser } from "../../utils/userSlice";
import { useNavigate, useParams } from "react-router-dom";

import { addItems } from "../../utils/cartSlice";


const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [users, setUsers] = useState([]);
 

  const dispatch = useDispatch();
  const navigate = useNavigate();
 


  

   const fetchUsers = async() => {
    const response = await axios.get("https://fakestoreapi.com/users");
    setUsers(response.data);
    console.log(response.data);
   }

 

   useEffect(() => {
    fetchUsers()
  
   } ,[])

   
    
   
    const handleLogin = () => {
      const filterUser = users.filter((user) => user.email === email);
      dispatch(addUser(filterUser))
      
      
      navigate('/')
    }



  return (
    <div className=" flex justify-center mt-[200px]  ">
     
        <div className="bg-gray-300 flex flex-col gap-5 px-8 py-10 justify-center w-3/12 rounded">
          <input
            className="px-4 py-2 w-[100%] rounded-md"
            type="email"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="px-4 py-2 w-[100%] rounded-md"
            type="password"
            placeholder="Enter your password here..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <button
              className="bg-yellow-500 px-6 py-2 rounded-md font-semibold w-[100%]"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
    
     
    
    </div>
  );
};

export default Login;
