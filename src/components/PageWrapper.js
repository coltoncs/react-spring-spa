import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
    position: absolute;
    width: 100%;    
    color: #9d8189;
`;

const PageWrapper = ({ children }) => {
    return (
        <Page>
            {children}
        </Page>
    )
}

export default PageWrapper;