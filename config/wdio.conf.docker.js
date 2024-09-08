export const config = {
 
    runner: 'local',
    
    specs: [
        '../tests/specs/**.spec.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
  
    maxInstances: 5,
    port: 4444,
  
    logLevel: 'info',


    bail: 0,
    
    baseUrl: 'http://localhost',

    waitforTimeout: 10000,

    connectionRetryTimeout: 180000,
 
    connectionRetryCount: 3,
  
    services: ['docker'],
    hostname : 'localhost',
    capabilities:[
        {
            maxInstances: 5,
            browserName: 'chrome',
            acceptInsecureCerts: true,
            'goog:chromeOptions': {
              args: ['--disable-gpu', '--disable-dev-shm-usage']
            }            
        
          },
          {
            maxInstances: 5,
            browserName: 'MicrosoftEdge',
            acceptInsecureCerts: true,
            'moz:firefoxOptions': {
              args: ['--disable-gpu', '--disable-dev-shm-usage']
            }      
          },
          {
            // Firefox configuration
            browserName: 'firefox',
            'moz:firefoxOptions': {
              args: ['--headless', '--window-size=1920,1080'], // Optional, headless mode
            },
            maxInstances: 1,
          },
    ],

    framework: 'mocha',
    mochaOpts: {
      ui: 'bdd',
      timeout: 120000,
      requires: ['ts-node-register' ],
  },
  
    reporters: ['spec'],
    reporters: ['spec',['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false
    }]],
    afterStep: async function (step, scenario, { error, duration, passed }, context) {
        await browser.takeScreenshot();
      },
  
}
