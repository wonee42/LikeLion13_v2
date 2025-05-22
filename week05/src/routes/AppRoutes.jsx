import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import ProjectPage from '../pages/ProjectPage';
import DiaryPage from '../pages/DiaryPage';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AboutPage />} />  
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/diary" element={<DiaryPage />} />
      </Routes>
    </Router>
  );
}
