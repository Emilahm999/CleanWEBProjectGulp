// Возврващает строку с большой заглавной буквой, при space все пробелым введенные до строки сохранятся.
export function firstUpperLetter (str , space = false) {
  if (!str) {
    console.log(`Строка не найдена`);
    return str
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
