import React, { useState } from "react";
import styled from "styled-components";
import { projects } from "../../data/constants"; // Ensure projects have categories
import ProjectCard from "../Cards/ProjectCard";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1100px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

export const Description = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    flex-wrap: wrap;
    margin-top: 2.5rem;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
`;

const FilterButton = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    background-color: ${({ selected }) => (selected ? '#ddd' : '#f0f0f0')}; // Change background based on selection
    color: #333;
    border-radius: 5px;
    transition: background-color 0.3s;

    &:hover {
        background-color: #ccc;
    }
`;

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleFilter = (category) => {
        setSelectedCategory(category);
    };

    const filteredProjects = selectedCategory === "All" 
        ? projects 
        : projects.filter(project => project.category === selectedCategory);

    return (
        <Container id="projects">
            <Wrapper>
                <Title>
                    Projects
                </Title>

                <Description>
                    Here are some of my Projects.
                </Description>

                <FilterContainer>
                    <FilterButton onClick={() => handleFilter("All")} selected={selectedCategory === "All"}>
                        All
                    </FilterButton>
                    <FilterButton onClick={() => handleFilter("web app")} selected={selectedCategory === "Web"}>
                        Web
                    </FilterButton>
                    <FilterButton onClick={() => handleFilter("Mobile App")} selected={selectedCategory === "Mobile"}>
                        Mobile
                    </FilterButton>
                    <FilterButton onClick={() => handleFilter("Deep Learning")} selected={selectedCategory === "AI"}>
                        AI
                    </FilterButton>
                </FilterContainer>

                <CardContainer>
                    {
                        filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))
                    }
                </CardContainer>
            </Wrapper>
        </Container>
    );
}

export default Projects;
