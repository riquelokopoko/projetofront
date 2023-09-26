import "./Card.css"
export default function Card() {
    return <div className='card'>
    <h2>Rick Sanchez</h2>
    <div className='tags'>
      <div className='tag'>Status: vivo</div>
      <div className='tag'>Especie: humana</div>
      <div className='tag'>Origem: terra C</div>

    </div>
    <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
  </div>
    
}