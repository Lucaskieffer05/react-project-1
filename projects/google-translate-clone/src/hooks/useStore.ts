import { AUTO_LANGUAGE } from '../constants'
import { Action, type State, Language, FromLanguage } from '../types'
import { useReducer } from 'react'

const initialState: State = {
    fromLanguage: 'auto',
    toLanguage: 'en',
    text: '',
    translatedText: '',
    loading: false                                                
  }
  
  function reducer(state: State, action: Action) {
    switch (action.type) {
      case 'interchangeLanguages':
        // Logica en el estado dentro del reducer
        if (state.fromLanguage=== AUTO_LANGUAGE) return state
        return { 
          ...state, 
          fromLanguage: state.toLanguage, 
          toLanguage: state.fromLanguage 
        }
      case 'setFromLanguage':
        return { ...state, fromLanguage: action.payload, loading: true, translatedText: ''}
      case 'setToLanguage':
        return { ...state, toLanguage: action.payload}
      case 'setText':
        return { ...state, text: action.payload}
      case 'setTranslatedText':
        return { ...state, translatedText: action.payload, loading: false}
      case 'setLoading':
        return { ...state, loading: action.payload}
      default:
        return state
    }
  }

export function useStore() {
    const [{
        fromLanguage,
        toLanguage,
        text,
        translatedText,
        loading
    }, dispatch] = useReducer(reducer, initialState)
    
    const setFromLanguage = (fromLanguage : FromLanguage) => dispatch({ type: 'setFromLanguage', payload: fromLanguage })

    const setToLanguage = (toLanguage : Language) => dispatch({ type: 'setToLanguage', payload: toLanguage })

    const setText = (text : string) => dispatch({ type: 'setText', payload: text })

    const setTranslatedText = (translatedText : string) => dispatch({ type: 'setTranslatedText', payload: translatedText })

    const setLoading = (loading : boolean) => dispatch({ type: 'setLoading', payload: loading })

    const interchangeLanguages = () => dispatch({ type: 'interchangeLanguages' })
    
    return {
        fromLanguage,
        toLanguage,
        text,
        translatedText,
        loading,
        setFromLanguage,
        setToLanguage,
        setText,
        setTranslatedText,
        setLoading,
        interchangeLanguages
    }
    
}