// Promesas

async function fetchData() {
	return 'peanut butter'
}

async function errorExcepcion() {
	throw new Error('error')
}

test('Validar cuando se termina una promesa', () => {
	return fetchData().then((data) => {
		expect(data).toBe('peanut butter')
	})
})

test('Validar promesas pero con async await', async () => {
	const data = await fetchData()
	expect(data).toBe('peanut butter')
})

test('Validar error de promesa dentro de un try catch', async () => {
	// Este metodo lo que le indicamos a jest es una afirmacion
	// y aqui estamos afirmando de que al menos fallara una vez al ejecutarse ese codigo
	// mandando una exepcion que debe capturar
	expect.assertions(1)
	try {
		throw new Error('error')
	} catch (e) {
		expect(e.message).toMatch('error')
	}
})

test('Puede validar las promesas resueltas y las que dar error con resolve y reject', async () => {
	/**
	 * Aqui indicamos que el metodo fetchData
	 * en el camino feliz retornara 'peanut butter'
	 */
	await expect(fetchData()).resolves.toBe('peanut butter')
})

test('Capturar error cuando es rejects', async () => {
	await expect(errorExcepcion()).rejects.toThrow('error')
})

test('Validar cuando estamos seguro de que va a lanzar una excepcion', () => {
	/**
	 * Aqui como tal no estamos valiando cuando retorna una excepcion
	 * si no lo que estamos validando es cuando controlamos una excepcion
	 * y estamos preguntando si contiene ese valor, mas no que la excepcion devolvio ese valor
	 * aqui estamos manejando el flujo controlado
	 */
	expect.assertions(1)
	return errorExcepcion().catch((e) => expect(e.message).toMatch('error'))
})

// callback
test('should first', () => {
	/**
	 *
	 * Para manejar las funciones callback debemos usar
	 * el metodo done que nos proporciona jest, ya que si no lo
	 * utilizamos la funcion terminara antes de que espere lo que estamos validando
	 */
	function callback(error, data) {
		if (error) {
			throw error
		}
		expect(data).toBe()
	}
})
