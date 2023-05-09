import React from "react";
import './Tbody.css'
let Tbody = ({ item, ind }) => {
  let cn = "c2";
  if (Number(item.ttime) < 100) {
    cn = "c1";
    console.log(item.ttime, cn);
  }
  console.log(ind,"ind")
  return (
    <tr className={cn}>
      <td>{ind+1}</td>
      <td>{item.key}</td>
      <td>{item.ttime}</td>
    </tr>
  );
};

export default Tbody;