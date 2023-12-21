import './App.css';
import Button from "./components/button/button"
import Paragraph from './components/paragraph/paragraph';

const corAleatoria = '#' + Math.floor(Math.random()*16777215).toString(16);

function App() {
  return (
    <>
    <Paragraph
    text="Clique abaixo para iniciar o dowload grátis"
    color={corAleatoria} />

    <Button label='Download vídeo'></Button>
    </>
  )
}

export default App;
