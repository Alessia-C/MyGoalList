import React, { type ReactNode } from "react";

type InfoBoxProps = {
  mode: "hint" | "warning";
  children: ReactNode;
};

const InfoBox = ({ mode, children }: InfoBoxProps) => {

  let classBox = mode === "hint" ? "hint" : "warning";

  return (
    <aside className={`infobox infobox-${classBox}`}>
      {mode === "warning" && <h3>Warning</h3>}
      <p>{children}</p>
    </aside>
  );
};

export default InfoBox;
