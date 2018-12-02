module.exports = {
    globals: {
        __TS_CONFIG__: {
            target: 'es6',
            module: 'commonjs',
            moduleResolution: 'node'
        },
        __TRANSFORM_HTML__: true
    },
    setupTestFrameworkScriptFile: '<rootDir>/test/config/setupJest.ts',
    testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
    transform: {
        '^.+\\.(ts|js|html)$': 'jest-preset-angular/preprocessor.js'
    },
    resolver: '@nrwl/builders/plugins/jest/resolver',
    moduleFileExtensions: ['ts', 'js', 'html'],
    collectCoverage: true,
    coverageReporters: ['html']
};
