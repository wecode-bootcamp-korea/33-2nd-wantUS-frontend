import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import JobList from './pages/joblist/JobList';
import JobDetail from './pages/jobdetail/JobDetail';
import LikePage from './pages/likePage/LikePage';
import Resume from './pages/resume/Resume';
import NaverCallback from './pages/login/NaverCallback';
import KakaoCallback from './pages/login/KakaoCallback';
import GoogleCallback from './pages/login/GoogleCallback';
import Nav from './components/nav/Nav';
import Mypage from './pages/mypage/Mypage';
import Search from './components/nav/components/Search';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/likePage" element={<LikePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/joblist" element={<JobList />} />
        <Route path="/jobdetail/:id" element={<JobDetail />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/NaverCallback" element={<NaverCallback />} />
        <Route path="/KakaoCallback" element={<KakaoCallback />} />
        <Route path="/GoogleCallback" element={<GoogleCallback />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
