import React, { Component } from "react";
import "./item-status-filter.css";

const filterButtons = [
  { name: "all", label: "All" },
  { name: "active", label: "Active" },
  { name: "done", label: "Done" }
];

const ItemStatusFilter = ({ filter, onFilterChange = () => {} }) => {
  const buttons = filterButtons.map(({ name, label }) => {
    const isActive = name === filter;
    const classNames =
      "btn " + (isActive ? "btn-primary" : "btn-outline-primary");

    return (
      <button className={classNames} onClick={() => onFilterChange(name)}>
        {" "}
        {label}{" "}
      </button>
    );
  });

  return <div className="btn-group serachPanel">{buttons}</div>;
};

export default ItemStatusFilter;
