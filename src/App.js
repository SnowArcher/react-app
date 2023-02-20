import './css/App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Landing from './components/main-page/Landing';
import NavMenu from './components/NavMenu';
import DocsReports from './components/about-fund/docs-reports/DocsReports';

import OurTeam from './components/about-fund/team-partners/OurTeam';
//import Contacts from './components/contacts/Contacts';
import CurrentNeeds from './components/projects/current-projects/CurrentNeeds';
import MissionStory from "./components/about-fund/mission-story/MissionStory";
import Breadcrumbs from './components/main-page/Breadcrumbs';
import Stories from './components/projects/success-stories/Stories';
// 
//import Previous from './components/projects/previous-projects/Previous';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <NavMenu />
          <Breadcrumbs/>
          <Routes>
            <Route path="/" element={<Landing />}/> 
            <Route path="/docs" element={<DocsReports />} />
            <Route path="/story" element={<MissionStory />} />
            {/* <Route path="/story" element={<SuccesStory />} /> */}
            <Route path="/team" element={<OurTeam />} />
            <Route path="/current" element={<CurrentNeeds />} />
            {/* <Route path="/contacts" element={<Contacts />} />*/}
            
            <Route path="/success_stories" element={<Stories />} /> 
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
