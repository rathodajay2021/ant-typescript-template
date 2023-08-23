//CORE
import { Link } from "react-router-dom";

//CUSTOM
import { LogoPropsType } from "Helpers/TypeConstants";
import { SITE_CONFIG } from "Helpers/Constant";

const Logo = (props: LogoPropsType) => {
  return (
    <div className="isoLogoWrapper">
      {props.collapsed ? (
        <div>
          <h3>
            <Link to="/dashboard">
              <img
                src={SITE_CONFIG.siteIcon}
                style={{ width: 45, height: 45 }}
                alt={SITE_CONFIG.siteName}
              />
            </Link>
          </h3>
        </div>
      ) : (
        <h3>
          <Link to="/dashboard">
            <div className="site-icon"></div>
          </Link>
        </h3>
      )}
    </div>
  );
};

export default Logo;
