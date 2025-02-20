const { exec } = require('child_process');

const batFilePath = 'dev_start.bat';

// Executar o arquivo .bat no mesmo processo
const childProcess = spawn(batFilePath, [], { stdio: 'inherit' });

// Capturar a saída padrão do processo filho
childProcess.stdout.on('data', (data) => {
    console.log(`Saída padrão - : ${data}`);
});

// Capturar a saída de erro do processo filho
childProcess.stderr.on('data', (data) => {
    console.error(`Erro: ${data}`);
});

// Manipular o término do processo filho
childProcess.on('close', (code) => {
    console.log(`Processo filho encerrado com código ${code}`);
});