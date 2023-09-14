import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import {
  Card,
  CardLink,
  CenteredContainer,
  Description,
  Link,
  LinkIconCard,
  Subtitle,
  Title,
  TitleProyects,
  Wrapper,
} from "./ProyectsStyled";

const Proyects = ({ data }) => {
  console.log(data);

  return (
    <CenteredContainer>
      <TitleProyects>Projects</TitleProyects>
      <Subtitle>Here Are My Main Projects</Subtitle>
      <Wrapper>
        {data &&
          data.map((project, index) => (
            <Card key={index}>
              <CardLink href={project.links[0].url} target="_blank">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0 0.75rem",
                  }}
                ></div>
                <div>
                  <Title>
                    {project.title}
                    <Link href={project.links[0].url} target="_blank">
                      <LinkIconCard
                        aria-label={`Visit ${project.title}`}
                        href={project.links[0].url}
                        target="_blank"
                      >
                        <FiArrowUpRight />
                      </LinkIconCard>
                    </Link>
                  </Title>
                  <Description>{project.description}</Description>
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    {project.technologies.map((tech, index) => (
                      <div
                        key={index}
                        style={{
                          ...(typeof tech === "object" ? tech.styles : {}),
                          width: "50px",
                          height: "50px",
                        }}
                      >
                        {typeof tech === "object" ? (
                          <img
                            src={tech.url}
                            alt={`Logo de ${tech.alt}`}
                            width="100%"
                            height="100%"
                          />
                        ) : (
                          <img
                            src={tech}
                            alt="tech"
                            width="100%"
                            height="100%"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </CardLink>
            </Card>
          ))}
      </Wrapper>
    </CenteredContainer>
  );
};

export default Proyects;
