import { createContext, useContext, useState } from "react";

type ContextParams = {
  activeParam: string | null;
  setActiveParam: (key: string | null) => void;
};

const SpacingContex = createContext<ContextParams | null>(null);

export const useSpacigContex = () => useContext(SpacingContex) as ContextParams;

export const SpacingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeParam, setActiveParam] = useState<string | null>(null);

  return (
    <SpacingContex.Provider value={{ activeParam, setActiveParam }}>
      {children}
    </SpacingContex.Provider>
  );
};
