import "./Card.css"
export default function Card(props) {
    const item = props.item;

    return <div className='card'>
    <h2>{item.nome}</h2>
    <div className='tags'>
      <div className='tag'>Status: vivo</div>
      <div className='tag'>Especie: humana</div>
      <div className='tag'>Origem: terra C-137</div>

    </div>
    <img src={item.imagemUrl} />
  </div>
    
}