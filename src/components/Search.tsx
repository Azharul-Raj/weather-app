import axios from 'axios';
import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';

import { options, url } from '../libs/apiData';
import { cityType, searchDataProps } from '../type';
import useStore from '../hooks/useStore';

interface SearchProps {
    handleSearchChange: (value: searchDataProps) => void;
}

function Search({ handleSearchChange }: SearchProps) {
    const setSearchData=useStore((state)=>state.setSearchData);
    const [search, setSearch] = useState<searchDataProps>();
    const handleChange = (searchData: searchDataProps) => {
        setSearch(searchData)
        handleSearchChange(searchData)
        setSearchData(searchData)
    }
    const loadOptions = (value: string) => {
        // console.log(value)
       return axios.get(`${url}cities?minPopulation=10000&namePrefix=${value}`, options)
            .then(res => {
                return {
                    options: res.data.data.map((city: cityType) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name},${city.countryCode}`
                        }
                    })
                }
            })
            .catch(err => console.log(err))

    }
    return (
        <AsyncPaginate
            placeholder="Search the city.."
            debounceTimeout={700}
            value={search}
            //@ts-ignore
            onChange={handleChange}
            //@ts-ignore
            loadOptions={loadOptions}
        />
    )
}

export default Search;