# CleanWEBProjectGulp
Сборка Gulp-2022.
Для работы необходимо установить NodeJS и по желанию git Bash.
Для создания нового проекта:
1. Копирование папок gulp, src, файлов gulpfile.js и package.json в новую папку(проект).
2. В папке с файлами открыть git Bush или другие подобные приложения и ввести "npm i" для установки
3. ввести команду "gulp"
4. после работы итог будет находится в папке dest


Особенности: 
- автоматическая сборка файлов из src в dist.
- преобразование изображений в формат Webp.
- преобразования scss в css.
- минимизация файлов style.css и app.js.
- отслеживание обновление файлов и обновление страницы браузера. 
- преобразовани шрифтов формата otf > ttf, ttf > woff.
- автоматическое подлкючения шрифтов в файле fonts.scss
- группировка @media
- автоматическое добавления вендорных префиксов
- добавление версии для кэшируемых данных
- включен файл reset.scss обнуляющий стили.
- включен swiper  API: https://swiperjs.com/swiper-api


Замечания:
-Не менять структуру.
-В ссылках на изображения в src писать начиная с "@img/..".
-Если возникает ошибка: "[HTML] Error: Callback called multiple times"...
Убедитесь что тег img написан в одну строку, путь к картинке указан без кириллицы и пробелов.
