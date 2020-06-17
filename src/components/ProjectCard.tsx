import React from "react";
import styled from "styled-components";

import WebsiteImage from "../images/website.svg";
import GithubImage from "../images/github.svg";

interface ProjectCardProps {
  title: string;
  content: string;
  website?: string;
  github?: string;
  background?: string;
}

type LinkProps = {
  Icon: React.ElementType;
  text: string;
  link: string;
};

const Container = styled.div`
  padding: 1.5rem 1rem;
  border-radius: 1rem;
  background: ${({ background }: any) => (background ? background : "none")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  margin: 0;
`;

const Info = styled.div`
  color: white;
`;

const Links = styled.div`
  display: flex;
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  color: white;

  svg {
    margin-right: 0.5rem;
  }
`;

const Link = ({ Icon, text, link }: LinkProps) => (
  <StyledLink href={link} target="_blank">
    <Icon />
    {text}
  </StyledLink>
);

const ProjectCard = ({
  title,
  content,
  website,
  github,
  background,
}: ProjectCardProps) => {
  return (
    <Container background={background}>
      <Info>
        <Title>{title}</Title>
        <p>{content}</p>
      </Info>
      <Links>
        {website && <Link Icon={WebsiteImage} text="View" link={website} />}
        {github && <Link Icon={GithubImage} text="Source" link={github} />}
      </Links>
    </Container>
  );
};

export default ProjectCard;
