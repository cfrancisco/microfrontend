import React, { useMemo } from "react";
import { dark } from "./themes";
import { ThemeProvider } from "@material-ui/core/styles";

import { Drawer } from "./components/Drawer";
import { RootContainer } from "./components/Containers";
import { useTranslation } from "react-i18next";
import { Router } from "react-router-dom";
import { history } from "./app-history";
import Routes from "./routing/routes";
import PropTypes from "prop-types";

import CssBaseline from "@material-ui/core/CssBaseline";

import { MENU_ITEMS } from "./routing/menu";

const App = () => {
  const { t } = useTranslation("menu");

  const translatedMenuItems = useMemo(() => {
    return MENU_ITEMS.map((item) => {
      return { ...item, label: t(item.i18n) };
    });
  }, [t]);

  const isMenuOpen = true;
  return (
    <ThemeContainer>
      <RootContainer>
        <Router history={history}>
          <Routes />
          <Drawer isOpen={isMenuOpen} menuItems={translatedMenuItems} />
        </Router>
      </RootContainer>
    </ThemeContainer>
  );
};

const ThemeContainer = ({ children }) => {
  return (
    <ThemeProvider theme={dark}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

ThemeContainer.defaultProps = {
  children: React.createElement("div"),
};

ThemeContainer.propTypes = {
  children: PropTypes.node,
};

export default App;
