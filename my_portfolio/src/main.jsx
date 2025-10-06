import React from 'react';
import { createRoot } from 'react-dom/client';
import TextPressure from './reactBits/TextAnimations/TextPressure/TextPressure.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
  <div style={{ position: 'relative', height: '300px', padding: '40px' }}>
    <TextPressure
      text="Hello!"
      flex={true}
      alpha={false}
      stroke={false}
      width={true}
      weight={true}
      italic={true}
      textColor="#ffffff"
      strokeColor="#ff0000"
      minFontSize={36}
    />
  </div>
);