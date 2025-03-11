import { useGlobalContext } from "../App";
import { objectLanguage } from "./objectLanguage";

export function useChangeLanguageFunction(title: string) {
  const lingua = useGlobalContext();

  return objectLanguage[lingua.language][title];
}
