import React from 'react'

const Rough = () => {
  return <>
           <div className="absolute inset-0 z-0">
         <LightPillar
           topColor="#df4343"
           bottomColor="#fcc01e"
           intensity={0.9}
           rotationSpeed={0.4}
           glowAmount={0.004}
           pillarWidth={3.1}
           pillarHeight={0.7}
           noiseIntensity={0.4}
           pillarRotation={230}
           interactive={false}
           mixBlendMode="screen"
           quality="high"
         />
       </div>
     
  </>
}

export default Rough