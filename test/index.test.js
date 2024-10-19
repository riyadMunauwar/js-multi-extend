import { Extender } from '../src';

describe('Extender', () => {
    class A {
        methodA() { return 'A'; }
        static staticA() { return 'staticA'; }
    }

    class B {
        constructor(name) {
            this.name = name;
        }
        methodB() { return this.name; }
    }

    test('should create a class with multiple inheritance', () => {
        class C extends Extender(A, B) {
            methodC() { return 'C'; }
        }

        const instance = new C('test');
        expect(instance.methodA()).toBe('A');
        expect(instance.methodB()).toBe('test');
        expect(instance.methodC()).toBe('C');
        expect(C.staticA()).toBe('staticA');
    });

    test('should throw error for invalid base classes', () => {
        expect(() => Extender()).toThrow();
        expect(() => Extender(null)).toThrow();
        expect(() => Extender(A, null)).toThrow();
    });
});