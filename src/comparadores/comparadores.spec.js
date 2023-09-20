import { sum } from '../sum'

test('comparador de igualdad', () => {
	/**
	 * Este compara por referencia y no por valor
	 * por lo que es util utilizarlo con tipos primitivos
	 */
	expect(sum(1, 3)).toBe(4)
})

test('comparador de igual por valor', () => {
	/**
	 * A diferencia del toBe este se encarga de verificar si
	 * el los valores son identicos y se enfoca mas por el valor que
	 * por la referencia, por lo que este es bueno usarlo con
	 * objectos y array
	 */
	expect([1]).toEqual([1])
})

/**
 * A medidas que estes haciendo pruebas vas a querer validar lo que
 * retorna tus funciones, pero aveces requiere distingir entre: false, null undefined
 * bueno jest nos proporciona varios helpers para eso
 */

test('Validar solo si es null', () => {
	const user = null
	expect(user).toBeNull()
	expect(user).toBeDefined()
	expect(user).not.toBeUndefined()
	expect(user).not.toBeTruthy()
	expect(user).toBeFalsy()
})

test('Validar que sea 0', () => {
	const amount = 0
	expect(amount).not.toBeNull()
	expect(amount).toBeDefined()
	expect(amount).not.toBeUndefined()
	expect(amount).not.toBeTruthy()
	expect(amount).toBeFalsy()
})

test('Validaciones para numeros', () => {
	const add = 2 + 2
	// Tiene que ser mayor que
	expect(add).toBeGreaterThan(3)
	// Tiene que ser mayor o igual que
	expect(add).toBeGreaterThanOrEqual(4)
	// Tiene que ser menor que
	expect(add).toBeLessThan(6)
	// Tiene que ser menor o igual que
	expect(add).toBeLessThanOrEqual(4)

	// toBe y toEqual funciona para numeros tambien
	expect(add).toBe(4)
	expect(add).toEqual(4)
})

test('Validar numeros flotanto', () => {
	/**
	 * Jest recomienda que usemos este metodo en vez de toEqual
	 * para evitar evitar errores de redondeo
	 */
	const value = 0.1 + 0.3
	expect(value).toBeCloseTo(value)
})

// Este da error
xtest('Validacion para strings con expresion regular - con error', () => {
	/**
	 * Podemos validar los string con expresiones regulares
	 */

	expect('teams').toMatch(/I/) // No hay I en la palabra teams
})

test('Validacion para strings con expresion regular - Sin error', () => {
	expect('Erick').toMatch(/i/)
})

test('Validaciones pahttps://jestjs.io/fr/docs/using-matchersra arrays - Vectores e iterables', () => {
	const listaDeCompras = ['books', 'laptos', 'mouse', 'pencil']
	/**
	 * Este metodo con ayuda a verificar de que exista un elemento en el array
	 */
	expect(listaDeCompras).toContain('mouse')
	expect(new Set(listaDeCompras)).toContain('books')
})

function compileAndroidCode() {
	throw new Error('you are using the wrong JDK!')
}

test('Validar excepciones', () => {
	expect(() => compileAndroidCode()).toThrow()
	expect(() => compileAndroidCode()).toThrow(Error)

	// Tambien podemos validar el mensaje que devuelve la excepcion
	// Observaciones: parece que no valida exactamente el mensaje de error
	expect(() => compileAndroidCode()).toThrow('you are using ')
	expect(() => compileAndroidCode()).toThrow(/JDK/)

	// Para validar que devuelve el mensaje exacto debemos de usar una expresion regular
	expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/)
})
