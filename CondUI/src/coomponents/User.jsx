import React, { useState } from "react";
import { useEffect } from "react";



const User = () => {
  const [names, setName] = useState([]);

  const fetchData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonData = await data.json();
    console.log(jsonData)
    setName(jsonData);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-col">
      {names.map((user) => (
        <div className="p-1 m-1" key={user.id}>
          {user.id}. {user.name}{" "}
          <span className="flex bg-sky-200 p-1 rounded-lg">{user.email}</span>
        </div>
      ))}
    </div>
  );
};

export default User;
