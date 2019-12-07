import React from "react";
import { FILTERS } from "../actions";

const Filter = ({ filter, onChangeFilter }) => {
  return (
    <div>
      <button
        style={{ fontWeight: filter === FILTERS.ALL ? "bold" : "normal" }}
        onClick={() => onChangeFilter(FILTERS.ALL)}
      >
        {FILTERS.ALL}
      </button>
      <button
        style={{ fontWeight: filter === FILTERS.ACTIVE ? "bold" : "normal" }}
        onClick={() => onChangeFilter(FILTERS.ACTIVE)}
      >
        {FILTERS.ACTIVE}
      </button>
      <button
        style={{ fontWeight: filter === FILTERS.DONE ? "bold" : "normal" }}
        onClick={() => onChangeFilter(FILTERS.DONE)}
      >
        {FILTERS.DONE}
      </button>
    </div>
  );
};

export default Filter;
