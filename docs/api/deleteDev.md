# Eliminar desarrolladores

Permite eliminar un desarrollador a través de su id.

**URL** : `/developers/:id/`

**Método** : `DELETE`

**Autenticación** : NO

**Body**

```
None
```

## Respuesta exitosa

**Código** : `200 OK`

**Ejemplo de la respuesta**

```json{
    "id": "282ec265-eea2-43d4-a2b6-6fb788dc1c19",
    "state": "removed"
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

**Condición** : Si no se pudo eliminar el registro.

**Código** : `400 BAD REQUEST`

**Contenido** :

```json
{
    "error": "Could not be removed."
}
```