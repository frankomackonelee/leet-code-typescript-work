# leet-code-typescript-work

## Description

This project is a class library designed to help develop solutions to various leet code problems. It includes implementations of different algorithms and provides a framework for testing. The library is written in TypeScript and is intended for self-educational purposes.

## Getting Started

### Prerequisites

- Node.js (latest stable version)
- Visual Studio Code
- TypeScript

### Installation

1. ```bash
   git clone https://github.com/frankomackonelee/leet-code-typescript-work.git
   ```

2. ```bash 
    cd leet-code-typescript-work
    ```

3. ```bash
    npm install
    ```


### To set up debugging in visual studio

You will need to include a launch.json file in /.vscode folder
```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "program": "${workspaceFolder}/dist/index.js",
            "preLaunchTask": "Compile TypeScript",
            "outFiles": ["${workspaceFolder}/dist/**/*.js"],
            "sourceMaps": true
        }
    ]
}
```

And also a tasks.json file
```json
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "Compile TypeScript",
            "type": "shell",
            "command": "npx tsc",
            "group": {
                "kind": "build",
                "isDefault": true
            },
            "problemMatcher": "$tsc"
        }
    ]
}
```

### Testing
```bash
npm run test
```

### Running
```bash
npm build && start
```