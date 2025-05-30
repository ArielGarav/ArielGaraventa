import PropTypes from "prop-types";
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
  return (
    <CenteredContainer>
      <TitleProyects>Projects and Professional Experience</TitleProyects>
      <Subtitle>Here Are My Main Projects</Subtitle>
      <Wrapper>
        {data.map((project, index) => (
          <Card key={index}>
            <CardLink
              href={project.links[0].url}
              target="_blank"
              rel="noopener noreferrer"
            >
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
                  <Link
                    href={project.links[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkIconCard aria-label={`Visit ${project.title}`}>
                      <FiArrowUpRight />
                    </LinkIconCard>
                  </Link>
                </Title>
                <Description>{project.description}</Description>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      style={{
                        ...(typeof tech === "object" ? tech.styles : {}),
                        width: "50px",
                        height: "50px",
                      }}
                    >
                      <img
                        src={typeof tech === "object" ? tech.url : tech}
                        alt={
                          typeof tech === "object"
                            ? `Logo de ${tech.alt}`
                            : "tech"
                        }
                        width="100%"
                        height="100%"
                      />
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

Proyects.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      technologies: PropTypes.arrayOf(
        PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.shape({
            url: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
            styles: PropTypes.object, // coma aquí porque es un objeto dentro de un array
          }),
        ]), // coma aquí porque termina array en oneOfType
      ).isRequired,
      links: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string.isRequired,
        }), // coma aquí porque termina arrayOf
      ).isRequired,
    }),
  ).isRequired,
};

export default Proyects;
