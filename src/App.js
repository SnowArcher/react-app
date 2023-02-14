import './css/App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Landing from './components/main-page/Landing';
import NavMenu from './components/NavMenu';
import DocsReports from './components/about-fund/docs-reports/DocsReports';
//import SuccesStory from './components/about-fund/mission-story/SuccesStory';
import OurTeam from './components/about-fund/team-partners/OurTeam';
//import Contacts from './components/contacts/Contacts';
//import CurrentNeeds from './components/projects/current-projects/CurrentNeeds';
//import Previous from './components/projects/previous-projects/Previous';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <NavMenu />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/docs" element={<DocsReports />} />
            {/* <Route path="/story" element={<SuccesStory />} /> */}
            <Route path="/team" element={<OurTeam />} />
            {/* <Route path="/contacts" element={<Contacts />} />
            <Route path="/current" element={<CurrentNeeds />} />
            <Route path="/previous" element={<Previous />} /> */}
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
