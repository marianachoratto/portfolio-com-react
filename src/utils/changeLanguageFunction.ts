import { useGlobalContext } from "../App";
import { listaProjetos } from "./listaProjetos";
import { objectLanguage } from "./objectLanguage";

export function useChangeLanguageFunction(title: string) {
  const lingua = useGlobalContext();

  return objectLanguage[lingua.language][title];
}

export function changeLanguageTitle(index: number, title: string) {
  const lingua = useGlobalContext();

  return listaProjetos[index][`${title}${lingua.language}`];
}
