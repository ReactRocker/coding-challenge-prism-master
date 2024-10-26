import { useEffect, useState } from "react";
import { SpacingParamType } from "../types/spacingType";

type HookParams = {
  isLoading: boolean;
  params: SpacingParamType[];
};

export const useSpacingParams = (type: string): HookParams => {
  const [params, setParams] = useState<SpacingParamType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:12346/spacing/${type}`)
      .then((response) => response.json())
      .then((data) => setParams(data))
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
    return () => {
      setParams([]);
    };
  }, [type]);

  return { isLoading, params };
};
