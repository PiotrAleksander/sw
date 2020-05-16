import React, { Suspense } from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router } from "react-router-dom";

import Sidebar from "./common/Sidebar";
import Main from "./common/Main";

export default () => {
  return (
    <RecoilRoot>
      <Router>
        <Sidebar />
        <Suspense fallback={<div>Loading...</div>}>
          <Main />
        </Suspense>
      </Router>
    </RecoilRoot>
  );
};
