# Estructuras de Decisión en JavaScript 🤔➡️⚡

Este documento explica el código que implementa estructuras condicionales en JavaScript para determinar si un usuario es mayor de edad.

## 📌 Estructuras Condicionales Básicas

El código muestra tres tipos de estructuras condicionales:

### 1. Condicional Simple (`if`)
```javascript
if(condicion logica) {
    // Código a ejecutar si la condición es verdadera
}
```

## 2. Condicional Doble (if-else)
```javascript
if(condicion logica) {
    // Código a ejecutar si la condición es verdadera
} else {
    // Código a ejecutar si la condición es falsa
}
```
## 2. Condicional Múltiple (if-else if)
```javascript
if(condicion logica 1) {
    // Código para condición 1 verdadera
} else if(condicion logica 2) {
    // Código para condición 2 verdadera
}
// Puede continuar con más else if o un else final
```

## 🛠️ Implementación en el Código
```javascript
let edad = parseInt(prompt("Ingresa tu edad"));

if (edad >= 18) {
  document.writeln("Sos mayor de edad");
} else {
  document.writeln("No sos mayor de edad");
}
```
## Explicación Paso a Paso:
### 1- Solicitud de entrada 🖊️

- prompt("Ingresa tu edad"): Muestra un cuadro de diálogo al usuario pidiendo que ingrese su edad.
- parseInt(): Convierte la entrada de texto (string) a un número entero.

### 2- Almacenamiento de la edad 💾
- let edad = ...: Almacena la edad ingresada en la variable edad.

### 3- Evaluación condicional ⚖️

- if (edad >= 18): Verifica si la edad es mayor o igual a 18.
- Si es verdadero: Ejecuta document.writeln("Sos mayor de edad")
- Si es falso: Ejecuta el bloque else con document.writeln("No sos mayor de edad")

### 4- Salida de resultado 📤

- document.writeln(): Escribe el resultado directamente en el documento HTML.

## 📝 Notas Importantes
- El código asume que el usuario ingresará un número válido.
- No hay manejo de errores para entradas no numéricas.

## 🚀 Posibles Mejoras
1- Validar que la entrada sea un número:
```javascript
if(isNaN(edad)) {
  document.writeln("Por favor ingresa un número válido");
}
```
2- Usar console.log() para depuración en lugar de modificar el documento.

---
"Los condicionales deciden el flujo de tu código, pero tu persistencia decide el flujo de tu aprendizaje. ¡Sigue codificando! 🚀"