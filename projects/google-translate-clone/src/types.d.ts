import { type SUPPORTED_LANGUAGES, type AUTO_LANGUAGE } from './constants'

export type Language = keyof typeof SUPPORTED_LANGUAGES
export type AutoLanguage = typeof AUTO_LANGUAGE
export type FromLanguage = Language | AutoLanguage

export interface State {
    fromLanguage: FromLanguage
    toLanguage: Language
    text: string
    translatedText: string
    loading: boolean
}

export type Action = 
    { type: 'interchangeLanguages' } |
    { type: 'setFromLanguage', payload: FromLanguage } |
    { type: 'setToLanguage', payload: Language } |
    { type: 'setText', payload: string } |
    { type: 'setTranslatedText', payload: string } |
    { type: 'setLoading', payload: boolean }

export enum SelectionType {
    From = 'from',
    To = 'to'
}