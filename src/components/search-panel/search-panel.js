import React from "react";
import "./search-panel.css";
import ItemStatusFilter from "../item-status-filter";

const SearchPanel = () => {
  return (
    <form className="form-inline">
      <input
        placeholder="search"
        className="form-control mr-sm-2 serachPanel"
      />
      <ItemStatusFilter />
    </form>
  );
};

export default SearchPanel;
