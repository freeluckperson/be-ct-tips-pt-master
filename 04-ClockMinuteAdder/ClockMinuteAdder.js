function clockMinuteAdder(time, minutesToAdd) {
  const [hours, minutes] = time.split(":").map(Number);

  let newMinutes = minutes + minutesToAdd;
  let newHours = hours + Math.floor(newMinutes / 60);

  newMinutes %= 60;
  newHours %= 12;

  const newTime = `${(newHours === 0 ? 12 : newHours)
    .toString()
    .padStart(2, "0")}:${newMinutes.toString().padStart(2, "0")}`;

  return newTime;
}

module.exports = clockMinuteAdder;
