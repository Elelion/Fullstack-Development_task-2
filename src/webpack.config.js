// подключаем базовые переменные
// модуль для управления путями
const path = require('path')

// сам вебпак
// const webpack = require('webpack')

module.exports = {
  // базовый путь к проекту
  // content: path.resolve(__dirname, 'src'),
  
  //указываем где будет находиться наш файл  
  // точка входа JS
  entry: {
    entry: ['./blocks/templates/button-standard/button-standard__ripple.js',
      './blocks/templates/chart-percentage/chart-percentage.js']
    // modules: ["./src/js-modules/script1", "./src/js-modules/script1"]
    // основной файл приложение
    // app: [
    //   './applications/app.js'   
    // ],
  },
  
  mode: "development",
  
	//указываем файл, куда будет компилироваться наш проект
	output: {
		//указываем каталог где будет собираться сборка
		path: path.join(__dirname, ''),

		//указываем как будет называться наш файл, в котором будет сборка    
    filename: './scripts.js', //[name] - заменяет имя файла автоматом на имя, что было в основном файле (см.выше)

		//Указываем относительный путь, где будет статические другие файлы
    publicPath: 'build'
	},
}