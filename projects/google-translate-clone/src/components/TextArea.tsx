import {Form} from 'react-bootstrap';
import { SelectionType } from '../types.d';

interface Props {
    type: SelectionType,
    loading?: boolean,
    onChange: (language: string) => void, 
    value: string 
}

const commonStyles = { border: 0, height: '200px', Resize: 'none' }

const getPlcacelholder = ({ type, loading } : {type: SelectionType, loading?:boolean}) => {
    if (type === SelectionType.From) return 'Introducir texto'
    if (loading === true) return 'Traduciendo...'
    return 'Trducción'
}

export const TextArea = ({ type, loading, value, onChange}: Props) => {
    const style = type === SelectionType.From 
        ? commonStyles  
        : { ...commonStyles, backgroundColor: '#f5f5f5' }

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(event.target.value)
    }
    
    return(
        <Form.Control
            as='textarea'
            placeholder={getPlcacelholder({type, loading})}
            value={value}
            autoFocus = {type === SelectionType.From}
            style={style}
            onChange={handleChange}
        />
    )
}