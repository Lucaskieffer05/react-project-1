import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useStore } from './hooks/useStore'
import { Container, Row, Col, Button, Form, Stack } from 'react-bootstrap'
import { AUTO_LANGUAGE } from './constants'
import { ArrowsIcon } from './components/Icons'
import { LanguageSelector } from './components/LanguageSelector'
import { SelectionType } from './types.d'
import { TextArea } from './components/TextArea'

function App() {

  const {
    toLanguage,
    fromLanguage,
    text,
    translatedText,
    loading,
    setFromLanguage,
    setToLanguage,
    setText,
    setTranslatedText,
    setLoading,
    interchangeLanguages
  } = useStore()


  return (
    <Container fluid>
      <h1>Google Translate</h1>

      <Row>
        
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SelectionType.From}
              value={fromLanguage}
              onChange={setFromLanguage} 
            />
            <TextArea
              type={SelectionType.From}
              value={text}
              onChange={setText}
            />
          </Stack>
          
        </Col>

        <Col xs='auto'>
          <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}>
            <ArrowsIcon />
          </Button>
          
        </Col>

        <Col>
          <Stack gap={2}>
            <LanguageSelector 
              type={SelectionType.To}
              value={toLanguage}
              onChange={setToLanguage} 
            />
            <TextArea
              type={SelectionType.To}
              value={translatedText}
              onChange={setTranslatedText}
              loading={loading}
            />
          </Stack>
        </Col>

      </Row>
    </Container>
  )
}

export default App
