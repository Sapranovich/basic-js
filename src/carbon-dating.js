const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity == "string" && !isNaN(sampleActivity)) {
    if (sampleActivity > 0 && sampleActivity <= 15) {
      let age = 0;
      sampleActivity = (sampleActivity / 10) * 10;
      let k = 0.693 / HALF_LIFE_PERIOD;
      age = Math.log(MODERN_ACTIVITY / sampleActivity) / k;
      return Math.abs(Math.ceil(age));
    } else return false;
  } else return false;
};
