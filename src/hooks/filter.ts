import { customAlphabet } from "nanoid";
import { useState } from "react";
import { IFilterItem } from "../models/models";


export function useFilter() {

    const [filter, setFilter] = useState('All Tasks')

    const getLocalFilterMap = (): IFilterItem[] => {
        const localFilterMap: string | null = localStorage.getItem('filterMap');
        return localFilterMap === null? 
        [{filterName: 'All Tasks'}, {filterName: 'Active'}, {filterName: 'Completed'}] :
        (JSON.parse(localFilterMap))
    }

    const [FILTER_MAP, setFILTER_MAP] = useState (getLocalFilterMap)

    const generateColor = customAlphabet('123456789abcdef', 6)

    const color = generateColor()

    const addFilter = (propName:any) => {
        setFILTER_MAP((prev: any) => [...prev, {filterName: propName, filterColor: '#'+ color}])
        console.log(JSON.stringify(FILTER_MAP))
    }

    return { FILTER_MAP, filter, setFilter, addFilter }
}