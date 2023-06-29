import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import style from './Detail.module.css';

const Detail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});
   
    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(response => response.data)
        .then(( data ) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    
    return(
        <div className={style['detail-container']}>
            <h2>{character?.name}</h2>
            <h2>{character?.status}</h2>
            <h2>{character?.specie}</h2>
            <h2>{character?.gender}</h2>
            <h2>{character?.origin?.name}</h2>
            <img src={character?.image} alt={character?.name}/>
        </div>
    )
}

export default Detail;