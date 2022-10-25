//Встроенный в node.js Модуль path предоставляет утилиты для работы с путями к файлам и каталогам
//Вместо path, названием используется nodePath потому что переменная path уже занята и используется для экспорта
import * as nodePath from "path";

// Метод resolve используется для нахождение абсолютного пути к текущей директории(если аргументом явно не указан искомый файл или папка)
// Для примера - C:\Users\860495\Desktop\GulpDev
// Метод basename преобразует абсолютный путь в имя файла или папки
// Будет - GulpDev
const rootFolder = nodePath.basename(nodePath.resolve());
const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
  src: {
    pug: `${srcFolder}/layout/pug/*.pug`,
    html: `${srcFolder}/layout/html/*.html`,
    scss: `${srcFolder}/scss/style.scss`,
    js: `${srcFolder}/js/app.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/svg/**/*.svg`,
    files: `${srcFolder}/files/**/*.*`,
  },
  build: {
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
    images: `${buildFolder}/img/`,
    svg: `${buildFolder}/img/svg`,
    fonts: `${buildFolder}/fonts/`,
    files: `${buildFolder}/files/`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
};
