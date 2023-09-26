import './App.css'
import Card from './components/Card/Card'

function App() {
  const item1 = {
    nome: 'Rick Sanchez',
    imagemUrl: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
    //tags: ['tag1', 'tag2']
  }
  const item2 = {
    nome: 'Morty Smith',
    imagemUrl: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
    //tags: ['tag1', 'tag2']
  }
  const item3 = {
    nome: 'Summer Smith',
    imagemUrl: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
    //tags: ['tag1', 'tag2']
  }

  const itens = [item1, item2, item3]

  return (
    <>
      
      {itens.map(function (item) {
        return <Card item={item}/>
      })}
    </>
  )
}

export default App
