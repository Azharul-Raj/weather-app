import { useState } from 'react';
import {AsyncPaginate} from 'react-select-async-paginate';

interface SearchProps{
    handleSearchChange:(value:string)=>void;
}

function Search({handleSearchChange}:SearchProps) {
    const [search,setSearch]=useState("");
    const handleChange=(searchData:string)=>{
        setSearch(searchData)
        handleSearchChange(searchData)
    }

  return (
    <AsyncPaginate
     placeholder="Search the city.."
     value={search}
     //@ts-ignore
     onChange={handleChange}
    />
  )
}

export default Search;