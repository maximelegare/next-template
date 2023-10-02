import { useEffect, useState } from "react";

import { type RecoilState } from "recoil";


import { useRecoilState } from "recoil";



export function useSSRState<T>(recoilAtom: RecoilState<T>, ssrDefaultValue: T) {
  const [isInitial, setIsInitial] = useState(true);
  const [value, setValue] = useRecoilState<T>(recoilAtom);

  useEffect(() => {
    setIsInitial(false);
  }, []);

  return [isInitial ? ssrDefaultValue : value, setValue] as const;
}
