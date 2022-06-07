import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import JobList from './pages/joblist/JobList';
import JobDetail from './pages/jobdetail/JobDetail';
import LikePage from './pages/likePage/LikePage';
import Resume from './pages/resume/Resume';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/likePage" element={<LikePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/joblist" element={<JobList />} />
        <Route path="/jobdetail/:id" element={<JobDetail />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
