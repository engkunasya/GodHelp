//AMEND: COULD NOT WORK TO PERFORM LOGIN ON RENDER MAIN TSX

// import { useEffect, useState } from "react";
// import "./App.css";

// import {
//   BrowserRouter,
//   Route,
//   Routes,
//   redirect,
//   Navigate,
// } from "react-router-dom";
// import LoginComponent from "./scenes/login";

// function Login() {
//   const [user, setUser] = useState(false);
//   useEffect(() => {
//     const storedUser = localStorage.getItem("user77") as string;
//     if (storedUser !== null) {
//       setUser(true);
//     } else {
//       setUser(false);
//     }
//   }, [user, redirect]);

//   // if !users ==  always navigate to /. let the homepage make reference to redirect to login itself

//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/login" element={<LoginComponent />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default Login;
