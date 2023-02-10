import React, { useState } from 'react';

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);

  return (
    <>
      { showHeader && (
        <h1>This is the header component</h1>
      )}
      <button onClick={() => setShowHeader(!showHeader)}>
        { showHeader ? 'Hide' : 'Show' }
      </button>
    </>
  );
};

export default Header;
