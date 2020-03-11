module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let members2 = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] == "string") {
      let k = 0;
      while (members[i][k] == " ") {
        k++;
      }
      members2.push(members[i].charAt(k).toUpperCase());
    }
  }
  members2 = members2.sort().join("");
  return members2;
};
