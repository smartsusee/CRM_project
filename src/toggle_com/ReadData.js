import React from "react";
import { SideBar, ToggleIcon } from "../toggle_sidebar";

function ReadData() {
  return (
    <div class="wrapper">
      <SideBar />

      <div id="content">
        {/* toggle icon */}
        <ToggleIcon />

        {/* data Read  */}
        <h2>Read Page</h2>
      </div>
    </div>
  );
}

export default ReadData;
