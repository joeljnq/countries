import React from "react";

interface FilterProps {
    onChangeFilter: (filter: string) => void
}
const filter: React.FC<FilterProps>  = ({onChangeFilter}) => {
    return (
        <div>
        <select id="filter" onChange={(e)=>onChangeFilter(e.target.value)}>
            <option value=""> --please choose an option--</option>
            <option value="ascend">ascend</option>
            <option value="descend">descend</option>
        </select>
        </div>
    );
}

export default filter;