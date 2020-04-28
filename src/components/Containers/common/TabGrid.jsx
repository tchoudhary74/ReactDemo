import React, { useState } from "react";
import { Tabs } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";


function TabGrid(props) {
  const tabs = props.tabs.map(tab => {
    const { comp: Comp } = tab;
    return (
      <Tab eventKey={tab.eventKey} title={tab.title}>
        {Comp}
      </Tab>
    );
	});
  const [key, setKey] = useState("user");
  return (
    <div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
				onSelect={k => {setKey(k);
				props.hideButton(k)}
			}
      >
        {tabs}
      </Tabs>
    </div>
  );
}

export default TabGrid;

