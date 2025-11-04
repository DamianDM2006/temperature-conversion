console.log(`This is connected`);

const tempFahrenToCelsius = (degreeF) => {
  return ((degreeF - 32) * 5) / 9;
};

console.log(`${tempFahrenToCelsius(99)} Degrees Celcius`);

const describeTemp = (degreeF) => {
  const degreeC = tempFahrenToCelsius(degreeF);

  let tempType = undefined;

  if (degreeC < 0) {
    tempType = `Very Cold`;
  } else if (degreeC >= 0 && degreeC < 20) {
    tempType = `Cold`;
  } else if (degreeC >= 20 && degreeC < 30) {
    tempType = `Warm`;
  } else if (degreeC >= 30 && degreeC < 40) {
    tempType = `Hot`;
  } else {
    tempType = `Very Hot`;
  }

  return `${degreeF} Degrees Fahrenheit is ${degreeC} Degrees Celsius.
    This temperature can be described as ${tempType}. `;
};

const degreeF = prompt(`Degrees Fahrenheit:`);
const tempType = describeTemp(degreeF);
alert(tempType);
