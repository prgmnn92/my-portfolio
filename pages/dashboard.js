import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import { getAllFormSubmissions } from "../firebase";

const Dashboard = (props) => {
  const { formSubmissions } = props;
  const parsedSubmissions = JSON.parse(formSubmissions);

  return (
    <div>
      <Container>
        {parsedSubmissions.length <= 0 && <div>No submissions so far...</div>}
        {parsedSubmissions ? (
          parsedSubmissions
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
                  <div className="px-4">{item.message.html}</div>
                </div>
              );
            })
        ) : (
          <div>Loading...</div>
        )}
      </Container>
    </div>
  );
};

export async function getStaticProps() {
  const fetchedSubmissions = await getAllFormSubmissions();
  const submissions = JSON.stringify(fetchedSubmissions);
  return {
    props: {
      formSubmissions: submissions,
    }, // will be passed to the page component as props
  };
}

export default Dashboard;
