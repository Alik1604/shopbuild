import React from 'react';

const Sorter = ({sort}) => {
    return (
        <div>
        <select onChange={e => {sort(e.target.value)}}>
          <option value={"name"}>Sort by name</option>
          <option value={"count"}>Sort by cout</option>
          <option value={"size"}>Sort by size</option>
        </select>
      </div>
    );
};

export default Sorter;