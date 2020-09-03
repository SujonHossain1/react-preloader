import React from 'react';
import ContentLoader from 'react-content-loader';

function MyLoader() {
    return (
        <ContentLoader
            height={150}
            speed={1}
            backgroundColor={'#999'}
            foregroundColor={'#777'}
            viewBox="0 0 380 70"
        >
            {/* Only SVG shapes */}
            <rect x="0" y="0" rx="100" ry="100" width="70" height="70" />
            <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
            <rect x="80" y="50" rx="3" ry="3" width="250" height="10" />
        </ContentLoader>
    )
}

export default MyLoader;
