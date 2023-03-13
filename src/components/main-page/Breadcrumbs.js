import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Link } from "react-router-dom";
import "./../../scss/blocks/_breadcrumbs.scss"
import CurrentNeeds from "./CurrentNeeds";
import Landing from "./Landing"
import DocsReports from "./../about-fund/docs-reports/DocsReports"
import MissionStory from "./../about-fund/mission-story/MissionStory"
import OurTeam from "./../about-fund/team-partners/OurTeam"
import Stories from "../projects/success-stories/Stories";

const Breadcrumbs = () => {
  const routes = [
    {
      path: "/",
      element: <Landing />,
      breadcrumb: "Головна сторінка",
    },
    {
      path: "/current",
      element: <CurrentNeeds />,
      breadcrumb: "Поточні потреби",
    },
    {
      path: "/docs",
      element: <DocsReports />,
      breadcrumb: "Документація та звітність",
    },
    {
      path: "/story",
      element: <MissionStory />,
      breadcrumb: "Мета та історія фонду",
    },
    {
      path: "/team",
      element: <OurTeam />,
      breadcrumb: "Команда та партнери",
    },
    {
      path: "/success_stories",
      element: <Stories />,
      breadcrumb: "Успішні історії",
    },

  ];
    const breadcrumbs = useBreadcrumbs(routes);
  
    return (
      <div className="breadcrumbs">
         
        {breadcrumbs.map(({ breadcrumb, match }, index) => (
          <div key={match.url}>
            <Link to={match.url || ""}>{breadcrumb}</Link>
            {index < breadcrumbs.length - 1 && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9 18L15 12L9 6" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>}
          </div>
        ))}
       
      </div>
    );
  };
 

  export default Breadcrumbs;