/**
 * Validates the base classes passed to Extender
 * @param {Array<Class>} baseClasses - Array of classes to validate
 * @throws {Error} If validation fails
 */
export function validateBaseClasses(baseClasses) {
    if (!Array.isArray(baseClasses) || baseClasses.length === 0) {
        throw new Error('At least one base class must be provided');
    }

    baseClasses.forEach((BaseClass, index) => {
        if (typeof BaseClass !== 'function' || !BaseClass.prototype) {
            throw new Error(`Invalid base class at index ${index}`);
        }
    });
}