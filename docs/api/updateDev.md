# Actualizar desarrolladores

Permite cambiar la información de un desarrollador si el id que se usa como parámetro existe en el repositorio.

**URL** : `/developers/:id/`

**Método** : `PUT`

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
    "nombres_completos": "Elio Santiago Quevedo Silva",
    "link_github": "https://github.com/heliosqs/",
    "tecnologias_conocidas": ["Python", "Java", "NodeJS"]
}
```

## Respuesta exitosa

**Código** : `200 OK`

**Ejemplo de la respuesta**

```json{
    "id": "b8d1b81b-e377-4171-bb9d-8ba372e14304",
    "state": "Updated"
}
```

## Respuesta de Error

**Condición** : Si el id del usuario no existe.

**Código** : `400 BAD REQUEST`

**Contenido** :

```json
{
    "error": "A developer with Id: 282ec265-eea2-43d4-a2b6-6fb788dc1c19 does not exist."
}
```

------

**Condición** : Si no se pudo actualizar el registro.

**Código** : `400 BAD REQUEST`

**Contenido** :

```json
{
    "error": "Could not be updated."
}
```