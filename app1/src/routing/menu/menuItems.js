import {
  Dashboard,
  DeviceHub,
  DevicesOther,
  FilterNone,
  Home,
  NotificationImportant,
  People,
  SupervisedUserCircle,
} from "@material-ui/icons";

export const MENU_ITEMS = [
  {
    visible: false,
    i18n: "devices",
    label: "Dispositivos",
    path: "/devices",
    icon: DevicesOther,
  },
  {
    visible: false,
    i18n: "templates",
    label: "Modelos",
    path: "/templates",
    icon: FilterNone,
  },
  {
    visible: false,
    i18n: "flows",
    label: "Fluxos",
    path: "/flow",
    icon: DeviceHub,
  },
  {
    i18n: "notifications",
    label: "Notificações",
    path: "/notification",
    icon: NotificationImportant,
  },
  {
    visible: false,
    i18n: "users",
    label: "Usuários",
    path: "/users",
    icon: People,
  },
  {
    visible: false,
    i18n: "profiles",
    label: "Perfis",
    path: "/profiles",
    icon: SupervisedUserCircle,
  },
  {
    visible: true,
    i18n: "home",
    label: "home",
    path: "/home",
    icon: Home,
  },
  {
    visible: true,
    i18n: "dashboard",
    label: "Dashboard",
    path: "/dashboard",
    icon: Dashboard,
  },
];
