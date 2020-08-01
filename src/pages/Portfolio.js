import React from 'react';
import styled from 'styled-components';

import PageWrapper from '../components/PageWrapper';

const PortfolioSection = styled.div`
    margin: 0 auto;
    max-width: 80vw;
    color: #9d8189;
`;

function Portfolio() {
  return (
    <PageWrapper>
      <PortfolioSection>
        <h1>Portfolio</h1>
      </PortfolioSection>
    </PageWrapper>
  );
}

export default Portfolio;