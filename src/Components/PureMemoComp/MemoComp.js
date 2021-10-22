import React from "react";
const MemoComp = (props) => {
//   console.log("This is memocomp");
  return <div>I'm the last child of {props.name} in FC</div>;
};

export default React.memo(MemoComp);
