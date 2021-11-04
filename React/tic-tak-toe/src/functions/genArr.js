export function genArr(length) {
    const base = [];
    for (let i = 0; i < length; i++) {
      const temp = [];
      for (let j = 0; j < length; j++) {
        temp.push({
          pos: j + "," + i,
          number: 0,
        });
      }
      base.push(temp);
    }
    return base;
}