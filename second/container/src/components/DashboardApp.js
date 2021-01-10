import React, {useEffect, useRef} from "react";
import { mount } from "dashboard/DashboardApp";

const DashboardApp = ({ onSignIn }) => {
  const authContainer = useRef(null);

  useEffect(() => {
      mount(authContainer.current);
  }, []);

  return <div ref={authContainer} />
};

export default DashboardApp;
