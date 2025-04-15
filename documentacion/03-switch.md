# 📝 Documentación del Código: Cajero Automático 🏧
## 🔍 Descripción General
Este código simula las operaciones básicas de un cajero automático 💰, permitiendo al usuario realizar las siguientes acciones:

1. Consultar saldo 💵
2. Depositar dinero 📥
3. Extraer dinero 📤
4. Salir del sistema 🚪

## � Estructura del Código
### 🔢 Entrada del Usuario
El programa comienza pidiendo al usuario que elija una opción:

```javascript
const opcion = parseInt(prompt('Seleccione una opción: 1- consultar el saldo, 2- depositar dinero, 3- extraer dinero, 4- salir.'))
let saldo = 10000  // 💰 Saldo inicial: $10,000
```
📌 Nota:

- prompt() muestra un cuadro de diálogo para que el usuario ingrese datos.
- parseInt() convierte el texto ingresado en un número.

### 🔄 Estructura switch (Selector de Opciones)
Dependiendo de la opción ingresada, el programa ejecuta diferentes acciones:

### 1️⃣ Caso 1: Consultar Saldo 💵
```javascript
case 1:
case "1":
case 'saldo':
    document.writeln('El saldo es $' + saldo);
    break;
```
📌 ¿Qué hace?

 - Muestra el saldo actual en pantalla.
 - Acepta diferentes formas de escribir la opción (1, "1", 'saldo').

### 2️⃣ Caso 2: Depositar Dinero 📥
```javascript
case 2:
    const deposito = Number(prompt('Ingresa el monto a depositar')); // 💬 Pide el monto
    saldo = saldo + deposito; // ➕ Actualiza el saldo
    document.writeln(`Depositaste $${deposito}, tu saldo actual es $${saldo}`); // 📝 Muestra el nuevo saldo
    break;
```

📌 ¿Qué hace?
 - Pide al usuario el monto a depositar.
 - Suma el monto al saldo actual.
 - Muestra un mensaje con el depósito y el nuevo saldo.

### 3️⃣ Caso 3: Extraer Dinero 📤
```javascript
case 3:
    const extraccion = Number(prompt('Ingresa el monto a extraer')); // 💬 Pide el monto
    if (extraccion <= saldo) {  // ✅ Verifica si hay saldo suficiente
        saldo = saldo - extraccion; // ➖ Actualiza el saldo
        document.writeln(`Monto a extraer -$${extraccion}, tu saldo actual es $${saldo}`); // 📝 Muestra el nuevo saldo
    } else {
        document.writeln(`❌ Saldo insuficiente`); // ⚠️ Si no hay suficiente dinero
    }
    break;
```

📌 ¿Qué hace?

 - Pide al usuario el monto a retirar.
 - Verifica si hay suficiente saldo.
     - ✅ Si hay saldo suficiente: resta el monto y muestra el nuevo saldo.
     - ❌ Si no hay saldo suficiente: muestra un mensaje de error.

### 4️⃣ Caso 4: Salir del Sistema �
```javascript
case 4:
    document.writeln('Cerrando el sistema...'); // 👋 Mensaje de despedida
    break;
```

📌 ¿Qué hace?

Muestra un mensaje indicando que el programa se está cerrando.

### ❓ Caso default (Opción Inválida)
```javascript
default:
    document.writeln('❌ Ingresaste una opción invalida'); // ⚠️ Mensaje de error
```
📌 ¿Qué hace?

Si el usuario ingresa una opción que no es 1, 2, 3 o 4, muestra un mensaje de error.

---
> *😎 "Los bugs son solo aventuras disfrazadas. ¡Depura con paciencia y celebra cada solución como una victoria! 🐞🎉"* 