# 🧾 Documentación del Código: Conceptos Básicos de JavaScript

Este archivo contiene un repaso de los **primeros conceptos fundamentales de JavaScript**, incluyendo comentarios, mensajes por pantalla, declaración de variables, constantes, operaciones básicas y salida de datos en el documento HTML.

---

## ✍️ Comentarios

En JavaScript existen dos tipos de comentarios:

### Comentario de una línea

```js
// Esto es un comentario de una línea
```

### Comentario de múltiples líneas

```js
/* Esto es un comentario
   de varias líneas */
```

Los comentarios sirven para **anotar** o **explicar el código**, y no se ejecutan.

---

## 🖨️ Mostrar mensajes por pantalla

### Mensaje en consola

```js
console.log("Hola mundo");
```

Muestra el texto en la consola del navegador (útil para depurar o ver valores internos).

### Insertar contenido en el HTML

```js
document.writeln('<p class="parrafoResaltado">Hola nuevamente</p>');
```

Muestra contenido directamente en la página. Se puede usar HTML dentro del string.

### Enlace con HTML

```js
document.writeln("<a href='http://127.0.0.1:5500/index.html'>Live server</a>");
```

Ejemplo de cómo insertar enlaces en la página desde JavaScript.

### Ventana emergente

```js
// alert("Esto es un mensaje en un alert")
```

Descomentar para mostrar un mensaje emergente al usuario. Sirve para mostrar advertencias o datos simples.

---

## 🧮 Declaración de Variables

Desde **ES6 (2015)**, se recomienda usar `let` y `const` en lugar de `var`.

### `let`

Permite declarar variables que **pueden cambiar** su valor.

```js
let anioActual;
anioActual = 2025;
```

También se puede declarar e inicializar en una sola línea:

```js
let precio = 20.5;
```

Se puede volver a asignar un valor:

```js
anioActual = 2024;
```

### Salida con texto y variable

```js
document.writeln("<br>El año actual es: " + anioActual);
```

---

## 🔒 Constantes

### `const`

Sirve para declarar variables cuyo valor **no se puede modificar**.

```js
const url = "http://127.0.0.1:5500/index.html";
```

Intentar cambiar su valor genera un **error**:

```js
// url = "hola mundo"; // ❌ Esto no se puede hacer
```

---

## ➕ Operaciones básicas

### Suma de dos números

```js
let numero1, numero2, resultado;
numero1 = 10;
numero2 = 25;
resultado = numero1 + numero2;
```

### Mostrar el resultado

```js
document.writeln("<br>El resultado de la suma es: " + resultado);
```

> 📌 **Nota:** Se puede propone como mejora reemplazar `let` por `const` en `numero1`, `numero2` y `resultado`, ya que sus valores no se reasignan después.

---

## 📚 Resumen de conceptos vistos

- Comentarios (`//`, `/* */`)
- `console.log()` para mensajes en consola
- `document.writeln()` para insertar contenido HTML desde JS
- `alert()` para ventanas emergentes
- Declaración de variables (`let`, `const`)
- Concatenación y visualización de texto con variables
- Operaciones matemáticas básicas (suma)

---

## 🙋‍♀️ Autora

**Emilse Andrea Arias**\
Ing. en sistemas, Desarrolladora fullstack – RollingCode School\
📍 Tucumán, Argentina

---

> *"Todo gran proyecto empieza con una línea de código (y probablemente un **`console.log`**)."* 🚀

