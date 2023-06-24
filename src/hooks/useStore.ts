import { create } from "zustand";
import { searchDataProps } from "../type";

interface useStoreProps{
    searchData:searchDataProps;
    setSearchData:(value:searchDataProps)=>void;
}

const useStore=create<useStoreProps>(set=>({
    searchData:{
        label:"",
        value:""
    },
    setSearchData:(value)=>set(()=>({searchData:value}))
}))

export default useStore;