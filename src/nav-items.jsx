import { Home, Heart, User } from "lucide-react";
import Index from "./pages/Index.jsx";
import Explore from "./pages/Explore.jsx";
import Profile from "./pages/Profile.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Explore",
    to: "/explore",
    icon: <Heart className="h-4 w-4" />,
    page: <Explore />,
  },
  {
    title: "Profile",
    to: "/profile",
    icon: <User className="h-4 w-4" />,
    page: <Profile />,
  },
];
