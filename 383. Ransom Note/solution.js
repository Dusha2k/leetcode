const canConstruct = (ransomNote, magazine) => {
  const bufferLength = magazine.length;
  for (let i = 0; i < ransomNote.length; i++) {
    for (let j = 0; j < magazine.length; j++) {
      if (ransomNote[i] === magazine[j]) {
        magazine =
          magazine.substring(0, j) + magazine.substring(j + 1, magazine.length);
        break;
      }
    }
  }
  return magazine.length === bufferLength - ransomNote.length;
};
