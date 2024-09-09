import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherRecognition from "./images/Weather Recognition.png";
import  Butterfly from './images/Butterfly.png';
import  GradedDatathon from './images/Graded Datathon.png';
import Travel from './images/Travel.png';
import Employment from './images/Employment.png';
import Airline from './images/Airline.png';

function getRandomStartAndEndDate() {
  const now = new Date();
  const oneWeekInMilliseconds = 7 * 24 * 60 * 60 * 1000;
  
  
  const startTime = now.getTime() - oneWeekInMilliseconds + (Math.random() * 2 * oneWeekInMilliseconds);
  const startsIn = new Date(startTime);

  const duration = 1 + Math.random() * 6; 
  const endsIn = new Date(startTime + duration * 24 * 60 * 60 * 1000); 

  return { startsIn, endsIn };
}
const challenges = [
  {
    title: 'Data Science Bootcamp - Graded Datathon',
    ...getRandomStartAndEndDate(),
    image:GradedDatathon,
    buttonLabel: 'Participate Now',
    description:'Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model.Your Task is to build an Image Classification Model using CNN that classifies to which class of weather each image belongs to.',
    level:'Easy'
  },
  {
    title: 'Data Sprint 72 - Butterfly Identification',
    ...getRandomStartAndEndDate(),
    image: Butterfly,
    buttonLabel: 'Participate Now',
    description:'Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model.Your Task is to build an Image Classification Model using CNN that classifies to which class of weather each image belongs to.',
    level:'Hard'
  },
  {
    title: 'Data Sprint 71 - Weather Recognition',
    ...getRandomStartAndEndDate(),
    image:WeatherRecognition,
    buttonLabel: 'Participate Now',
    description:'Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model.Your Task is to build an Image Classification Model using CNN that classifies to which class of weather each image belongs to.',
 level:'Medium'
  },
  {
    title: 'Data Sprint 70 - Airline Passenger Satisfaction',
    ...getRandomStartAndEndDate(),
    image: Airline,
    buttonLabel: 'Participate Now',
    description:'Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model.Your Task is to build an Image Classification Model using CNN that classifies to which class of weather each image belongs to.',
   level:'Medium'
  },
  {
    title: 'Engineering Graduates Employment Outcomes',
    ...getRandomStartAndEndDate(),
    image:Employment,
    buttonLabel: 'Participate Now',
    description:'Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model.Your Task is to build an Image Classification Model using CNN that classifies to which class of weather each image belongs to.',
    level:'Easy'
  },
  {
    title: 'Travel Insurance Claim Prediction',
    ...getRandomStartAndEndDate(),
    image: Travel,
    buttonLabel: 'Participate Now',
    description:'Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model.Your Task is to build an Image Classification Model using CNN that classifies to which class of weather each image belongs to.',
    level:'Hard'
  }
];

localStorage.setItem('challenges', JSON.stringify(challenges))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);


reportWebVitals();
