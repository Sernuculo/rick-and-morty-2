import { useState } from "react";

export default function SearchBar({onSearch}) {
   const [id, setID] = useState('');

   const handlechange = (event) =>{
      setID(event.target.value)

   }

   return (
      <div>
         <input type='search'  onChange={handlechange} value={id}/>
         <button onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}
