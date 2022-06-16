import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import Signup from './pages/signup/Signup';
import JobList from './pages/joblist/JobList';
import JobDetail from './pages/jobdetail/JobDetail';
import LikePage from './pages/likePage/LikePage';
import Resume from './pages/resume/Resume';
import Mypage from './pages/mypage/Mypage';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import NaverCallback from './pages/login/NaverCallback';
import KakaoCallback from './pages/login/KakaoCallback';
import GoogleCallback from './pages/login/GoogleCallback';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/likePage" element={<LikePage />} />
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/joblist" element={<JobList />} />
        <Route path="/jobdetail/:job_id" element={<JobDetail />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/NaverCallback" element={<NaverCallback />} />
        <Route path="/KakaoCallback" element={<KakaoCallback />} />
        <Route path="/GoogleCallback" element={<GoogleCallback />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
