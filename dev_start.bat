@echo off
setlocal

rem Comando "npm start" para executar o script "start" do package.json
set "npmStart=npm run dev"

rem Executar o comando "npm start" usando o Prompt de Comando (CMD)
cmd /c %npmStart%

rem Capturar a sa�da de erro e de sa�da padr�o
set "outputFile=%temp%\output.txt"
(
    echo Sa�da padr�o:
    call %npmStart%
    echo.
) 2> %outputFile%

rem Exibir o conte�do do arquivo de sa�da
type %outputFile%

rem Aguardar entrada do usu�rio
set /p "dummy=Pressione Enter para sair..."

rem Limpar a vari�vel de ambiente e exibir mensagem de sa�da
endlocal
exit