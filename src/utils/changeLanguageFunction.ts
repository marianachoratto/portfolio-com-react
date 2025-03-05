import { objectLanguage } from "./objectLanguage";


export function changeLanguageFunction( language: string, title: string){
    return objectLanguage[language][title]
}