// import { BrowserRouter,Routes,Route } from "react-router-dom";
// import { Home } from "./pages/Home";
// import { About } from "./pages/About";
// import { Contact } from "./pages/Contact";
// import { Register } from "./pages/Register";
// import { Service} from "./pages/Service";
// import { Login } from "./pages/Login";
// import { Error } from "./pages/Error";
// import { Navbar } from "./components/Navbar";
// import { Footer } from "./components/Footer/Footer";
// import { Logout } from "./pages/Logout";
// import { AdminLayout } from "./components/layouts/Admin-layout";
// import { AdminUsers } from "./pages/Admin-users";
// import { AdminContacts } from "./pages/Admin-contacts";
// import { AdminUpdate } from "./pages/Admin-update";
// // import { Google } from "./pages/Google";


// const App = () => {
//   return (
//   <>
//     <BrowserRouter>
//     <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/service" element={<Service />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/logout" element={<Logout />} />
//         {/* <Route path="/google" element={<Google />} /> */}
//         <Route path="*" element={<Error />} />
//         <Route path="/admin" element={<AdminLayout />}>
//           <Route path="users" element={<AdminUsers />} />
//           <Route path="contacts" element={<AdminContacts />} />

//           <Route path="users/:id/edit" element={<AdminUpdate />} />

//         </Route>
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   </>
//   );
// };

// export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Register } from "./pages/Register";
import { Service } from "./pages/Service";
import { Login } from "./pages/Login";
import { Error } from "./pages/Error";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Logout } from "./pages/Logout";
import { AdminLayout } from "./components/layouts/Admin-layout";
import { AdminUsers } from "./pages/Admin-users";
import { AdminContacts } from "./pages/Admin-contacts";
import { AdminUpdate } from "./pages/Admin-update";
import { Google } from "./pages/Google.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        {/* Uncomment if needed */}
        <Route path="/google" element={<Google />} />
        <Route path="*" element={<Error />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="users" element={<AdminUsers />} />
          <Route path="contacts" element={<AdminContacts />} />
          <Route path="users/:id/edit" element={<AdminUpdate />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
