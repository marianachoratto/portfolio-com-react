import { useGlobalContext } from "../App";
import { objectLanguage } from "./objectLanguage";


// export function changeLanguageFunction( language: string, title: string){
//     return objectLanguage[language][title]
// }
export function useChangeLanguageFunction( title: string){
    const lingua = useGlobalContext()

    return objectLanguage[lingua.language][title]
}