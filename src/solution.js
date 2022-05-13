function getPosition(string) {
  const splitString = string.split("");

  let direction = "N";

  let result = [0, 0];

  const biggerThan4 = int => {
    let res = null;

    {
      int > 4 ? (res = 4) : (res = int);
    }

    return res;
  };
  const lessThan0 = int => {
    let res = null;

    {
      int < 0 ? (res = 0) : (res = int);
    }

    return res;
  };

  for (let i = 0; i < splitString.length; i++) {
    const element = splitString[i];

    if (element === "M") {
      if (direction === "N") {
        answer = result[1] += 1;
        result[1] = biggerThan4(answer);
      } else if (direction === "E") {
        answer = result[0] += 1;
        result[0] = biggerThan4(answer);
      } else if (direction === "W") {
        answer = result[0] -= 1;
        result[0] = lessThan0(answer);
      } else {
        answer = result[1] -= 1;
        result[1] = lessThan0(answer);
      }
    } else if (element === "R") {
      if (direction === "N") {
        direction = "E";
      } else if (direction === "E") {
        direction = "S";
      } else if (direction === "S") {
        direction = "W";
      } else {
        direction = "N";
      }
    } else {
      if (direction === "N") {
        direction = "W";
      } else if (direction === "W") {
        direction = "S";
      } else if (direction === "S") {
        direction = "E";
      } else {
        direction = "N";
      }
    }
  }

  return `${result[0]} ${result[1]} ${direction}`;
}

// console.log(getPosition("MRMLMRM"));
// console.log(getPosition("RMMMLMM"));
// console.log(getPosition("MMMMM"));

module.exports = getPosition;
