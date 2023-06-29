import Card from '../Card/Card';
import style from './Cards.module.css';


export default function Cards({characters, onClose }) {
   return (
       <div className={style.cards}> 
         {
            characters.map(({id, name, status, species, gender, image, origin}) =>{
              
               return(
                  <Card
                  key ={id}
                  id={id}
                  name={name}
                  status={status}
                  species={species}
                  image={image}
                  gender={gender}
                  origin={origin.name}
                  onClose={onClose}
                  />
               )
            })
         }
       </div> 
   )
}
