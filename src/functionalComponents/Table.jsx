import React, { useContext, useEffect } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';
import HeadTable from './HeadTable';
import CellTable from './CellTable';
import './style/Table.css';

const Table = () => {
  
  const value = useContext(StarWarsContext);
  const { onLoad, callAPI } = value;
  
  useEffect(() => {
    callAPI();
  }, [])

  if (!onLoad) return (<div style={{ textAlign: "center" }}><h1>Loading...</h1></div>);
  return (
    <React.Fragment>
      <div className="container-header">
        <input type="text" />
        <button>Search</button>
        <div>StarWars DataTable with Filters</div>
      </div>
      <table>
        <HeadTable />
        <CellTable />
      </table>
    </React.Fragment>
  );
}


export default Table;
