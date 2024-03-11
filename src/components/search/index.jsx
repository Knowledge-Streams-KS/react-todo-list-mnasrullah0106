import React, { useState } from "react";

const LiveSearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
    "Kiwi",
    "Lemon",
  ]);
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    const filtered = data.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
    setFilteredData(newData); // Update filteredData as well
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {searchTerm === "" ?// Check if search term is empty
           data.map((item, index) => ( // If empty, display original data
              <li >
                {item}
                <button onClick={() => handleDelete(index)}>Delete</button>
              </li>
            ))
          : filteredData.map((item, index) => ( // If not empty, display filtered data
              <li key={index}>
                {item}
                <button onClick={() => handleDelete(index)}>Delete</button>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default LiveSearchComponent;
