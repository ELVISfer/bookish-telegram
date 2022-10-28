var config = require('./configuracion')
//let mathjs = require('mathjs')
var { atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt } = require('mathjs')
//var mathjs = require('mathjs')

class persona{
    id
    nombre
    apellido

    constructor(id, nombre, apellido, fechaNacimiento){
    
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.cansancio = 0
        this.fechaNacimiento = fechaNacimiento
        this.fechaCreacion = new Date()
        this.informacionCompleta = `${this.nombre} - ${this.apellido} - Fecha de nacimiento: ${this.fechaNacimiento}` 
        this.calcularEdad()
    }

    calcularEdad(){
        return (new Date() - this.fechaNacimiento) / 31557600000 //24 * 3600 * 365.25 * 1000
    }

    caminar(kilometrosCaminados){
        this.cansancio = this.cansancio + (1.5 * kilometrosCaminados)
        console.log(`${this.nombre} ha caminado ${kilometrosCaminados} km., por lo que se encuentra con un nivel de cansancio ${this.cansancio}`)
    }

    dormir(horasDeSueno){
        this.cansancio = this.cansancio - (2 * horasDeSueno)
        console.log(`${this.nombre} ha dormido ${horasDeSueno}, por lo que se encuentra con un nivel de cansancio ${this.cansancio}`)
    }

    hablar(){
        return null
    }
}

var persona1 = new persona(1, "Elvis", "Flores", new Date(2005, 9, 24)) 
var persona2 = new persona(2, "Angie", "Padilla", new Date(2010, 0, 10))


//Edad
//console.log(persona1.calcularEdad())
//persona1.fechaNacimiento = new Date(2006, 9, 24)
//console.log(persona1.calcularEdad())
//persona1.fechaNacimiento = new Date(2010, 0, 10)
//console.log(persona1.calcularEdad())

//Cansancio
console.log(persona1.cansancio)

persona1.caminar(10)
console.log(persona1.cansancio)

persona1.dormir(8)
console.log(persona1.cansancio)

console.log(round(e, 3))
//console.log(mathjs.log)

//persona1.caminar(15)
console.log(persona1)
console.log(persona2)

