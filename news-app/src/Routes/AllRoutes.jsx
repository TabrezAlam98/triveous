import {Routes,Route} from 'react-router-dom'
import News from '../components/News'
import Wishlist from '../components/Wishlist'
import SinglePage from '../components/SinglePage'
import Signup from '../components/Signup'
import Login from '../components/Login'

const AllRoutes = () => {
  return (
    <>
     <Routes>
        <Route path="/" element={<News/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/singlePage" element={<SinglePage />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login />} />
        </Routes>
    </>
  )
}

export default AllRoutes