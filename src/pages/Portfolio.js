import React from 'react';
import styled from 'styled-components';

import PageWrapper from '../components/PageWrapper';

const PortfolioSection = styled.div`
    margin: 0 auto;
    max-width: 80vw;
    color: #9d8189;
`;

const GalleryView = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 90%;
`;

function Portfolio() {
  return (
    <PageWrapper>
      <PortfolioSection>
        <div>
          <h1>Portfolio</h1>
          <p>A showcase of some projects I've worked on throughout the years.</p>
        </div>
        <div>
          <div><h1>Project 1</h1><p>Some text about project 1</p></div>
          <div><h1>Project 2</h1><p>Some text about project 2</p></div>
          <div><h1>Project 3</h1><p>Some text about project 3</p></div>
          <div><h1>Project 4</h1><p>Some text about project 4</p></div>
        </div>
      </PortfolioSection>
    </PageWrapper>
  );
}

export default Portfolio;