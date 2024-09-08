import globals from 'globals'
import pluginJs from '@eslint/js'

export default [
	// Конфигурация для всех JavaScript файлов
	{
		files: ['**/*.js'],
		languageOptions: {
			sourceType: 'commonjs',
			globals: globals.node, // Добавление глобальных переменных Node.js, включая process
		},
	},
	// Указание на использование глобальных переменных браузера (если требуется)
	{
		languageOptions: { globals: globals.browser },
	},
	// Использование рекомендованных правил eslint
	pluginJs.configs.recommended,
]
