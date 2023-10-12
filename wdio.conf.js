const dotenv = require('dotenv');

dotenv.config();
exports.config = {

    runner: 'local',
    specs: ['./features/**/*.feature'],
    exclude: [],
    maxInstances: 10,
    capabilities: [
        {
            browserName: 'chrome',
            'goog:chromeOptions': { args: ['--headless', `--window-size=${1920},${1080}`] }
        }
    ],
    defaultViewport: {
        width: 1920,
        height: 1080
    },
    logLevel: 'warn',
    bail: 0,
    baseUrl: 'https://onliner.by',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    reporters: [
        [
            'allure', {
                outputDir: 'allure-results',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: true,
                useCucumberStepReporter: true
            }
        ]
    ],
    cucumberOpts: {
        require: ['./features/step-definitions/steps.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    }
};
