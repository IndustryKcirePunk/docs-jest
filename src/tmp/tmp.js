function GetUserById(id) {
	if (id === 1) {
		throw new Error('No existe un usuario con ese id')
	}

	return 'Erick Torres'
}

function main() {
	try {
		GetUserById(1)
	} catch (error) {
		console.log(error)
	}
}

main()
