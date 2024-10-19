import { validateBaseClasses } from './utils/validate';

/**
 * Creates a new class that extends multiple base classes
 * @param {...Class} baseClasses - The classes to extend from
 * @returns {Class} A new class that extends all base classes
 * @throws {Error} If invalid base classes are provided
 */
export function Extender(...baseClasses) {
    validateBaseClasses(baseClasses);

    class Base {
        constructor(...args) {
            baseClasses.forEach(BaseClass => {
                const baseInstance = new BaseClass(...args);
                Object.getOwnPropertyNames(baseInstance).forEach(prop => {
                    if (prop !== 'constructor') {
                        this[prop] = baseInstance[prop];
                    }
                });
            });
        }
    }

    baseClasses.forEach(BaseClass => {
        const baseProto = BaseClass.prototype;
        Object.getOwnPropertyNames(baseProto).forEach(prop => {
            if (prop !== 'constructor') {
                Base.prototype[prop] = baseProto[prop];
            }
        });
        
        Object.getOwnPropertyNames(BaseClass).forEach(prop => {
            if (prop !== 'prototype' && prop !== 'name' && prop !== 'length') {
                Base[prop] = BaseClass[prop];
            }
        });
    });

    return Base;
}

export default Extender;