
  import { Routes, Route, } from 'react-router-dom';
  import { Homepage, Login, Recruiterdata, Userprofile, RecruiterJobs, Dashboard } from '../Admin/pages/index'
  import Pagenotfound from '../commonpage/Pagenotfound';




  function AdminRoutes() {

    return (
      <Routes>
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='user' element={<Homepage />} />
        <Route path='login' element={<Login />} />
        <Route path='recruitersdata' element={<Recruiterdata />} />
        <Route path='userprofile' element={<Userprofile />} />
        <Route path='recruiterjobs/:recruiterId' element={<RecruiterJobs />} />
        <Route path='*' element={<Pagenotfound />} />

      </Routes>

    )
  }

  export default AdminRoutes