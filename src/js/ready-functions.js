
export function firstUpperLetter (str , space = false) {
  if (!str) {
    console.error(`Строка не найдена`);
    return
  };

  let pos;
  for (let i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      pos = i;
      break;
    }
  }

  if (space) {
    return str.slice(0, pos) + str[pos].toUpperCase(pos) + str.slice(pos + 1);
  } else {
    return str[pos].toUpperCase(pos) + str.slice(pos + 1);
  }
}

// Возврат случайного числа от min до max (не включая max), при integer вовзращает целые числа
export function random(min = 0, max = 1 , integer = false) {
  if (min > max) {
    console.error(`Минимальное значение больше максимального`);
    return 
  }

  let rand = min + Math.random() * (max - min);
  if (integer) {
    rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  } else {
    return rand;
  }
}
