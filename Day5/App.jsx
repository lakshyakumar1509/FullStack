
import './assets/css/App.css';
import {Navigate, Route,Routes} from "react-router-dom";
import {lazy} from "react";
import LazySuspense from './components/LazySuspense';
const LazyLogin=lazy(()=> import("./pages/auth/Login"))
const LazyRegister=lazy(()=> import("./pages/auth/Register"))
const LazyForgotPassword=lazy(()=> import("./pages/auth/ForgotPassword"))
const LazyDashBoard=lazy(()=> import("./pages/admin/Dashboard"))
const LazyHome=lazy(()=> import("./pages/user/Home"))
const LazyPortfolio=lazy(()=> import("./pages/user/Portfolio"))
const LazyAbout=lazy(()=> import("./pages/user/About"))
const LazyWedding=lazy(()=> import("./pages/user/Wedding"))
const LazyNonprofit=lazy(()=> import("./pages/user/Nonprofit"))
const LazyCorporate=lazy(()=> import("./pages/user/Corporate"))
const LazyPress=lazy(()=> import("./pages/user/Press"))
const LazyUserMain=lazy(()=> import("./pages/user/Main"))
const LazyAdminMain=lazy(()=> import("./pages/admin/Main"))
const LazySocial=lazy(()=> import("./pages/user/Social"))
const LazyBookingPage=lazy(()=> import("./pages/user/Booking"))

const UserRoutes=()=>{
  return(
    <LazyUserMain>
      <Routes>
        <Route path="/home" element={<LazySuspense component={LazyHome}/>}/>
        <Route path="/about" element={<LazySuspense component={LazyAbout}/>}/>
        <Route path="/services/weddings" element={<LazySuspense component={LazyWedding}/>}/>
        <Route path="/services/social" element={<LazySuspense component={LazySocial}/>}/>
        <Route path="/services/nonprofit" element={<LazySuspense component={LazyNonprofit}/>}/>
        <Route path="/services/corporate" element={<LazySuspense component={LazyCorporate}/>}/>
        <Route path="/portfolio" element={<LazySuspense component={LazyPortfolio}/>}/>
        <Route path="/booking" element={<LazySuspense component={LazyBookingPage}/>}/>
        <Route path="/press" element={<LazySuspense component={LazyPress}/>}/>
      </Routes>
    </LazyUserMain>
  )
}
const AdminRoutes=()=>{
  return(
    <LazyAdminMain>
      <Routes>
        <Route path="/dashboard" element={<LazySuspense component={LazyDashBoard}/>}/>
      </Routes>
    </LazyAdminMain>
  )
}
function App() {
  return (
    
    <Routes>
      <Route exact path="/" element={<Navigate to="event/login"/>}/>
      <Route path="/event/login" element={<LazySuspense component={LazyLogin}/>}/>
      <Route path="/event/register" element={<LazySuspense component={LazyRegister}/>}/>
      <Route path='/event/forgotpassword' element={<LazySuspense component={LazyForgotPassword}/>}/>
      <Route path='/event/user/*' element={<LazySuspense component={UserRoutes}/>}/>
      <Route path='/event/admin/*' element={<LazySuspense component={AdminRoutes}/>}/>
    </Routes>       
    
  )
}

export default App;
