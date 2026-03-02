import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { HomePage } from '@/pages/HomePage';
import { StorePage } from '@/pages/StorePage';
import { SkillsPage } from '@/pages/SkillsPage';
import { ProjectsPage } from '@/pages/ProjectsPage';
import { PricingPage } from '@/pages/PricingPage';
import { ContactPage } from '@/pages/ContactPage';

function App() {
  return (
    <div className="theme dark flex flex-col min-h-screen">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="store" element={<StorePage />} />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
