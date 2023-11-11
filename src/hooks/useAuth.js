import { useContext } from "react";
import { AuthContext } from "../provoders/AuthProviders";

export const useAuth = () => useContext(AuthContext);
