import React from "react";
import "./assets/filter.css";
interface FilterProps {
    onChangeFilter: (filter: string) => void
}
const filter: React.FC<FilterProps>  = ({onChangeFilter}) => {
    return (
        <div id="select-wrapper">
        <select id="filter" onChange={(e)=>onChangeFilter(e.target.value)}>
            <option value=""> --please choose an option--</option>
            <option value="ascend">ascend</option>
            <option value="descend">descend</option>
        </select>
        <i></i>
        </div>
    );
}

export default filter;