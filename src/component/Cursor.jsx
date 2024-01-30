import React from "react";
import AnimatedCursor from "react-animated-cursor"

export default function App() {
  return (
    <div className="App">
      <AnimatedCursor
      innerSize={10}
      outerSize={30}
      innerScale={2}
      outerScale={1}
      outerAlpha={0}
      hasBlendMode={true}
      innerStyle={{
        backgroundColor: '#333'
      }}
      outerStyle={{
        border: '3px solid #333'
      }}
      
      clickables={[
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        {
          target: '.custom',
          options: {
            innerSize: 12,
            outerSize: 12,
            color: '255, 255, 255',
            outerAlpha: 0.3,
            innerScale: 0.7,
            outerScale: 5
          }
        }
      ]}
      
      trailingSpeed={8}
      showSystemCursor={false}/>
    </div>
  );
}