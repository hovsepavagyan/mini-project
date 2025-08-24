// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    // Параллельность можно уменьшить на слабых машинах
    fullyParallel: true,

    // Красивый HTML-репорт
    reporter: [['html', { open: 'never' }]],

    // Браузеры
    projects: [
        { name: 'chromium', use: { browserName: 'chromium' } },
        // { name: 'firefox',  use: { browserName: 'firefox' } },
        // { name: 'webkit',   use: { browserName: 'webkit' } },
    ],

    use: {
        baseURL: 'http://127.0.0.1:8080', // будем ходить сюда
        headless: false,                    // для локального дебага можно false
    },

    // Автозапуск dev-сервера перед тестами
    webServer: {
        command: 'npx http-server -p 8080 -c-1',
        port: 8080,
        // url: 'http://127.0.0.1:8080',
        reuseExistingServer: !process.env.CI, // локально переиспользуем, в CI всегда свежий
        timeout: 30 * 1000,
    },
});