import React, { useState, useEffect } from "react";

const About = () => {
  let [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = async () => {
    let response = await fetch(process.env.REACT_APP_BACKEND + "/api/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    let data = await response.json();
    console.log(data);
    setNotes(data);
  };

  return (
    <div>
      <p>You are logged to the home page!</p>

      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {note.title} {note.desc}
          </li>
        ))}
      </ul>
     
     
    </div>
  );
};

export default About;
