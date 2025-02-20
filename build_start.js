const { exec } = require('child_process');
const readline = require('readline');

// Comando "npm start" para executar o script "start" do package.json
const npmStart = 'npm run dev-start';

// Executar o comando "npm start" em um novo processo
const childProcess = exec(npmStart);

// Capturar a sa�da padr�o do processo filho
childProcess.stdout.on('data', (data) => {
    console.log(`Sa�da padr�o: ${data}`);
});

// Capturar a sa�da de erro do processo filho
childProcess.stderr.on('data', (data) => {
    console.error(`Erro: ${data}`);
});

// Manipular o t�rmino do processo filho
childProcess.on('close', (code) => {
    console.log(`Processo filho encerrado com c�digo ${code}`);

    // Cria uma interface de leitura para aguardar a entrada do usu�rio
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Pressione Enter para sair...', () => {
        rl.close();
    });
});
