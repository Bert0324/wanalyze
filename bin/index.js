#!/usr/bin/env node

const { exec } = require('child_process');

const mainTask = () => {
    if (process.argv.includes('--analyze')) {
        exec('webpack-bundle-analyzer ./dist/stats.json');
        return;
    }
    
    const command = [...process.argv];
    command.shift();
    command.shift();
    
    exec(`webpack-dashboard -- ${command.join(' ')}`);
}

mainTask();


