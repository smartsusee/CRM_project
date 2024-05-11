import React from "react";
import { SideBar, ToggleIcon } from "../toggle_sidebar";

function Status() {
  return (
    <>
      <div class="wrapper">
        <SideBar />

        <div id="content">
          {/* toggle icon */}
          <ToggleIcon />

          <h2>Status Page</h2>
        </div>
      </div>
    </>
  );
}

export default Status;
