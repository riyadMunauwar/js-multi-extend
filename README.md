# js-multi-extend

A lightweight, powerful utility for implementing multiple inheritance in JavaScript. Supports ESM, CommonJS, and UMD modules with full TypeScript support.


## Features

- 🚀 Multiple inheritance for JavaScript classes
- 💪 Supports instance properties, methods, and static members
- 🔄 Constructor chaining
- 📦 Multiple module formats (ESM, CommonJS, UMD)
- 📝 TypeScript definitions included
- 🎯 Zero dependencies
- ✨ Simple and intuitive API

## Installation

```bash
npm install js-multi-extend
```

or

```bash
yarn add js-multi-extend
```

## Basic Usage

```javascript
import { Extender } from 'js-multi-extend';

// Define base classes
class Logger {
    log(message) {
        console.log(`[LOG]: ${message}`);
    }
}

class EventEmitter {
    emit(event, data) {
        console.log(`[EVENT]: ${event}`, data);
    }
}

// Create a class that inherits from both Logger and EventEmitter
class MyService extends Extender(Logger, EventEmitter) {
    doSomething() {
        this.log('Operation started');
        this.emit('operation', { status: 'started' });
    }
}

// Use the combined functionality
const service = new MyService();
service.doSomething();
```

## Advanced Examples

### 1. Class with Constructor and Static Methods

```javascript
class Database {
    constructor(config) {
        this.config = config;
    }

    connect() {
        console.log('Connecting to DB:', this.config.url);
    }

    static validateConfig(config) {
        return !!config.url;
    }
}

class Cache {
    constructor(config) {
        this.ttl = config.ttl || 3600;
    }

    set(key, value) {
        console.log(`Caching ${key} for ${this.ttl}s`);
    }

    static clearAll() {
        console.log('Clearing all cache');
    }
}

class DataService extends Extender(Database, Cache) {
    constructor(config) {
        super(config);  // Passes config to both Database and Cache
        this.initialized = true;
    }

    async getData(key) {
        this.connect();
        this.set(key, 'value');
        return 'data';
    }

    static init(config) {
        if (this.validateConfig(config)) {
            return new DataService(config);
        }
        throw new Error('Invalid config');
    }
}

// Usage
const service = DataService.init({ url: 'mongodb://localhost', ttl: 1800 });
await service.getData('user:123');
DataService.clearAll();  // Inherited static method
```

### 2. Composing Multiple Behaviors

```javascript
// Authentication behavior
class Auth {
    authenticate(token) {
        this.token = token;
        console.log('Authenticated');
    }
}

// HTTP behaviors
class Http {
    async get(url) {
        console.log('GET:', url);
    }

    async post(url, data) {
        console.log('POST:', url, data);
    }
}

// Validation behavior
class Validator {
    validate(schema, data) {
        console.log('Validating:', data);
        return true;
    }
}

// Combine all behaviors into an API client
class ApiClient extends Extender(Auth, Http, Validator) {
    constructor(baseUrl) {
        super();
        this.baseUrl = baseUrl;
    }

    async createUser(userData) {
        this.authenticate(this.token);
        
        if (this.validate('user', userData)) {
            return this.post('/users', userData);
        }
    }
}

// Usage
const api = new ApiClient('https://api.example.com');
api.authenticate('token123');
await api.createUser({ name: 'John' });
```

### 3. UI Component Composition

```javascript
// Draggable behavior
class Draggable {
    enableDrag() {
        console.log('Drag enabled');
    }
}

// Resizable behavior
class Resizable {
    enableResize() {
        console.log('Resize enabled');
    }
}

// Focusable behavior
class Focusable {
    onFocus() {
        console.log('Focus gained');
    }
}

// Create an interactive component
class Window extends Extender(Draggable, Resizable, Focusable) {
    constructor(title) {
        super();
        this.title = title;
    }

    initialize() {
        this.enableDrag();
        this.enableResize();
        this.onFocus();
    }
}

// Usage
const window = new Window('My Window');
window.initialize();
```

## API Documentation

### Extender(...baseClasses)

Creates a new class that extends multiple base classes.

**Parameters:**
- `...baseClasses`: Any number of classes to inherit from

**Returns:**
- A new class that combines all base classes

**Example:**
```javascript
class MyClass extends Extender(ClassA, ClassB, ClassC) {
    // Your class implementation
}
```

## Module Formats

### ES Modules
```javascript
import { Extender } from 'js-multi-extend';
```

### CommonJS
```javascript
const { Extender } = require('js-multi-extend');
```

### Browser (UMD)
```html
<script src="https://unpkg.com/js-multi-extend"></script>
<script>
    const { Extender } = window.jsMultiExtend;
</script>
```

## TypeScript Support

TypeScript definitions are included. Use them like this:

```typescript
import { Extender } from 'js-multi-extend';

class A {
    methodA(): string {
        return 'A';
    }
}

class B {
    methodB(): number {
        return 42;
    }
}

class C extends Extender(A, B) {
    methodC(): string {
        return this.methodA() + this.methodB();
    }
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Issues

If you find any bugs or have feature requests, please create an issue:

- General Issues: [issue@riyadmunauwar@gmail.com](mailto:issue@riyadmunauwar@gmail.com)
- Other Inquiries: [hello@riyadmunauwar@gmail.com](mailto:hello@riyadmunauwar@gmail.com)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Riyad Munauwar**

- GitHub: [www.github.com/riyadMunauwar](https://www.github.com/riyadMunauwar)
- Email: [hello@riyadmunauwar@gmail.com](mailto:hello@riyadmunauwar@gmail.com)

## Acknowledgments

- Inspired by the need for clean multiple inheritance in JavaScript
- Thanks to all contributors