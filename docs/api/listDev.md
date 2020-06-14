# Listar desarrolladores

Listar los desarrolladores almacenados en el repositorio del servidor.

**URL** : `/developers/`

**Método** : `GET`

**Autenticación** : NO

**Body**

```
Ninguno
```

## Respuesta exitosa

**Código** : `200 OK`

**Ejemplo de la Respuesta**

```json[
{
    "id": "4b6a43fb-7531-4caf-82d6-75153cf0fc07",
    "nombres_completos": "Elio Quevedo",
    "github_link": "https://github.com/heliosqs/",
    "tecnologias_conocidas": ["Python", "Java", "NodeJS"]
},
...
]
```