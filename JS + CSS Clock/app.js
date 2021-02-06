const hourHand = document.querySelector('.hour-hand');
const minsHand = document.querySelector('.minutes-hand');
const secsHand = document.querySelector('.seconds-hand');

function getTime() {
  const now = new Date();

  // for seconds hand 
  const seconds = now.getSeconds();
  const secondsDegree = ((seconds / 60) * 360) + 90;
  if (secondsDegree === 90) {
    secsHand.classList.add("no-transition");
  } else {
    secsHand.classList.remove("no-transition");
  }
  secsHand.style.transform = `rotate(${secondsDegree}deg)`;

  // for minutes hand
  const minutes = now.getMinutes();
  const minsDegree = ((minutes / 60) * 360) +((seconds / 60) * 6) + 90;
  /*Assume that time is 17:17:41
    Calculate how much degrees minute hand make right now
    minsDegrees = (17/60) * 360 = 102
    Plus;
    Calculate how much degrees the elapsed seconds made our minute hand made;
    theDegreeFromSeconds = (41/60) *6= 4.1
    minDegree = 102 + 4.1 = 106.1
    We multiply by 6 beacuse each elapsed second made 6° on clock btw.
    Its is same for the hour degree calculation.*/
  minsHand.style.transform = `rotate(${minsDegree}deg)`;
  

  // for hours hand
  const hours = now.getHours();
  const hoursDegree = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;
};
setInterval(getTime, 1000);
getTime();