@echo off
setlocal

rem Comando "npm start" para executar o script "start" do package.json
set "npmStart=npm run dev"

rem Executar o comando "npm start" usando o Prompt de Comando (CMD)
cmd /c %npmStart%

rem Capturar a saída de erro e de saída padrão
set "outputFile=%temp%\output.txt"
(
    echo Saída padrão:
    call %npmStart%
    echo.
) 2> %outputFile%

rem Exibir o conteúdo do arquivo de saída
type %outputFile%

rem Aguardar entrada do usuário
set /p "dummy=Pressione Enter para sair..."

rem Limpar a variável de ambiente e exibir mensagem de saída
endlocal
exit