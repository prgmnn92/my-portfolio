import React, { useEffect, useState } from "react";
import Container from "../components/Container";

import { getAllFormSubmissions } from "../firebase/firebase";

const Dashboard = () => {
  const [formSubmissions, setFormSubmissions] = useState([]);
  useEffect(() => {
    const test = async () => {
      const fetchedSubmissions = await getAllFormSubmissions();
      setFormSubmissions(fetchedSubmissions);
      console.log(fetchedSubmissions);
    };
    test();
    return () => {};
  }, []);

  return (
    <div>
      <Container>
        {formSubmissions
          .sort(function (a, b) {
            return b.date.seconds - a.date.seconds;
          })
          .map((item, id) => {
            const date = new Date(item.date.seconds * 1000);
            return (
              <div key={id} className="flex">
                <div className="px-4">{date.toLocaleString()}</div>
                <div className="px-4">{item.name}</div>
                <div className="px-4">{item.email}</div>
                <div className="px-4">{item.message}</div>
              </div>
            );
          })}
      </Container>
    </div>
  );
};

export default Dashboard;
