
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
export function random(min, max , integer = false) {
  if (!isNumber(min)) {
    console.error(` Аргумент min = ${min} не является числом`);
    return;
  }
  
  if (!isNumber(max)) {
    console.error(` Аргумент max = ${max} не является числом`);
    return;
  }

  if (min > max) {
    console.error(`Минимальное значение больше максимального`);
    return;
  }

  let rand = min + Math.random() * (max - min);
  if (integer) {
    rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  } else {
    return rand;
  }
}
// Возвращает истину если перменная равна числу, ложь при ` "", тексте, NaN, undefiend, infinity, -infinity`
export function isNumber(num) {
  switch (typeof num) {
    case "string":
      if (num.trim() === "") {
        return false;
      }
      return (typeof +num == "number") ? !isNaN(+num) : false;
    case "boolean":
      return false;
    case "number":
      if (isFinite(num)) {
        return true;
      } else if (num === 0) {
        return true;
      } else {
        return false;
      }
    default:
      return false;
  }
}
