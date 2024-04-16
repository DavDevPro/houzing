import useUniqueId from "../hooks/useId";
import HomePage from "../pages/Home";
import PropertiesPage from "../pages/Properties";
const navbar = [
  { id: useUniqueId, element: <HomePage />, title: "Home", path: "/home", private: false, hidden: false },

  { id: useUniqueId, element: <PropertiesPage />, title: "Properties", path: "/properties", private: false, hidden: false },

  { id: useUniqueId, element: <h1>Generic Sign In</h1>, title: "Sign in", path: "/signin", private: false, hidden: true },

  { id: useUniqueId, element: <h1>Generic Sign Un</h1>, title: "Sign up", path: "/signup", private: false, hidden: true },
];
export default navbar;
