// it will change the text displayed on the browser's tab according to the page on which you are. 
import React from "react";

const Helmet = (props) => {
  document.title = "EcoMarket - " + props.title;
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
