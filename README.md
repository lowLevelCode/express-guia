# Guia de Instalacion de node y de express.

## Antes de iniciar.
Si no puedes clonar un repo es por que deseguro no tienes el proxy configurado.
* Configura el proxy:
```
git config --global http.proxy "<nombre de tu proxy>"
```
* Resetea el proxy una vez clonado el repo. 
```
git config --global http.proxy ""
```

## NVM o NODE
Instalar nvm - nvm es el manejador de versiones de node. puedes tener mas de una version de node en
la maquina instado. SI YA TIENES NODE NECESITAS DESINSTALARLO PARA MANEJAR DIFERENTES VERSIONES.

## Como instalar.

**links**
* Guia: https://docs.microsoft.com/en-us/windows/nodejs/setup-on-windows
* Descargar: https://github.com/coreybutler/nvm-windows/releases

### Pasos
1. Descargar el instalador -> nvm-setup.zip
2. Descomprimir el zip
3. Ejecutar el exe nvm-setup.exe -> instalador 
4. Verificar si se instaló correctamente. CMD nvm --version
5. Instalar la ultima version de node o la que se requiera. CMD nvm install latest o ( nvm install v10.15.3  ejemplo )
6. Verificar si node se instalo correctamente. CMD node --version


## CREAR PROYECTO EN EXPRESS

1.- Ir a carpeta en donde crearas el proyecto.
2.- Con el cmd en esa ruta ejecutar los siguientes comandos.

### Instalacion por default
```
# te crea un archivo package.json por default.
npm init -y 

# instala express en las dependencias del archivo package.json
npm install express --save

# instalar body-parser para parsear la entrada de data a formato json 
npm install body-parser --save

```
### Creacion del archivo principal.
Crear el **index.js** y colocar el codigo de tu servidor.


```
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000

/**  Parsers */
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


/** Routes */
app.get('/', (req, res) => {
  res.send('Hello World!')
});

/** Server listen to */
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
```

###  Como correrlo
```
# ejecutar al nivel del archivo.
node index.js
```


