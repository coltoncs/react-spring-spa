import React from 'react';
import styled from 'styled-components';

import PageWrapper from '../components/PageWrapper';

const HomeSection = styled.div`
    margin: 0 auto;
    max-width: 80vw;
    color: #9d8189;
`;

const Introduction = styled.div`
    
`;

function Home() {
    return (
        <PageWrapper>
            <HomeSection>
                <h1>Welcome</h1>
                <Introduction>
                    <p>Welcome to my website built with create-react-app</p>
                </Introduction>
            </HomeSection>
        </PageWrapper>
    );
}

export default Home;