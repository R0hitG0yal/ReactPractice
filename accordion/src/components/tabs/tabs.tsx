import { useState } from "react";

const Tabs = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function RandomContent() {
    return "Hello from Random content";
  }

  const tabs = [
    {
      label: "Tab 1",
      content: "Hello from Tab one.",
    },
    {
      label: "Tab 2",
      content: "Hello from Tab two.",
    },
    {
      label: "Tab 3",
      content: <RandomContent />,
    },
  ];

  function handleTabChange(tabIndex: number) {
    setCurrentTabIndex(tabIndex);
    console.log(tabIndex);
  }

  return (
    <div>
      <div>
        {tabs.map((tab, index) => {
          return (
            <span onClick={() => handleTabChange(index)} key={tab.label}>
              {tab.label}
            </span>
          );
        })}
      </div>
      <div>{tabs[currentTabIndex] && tabs[currentTabIndex].content}</div>
    </div>
  );
};

export default Tabs;
