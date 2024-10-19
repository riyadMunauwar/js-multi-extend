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