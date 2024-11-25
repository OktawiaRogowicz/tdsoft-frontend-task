import { useContext } from "react";

import { AppDataContext } from "./AppData.context";

export const useAppData = () => useContext(AppDataContext);
