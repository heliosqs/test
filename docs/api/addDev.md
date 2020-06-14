# Listar desarrolladores

Permite agregar un desarrollador al repositorio de la aplicación.

**URL** : `/developers/`

**Método** : `POST`

**Autenticación** : NO

**Body**

```json
{
    "nombres_completos": ["Nombre del desarrollador"],
    "link_github": ["Enlace de github del desarrollador"],
    "tecnologias_conocidas": ["Lista de tecnología que el desarrollador conoce"]
}
```

**Ejemplo del Body**

```json
{
    "nombres_completos": "Elio Quevedo",
    "link_github": "https://github.com/heliosqs/",
    "tecnologias_conocidas": ["Python", "Java", "NodeJS"]
}
```

## Respuesta exitosa

**Código** : `200 OK`

**Ejemplo de la respuesta**

```json{
    "id": "4b6a43fb-7531-4caf-82d6-75153cf0fc07",
    "nombres_completos": "Elio Quevedo",
    "link_github": "https://github.com/heliosqs/",
    "tecnologias_conocidas": ["Python", "Java", "NodeJS"]
}
```