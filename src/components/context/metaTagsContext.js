import React, { createContext, useContext, useState } from 'react';

const MetaTagsContext = createContext();

export const MetaTagsProvider = ({ children }) => {
    const [metaTags, setMetaTags] = useState({});

    const updateMetaTags = (newMetaTags) => {
        setMetaTags(newMetaTags);
    };

    return (
        <MetaTagsContext.Provider value={{ metaTags, updateMetaTags }}>
            {children}
        </MetaTagsContext.Provider>
    );
};

export const useMetaTags = () => {
    const context = useContext(MetaTagsContext);
    if (!context) {
        throw new Error('useMetaTags must be used within a MetaTagsProvider');
    }
    return context;
};