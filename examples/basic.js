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