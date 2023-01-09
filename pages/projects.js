import Link from "next/link";
import React, { useEffect, useState } from "react";
import Container from "../components/Container";

const ProjectItem = (props) => {
  return (
    <Link
      className="flex justify-between p-4 mb-4 bg-white drop-shadow rounded-2xl"
      href={props.href}
      target="_blank"
    >
      <div>
        <span className="mr-2 font-bold md:mr-4">{props.id}</span>
        <span>{props.name}</span>
      </div>
      <span className="pl-2 font-semibold">development</span>
    </Link>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState({});

  useEffect(() => {
    async function getData() {
      const fetchedProjects = await fetch("/api/projects");
      const data = await fetchedProjects.json();
      setProjects(data);
    }

    getData();
    return () => {
      setProjects({});
    };
  }, []);

  console.log(projects);

  return (
    <>
      <Container>
        <section className="py-8 md:pt-4 md:pb-16">
          <h1 className="pb-4 text-xl font-medium md:text-3xl text-brick-red md:pb-8">
            A collection of projects built by me 👋
          </h1>
          <div>
            {Object.keys(projects).map((key) => {
              return (
                <ProjectItem
                  key={key}
                  href={projects[key].url}
                  name={projects[key].name}
                />
              );
            })}
          </div>
        </section>
      </Container>
    </>
  );
};

export default Projects;
