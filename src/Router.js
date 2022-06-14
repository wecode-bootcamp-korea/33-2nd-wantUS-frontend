import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import JobList from './pages/joblist/JobList';
import JobDetail from './pages/jobdetail/JobDetail';
import Resume from './pages/resume/Resume';
import Footer from './components/footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/joblist" element={<JobList />} />
        <Route path="/jobdetail" element={<JobDetail />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
