const alumno = {}; //creo un objeto alumno que guardará una propiedad "nombre" y un arreglo con las "calificaciones" que corresponden a cada propiedad "nombre".

const registrarAlumno = () => { //funcion que registra alumnos
    let nombre = prompt("Ingrese el nombre del alumno:"); // se crea una variable "nombre" con let debido a que puede cambiar en el proximo while.
    const calificaciones = []; //arreglo en el cual seran ingresadas las calificaciones de los alumnos.

    while (nombre === null || nombre === "" || !/^[a-zA-Z\s]*$/.test(nombre)) { //este while verifica si el nombre es nulo, está vació o si contiene caracteres incorrectos.
        alert("Ingrese un nombre válido.");
        nombre = prompt("Ingrese el nombre del alumno:"); //aqui la variable "nombre" vuelve a pedir un valor de un nuevo prompt.
    }

    for (let i = 0; i < 5; i++) { //este bucle itera 5 veces el ingreso de calificaciones.
        const calificacion = parseFloat(prompt(`Ingrese la calificación ${i + 1}:`)); //el promt se transforma a floar para incluir decimales.
        if (calificacion < 1 || calificacion > 7 || isNaN(calificacion)) { //se verifica que la calificacion sea menor a 1 o mayor a 7 o que no sea número para enviar un error.
            alert("La calificación debe estar entre 1 y 7");
            i--; //se resta -1 al contador "i" para que el for vuelva a empezar de 0 o desde donde quedó despues del error.
        } else {
            calificaciones.push(calificacion); //Se listan las calificaciones ingresadas en el arreglo "calificaciones"
        }
    }

    alumno[nombre] = calificaciones; //se asocian las calificaciones al nombre correspondiente del alumno ingresado en el objeto.
    return alumno; //se retorna el objeto para posteriormente ser utilizado con la funcion buscarAlumno();
}

console.log(alumno); //se muestra en consola el objeto alumno con su propiedades y valores.

const buscarAlumno = (alumnos) => { //funcion que busca a alumnos y devuelve el promedio de sus calificaciones.
    const nombreBuscado = prompt("Ingrese el nombre del alumno para mostrar su promedio:");
    for (const nombreAlumno in alumnos) { //uso el bucle for mediante la sintaxis "in" (para recorrer objetos)
        if (nombreAlumno === nombreBuscado) { //se verifica que nombreAlumno sea igual al nombre buscado en el prompt
            const alumnoEncontrado = {
                nombre: nombreAlumno,
                calificaciones: alumnos[nombreAlumno] // se crea una instancia de un objeto de alumno encontrado para poder calcular el promedio
            };
            const sumaCalificaciones = alumnoEncontrado.calificaciones.reduce((suma, calificacion) => suma + calificacion, 0); //el metodo reduce me permite inicializar la suma en 0 y despues agrega la calificacion a la suma. Asi susesivamente.
            const promedio = sumaCalificaciones / alumnoEncontrado.calificaciones.length; // la suma de las calificaciones se divide por el largo del arreglo
            alert(`El promedio de notas de ${alumnoEncontrado.nombre} es ${promedio.toFixed(2)}.`); //se muestra el resultado.
        } else {
            alert("No se encontró ningún alumno con ese nombre."); //en caso de no encontrar el nombre guardado en el objeto, mostrará este error.
        }
    }
};

registrarAlumno();                      //se llaman las funciones en orden.
buscarAlumno(alumno);



// Sebastian Alejandro Mirnda Eade - Alumno Js Coderhouse.