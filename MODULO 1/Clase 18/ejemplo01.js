const datosUsuarios = [
    {
        nombre: 'Camila',
        password: '1234'
    },
    {
        nombre: 'Laura',
        password: '567894'
    },
    {
        nombre: 'Leonardo',
        password: 'abcder'
    },
    {
        nombre: 'Rodolfo',
        password: 'dfrtgh'
    },
    {
        nombre: 'Romina',
        password: 'abcd1234'
    }
]

const soloPasword = datosUsuarios.map(function (c) {
    return c.password;
})

console.log(soloPasword)