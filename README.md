# Developer API
**Autor:** Elio Quevedo <*esqs.quevedo1994@gmail.com*>

## Descripción
El presente proyecto corresponde a un microservicio para la gestión de la información de desarrolladores, incluyendo las operaciones CRUD (Creación, eliminación, modificación, lectura) para el manejo de sus registros. La información necesaria para representar a un desarrollador es:

* nombres_completos: <String>
* link_github: <String>
* tecnologias_conocidas: <Array<String>>

## Arquitectura
## Configuración
## Despliegue
Este servidor puede ser desplegado dentro de un contenedor de Docker o en su defecto de manera local en una máquina que tiene instalado Nodejs.

### Despliegue en Docker
##### Prerequisitos
* Se considera que el usuario ha instalado docker previamente en la máquina en la cual se realizará el despliegue del servidor. Caso contrario, puede consultar el proceso para realizarlo en su sistema operativo desde la documentación oficial de [Docker](https://docs.docker.com/get-docker/).
* Cambiar el directorio de trabajo a la raiz del presente proyecto mediante el comando *cd*.

###### Pasos
1. Construir la imagen para el contenedor a partir del correspondiente Dockerfile. Como opción del parámetro tag se especifica el nombre para la imagen y su versión. En este caso la imagen se denomina *developer_api*.

```
$ docker build --tag developer_api:1.0 .
```

2. Inicializar el contenedor a partir de la imagen creada en el paso anterior.

```
$ docker run --publish 8000:8000 -it --name prod_developer_api developer_api:1.0 sh
```

# Despliegue Local
Permite realizar el despliegue en un servidor de aplicaciones de Nodejs. Este caso es útil durante el desarrollo del microservicio.

##### Prerequisitos
* Se considera que la maquina en la cual se realizará el despliegue tiene instalada la versión 12.18.0 (LTS para la fecha 14/06/2020) de Node JS.
* Cambiar el directorio de trabajo a src.

```
$ cd ./src
```

###### Pasos
1. Instalar las dependencias de desarrollo y ejecución.

```
$ npm install
```

2. Debido a que el proyecto usa Javascript ES6 se debe compilar previamente para la versión estable de Node JS.

```
$ npm run build
```

3. Ejecutar el servidor.

```
$ npm run start
```

## API
Los servicios para manejar los recursos de información de los desarrolladores y que no requieren autorización son:

* [Listar desarrolladores](docs/api/listDev.md) : `GET /developers/`
* [Crear desarrolladores](docs/api/addDev.md) : `POST /developers/`
* [Modificar los desarrolladores](docs/api/updateDev.md) : `PUT /developers/:id/`
* [Eliminar desarrolladores](docs/api/deleteDev.md) : `DELETE /developers/:id/`