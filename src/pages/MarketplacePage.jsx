import React, { useState } from "react";
import Navbar from "../components/Navbar";

const MarketplacePage = () => {
  const [filterSearch, setFilterSearch] = useState('');

  const updateFilter = (nameFilter, valueFilter) => {
    if (nameFilter === 'newValueSearch') {
      setFilterSearch(valueFilter);
    }
  };

  return (
    <div>
      <Navbar changeSearch={updateFilter} />
    </div>
    // <exemplo meio changeSearch={updateFilter} /> rever isso quando tiver pronto os cards e apagar comentario
  );
}

export default MarketplacePage;
