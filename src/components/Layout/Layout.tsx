import React from "react";

import "./layout.css";

type LayoutProps = {
  children: React.ReactChild | React.ReactChild[];
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  return <div className="layout">{children}</div>;
}
