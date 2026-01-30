function SearchableList() {
  const [items] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" },
    { id: 4, name: "Mango" },
    { id: 5, name: "Grape" },
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      {filteredItems.length === 0 && (
        <p>No results found for "{searchQuery}"</p>
      )}
    </div>
  );
}

import { useState } from "react";
export default SearchableList;
