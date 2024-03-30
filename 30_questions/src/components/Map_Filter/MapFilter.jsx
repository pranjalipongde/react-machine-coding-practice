import React, { useEffect, useState } from "react";

const MapFilter = () => {
  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <div className="mx-auto">
      <h1 className="text-xl font-semibold text-center">Users Data</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 text-black text-lg mt-4">
        {users.map((user, i) => (
          <div key={i} className="bg-white p-4 border-b-2 ">
            <p className="mb-2">{user.name}</p>
            <hr className="w-full my-2" />
            <p>{user.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapFilter;
