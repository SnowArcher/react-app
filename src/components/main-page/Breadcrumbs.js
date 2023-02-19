import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Link } from "react-router-dom";
import CurrentNeeds from "./CurrentNeeds";
import Landing from "./Landing"
import DocsReports from "./../about-fund/docs-reports/DocsReports"
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
  ];
    const breadcrumbs = useBreadcrumbs(routes);
  
    return (
      <div className="breadcrumbs">
         
        {breadcrumbs.map(({ breadcrumb, match }, index) => (
          <div key={match.url}>
            <Link to={match.url || ""}>{breadcrumb}</Link>
            {index < breadcrumbs.length - 1 && ">"}
          </div>
        ))}
       
      </div>
    );
  };
 

  export default Breadcrumbs;