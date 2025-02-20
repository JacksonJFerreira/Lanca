const { exec } = require('child_process');

const batFilePath = 'dev_start.bat';

// Executar o arquivo .bat no mesmo processo
const childProcess = spawn(batFilePath, [], { stdio: 'inherit' });

// Capturar a sa�da padr�o do processo filho
childProcess.stdout.on('data', (data) => {
    console.log(`Sa�da padr�o - : ${data}`);
});

// Capturar a sa�da de erro do processo filho
childProcess.stderr.on('data', (data) => {
    console.error(`Erro: ${data}`);
});

// Manipular o t�rmino do processo filho
childProcess.on('close', (code) => {
    console.log(`Processo filho encerrado com c�digo ${code}`);
});