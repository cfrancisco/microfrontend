import React from "react";

import { useStyles } from "./RootContainerStyle";

export default ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};
