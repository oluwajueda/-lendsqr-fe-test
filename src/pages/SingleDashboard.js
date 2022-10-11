import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../components/useFetch.js";

const SingleDashboard = () => {
  const { singleDashboard } = useParams();

  const [persons, setPersons] = useState([]);

  const getUsers = async () => {
    const response = await fetch(
      `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${person.id}`
    );
    const data = await response.json();

    setPersons(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const person = persons.find((person) => person.id === singleDashboard);

  return (
    <div key={person.id}>
      <h1>{person.firstName}</h1>
    </div>
  );
};

export default SingleDashboard;
