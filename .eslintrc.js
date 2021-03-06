module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['prettier', 'plugin:prettier/recommended'],
    plugins: ['@typescript-eslint'],
    env: {
        browser: true,
        node: true,
    },
    settings: {
        //自动发现React的版本，从而进行规范react代码
        react: {
            pragma: 'React',
            version: 'detect',
        },
    },
    parserOptions: {
        //指定ESLint可以解析JSX语法
        ecmaVersion: 2019,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
                printWidth: 120,
                semi: false,
                singleQuote: true,
                trailingComma: 'all',
                bracketSpacing: true,
                bracketSameLine: true,
                arrowParens: 'avoid',
                insertPragma: false,
                tabWidth: 4,
                useTabs: false,
            },
        ],
    },
}
