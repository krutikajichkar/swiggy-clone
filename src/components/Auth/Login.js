import React, { useContext, useState, useEffect } from "react";
import UserContext from "../../utils/UserContext";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [filteredUser, setFilteredUser] = useState();
  const [users, setUsers] = useState([]);
  

   const fetchUsers = async() => {
    const response = await axios.get("https://fakestoreapi.com/users");
    setUsers(response.data);
    setFilteredUser(response.data)
    console.log(response.data);
   }

   useEffect(() => {
    fetchUsers()
   } ,[])

   
    const handleLogin = () => {
      const filterUser = users.filter((user) => user.email === email);
      setFilteredUser(filterUser)
      alert("logged in as" + filteredUser?.email)
    }


  const {userFirstName , userLastName} = useContext(UserContext);
 
  return (
    <div className=" flex justify-center mt-[200px] flex-col ">
      <UserContext.Provider
        value={{ userFirstName : filteredUser?.firstname , userLastName: filteredUser?.lastname }}
      >
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
      { filteredUser?.map((us) => {
        return(
       <div className="flex flex-col">
         <div>{us.email} , {us.password}</div>
       </div>
        )
      }) }
      <div>
        <p>
          Logged in as{userFirstName} {userLastName}
        </p>
      </div>
      </UserContext.Provider>
    </div>
  );
};

export default Login;
