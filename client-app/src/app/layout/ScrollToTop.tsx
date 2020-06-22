import { useLocation, withRouter } from "react-router-dom";
import { useEffect } from "react";

const ScrollToTop = ({ children }: any) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};

export default withRouter(ScrollToTop);
