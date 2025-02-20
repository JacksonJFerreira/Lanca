const { exec } = require('child_process');
const readline = require('readline');

// Comando "npm start" para executar o script "start" do package.json
const npmStart = 'npm run dev-start';

// Executar o comando "npm start" em um novo processo
const childProcess = exec(npmStart);

// Capturar a saída padrão do processo filho
childProcess.stdout.on('data', (data) => {
    console.log(`Saída padrão: ${data}`);
});

// Capturar a saída de erro do processo filho
childProcess.stderr.on('data', (data) => {
    console.error(`Erro: ${data}`);
});

// Manipular o término do processo filho
childProcess.on('close', (code) => {
    console.log(`Processo filho encerrado com código ${code}`);

    // Cria uma interface de leitura para aguardar a entrada do usuário
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Pressione Enter para sair...', () => {
        rl.close();
    });
});
