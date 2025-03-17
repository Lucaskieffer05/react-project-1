import {Form} from 'react-bootstrap';
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '../constants'
import React, { FunctionComponent } from 'react'
import { type FromLanguage, type Language, SelectionType } from '../types.d'

type Props = 
    | {type: SelectionType.From, value: FromLanguage, onChange: (language: FromLanguage) => void}
    | {type: SelectionType.To, value: Language, onChange: (language: Language) => void}

export const LanguageSelector: FunctionComponent<Props> = ({ onChange, type, value }) =>{
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value as Language)
    }
    return (
        <Form.Select aria-label="Selecciona el idioma" onChange={handleChange} value={value}>
            {type === SelectionType.From && <option value={AUTO_LANGUAGE}>Detectar idioma</option>}
            {Object.entries(SUPPORTED_LANGUAGES).map(([key, value]) => (
                <option key={key} value={key}>
                    {value}
                </option>
            ))}
        </Form.Select>
    )
}