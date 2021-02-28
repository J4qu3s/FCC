function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  let data = [...arr];
  let everyArr = [];

  for(var i = 0; i < data.length; i++){
    console.log(data[i]);
    everyArr.push(data[i]);
  }

  const calculateT = alt => {
    return Math.round((2*Math.PI)*Math.sqrt(Math.pow((earthRadius+alt),3)/GM));
  };

  everyArr.forEach((e, index) => {

    e.orbitalPeriod = calculateT(e.avgAlt);
    delete e.avgAlt;
  });

  return everyArr;
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])
