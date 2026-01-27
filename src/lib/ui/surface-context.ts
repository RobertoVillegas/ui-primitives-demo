import { createContext, useContext } from "react";

export type Surface = "admin" | "user";

export const SurfaceContext = createContext<Surface>("user");

export function useUISurface(): Surface {
  return useContext(SurfaceContext);
}
