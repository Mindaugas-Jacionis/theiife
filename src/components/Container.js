import React from 'react';
import { rhythm } from '../utils/typography';

function Contianer({ children, style }) {
  return (
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: rhythm(24),
        width: '100%',
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)} ${rhythm(3 / 4)}`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default Contianer;
