import React from "react";
import './FilterTask.css'

const FilterTask = ()=>(
      <div className="filtertask">
          <div className="itemsleft">
            2 items left
          </div>
          <div className="filter">
            <ul className="filterbtn">
              <li>
                <button className="active">All</button>
              </li>
              <li>
                <button>Active</button>
              </li>
              <li>
                <button>Completed</button>
              </li>
            </ul>
          </div>
      </div>
)

export default FilterTask