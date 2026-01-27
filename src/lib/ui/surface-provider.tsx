import * as React from "react";
import { SurfaceContext, type Surface } from "./surface-context";

export interface UISurfaceProviderProps {
  value: Surface;
  children: React.ReactNode;
}

export function UISurfaceProvider({ value, children }: UISurfaceProviderProps) {
  return (
    <SurfaceContext.Provider value={value}>
      {children}
    </SurfaceContext.Provider>
  );
}
