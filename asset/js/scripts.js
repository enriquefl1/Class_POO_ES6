// DATOS EXTRADIDOS DE LA BASE DE DATOS PACIENTES

const pacientes = [
    {
      nombre: "Franco Urra",
      edad: 47,
      rut: "12345678-9",
      diagnostico: "Hipertensión Arterial",
      consultorio: "Paine"
    },
    {
      nombre: "Matías Mesa",
      edad: 27,
      rut: "12345678-9",
      diagnostico: "Diabetes Mellitus 1",
      consultorio: "Buin"
    },
    {
      nombre: "Enrique Flores",
      edad: 37,
      rut: "12345678-9",
      diagnostico: "Sobrepeso Cronico",
      consultorio: "Paine"
    },
    {
      nombre: "Milagros Acosta",
      edad: 17,
      rut: "12345678-9",
      diagnostico: "Hipertensión Pulmonar",
      consultorio: "Buin"
    },
    {
      nombre: "Victor Fernandez",
      edad: 47,
      rut: "12345678-9",
      diagnostico: "Diabetes Mellitus 2",
      consultorio: "Paine"
    },
    {
      nombre: "Is Pinto",
      edad: 15,
      rut: "12345678-9",
      diagnostico: "Pancreatitis Aguda",
      consultorio: "Buin"
    },
    {
      nombre: "Francisco Lobos",
      edad: 2,
      rut: "12345678-9",
      diagnostico: "Neuroblastoma",
      consultorio: "Paine"
    },
    {
      nombre: "Jean Jaque",
      edad: 67,
      rut: "12345678-9",
      diagnostico: "Enfermedad de Parkinson",
      consultorio: "Buin"
    },
    {
      nombre: "Cesar Riveros",
      edad: 87,
      rut: "12345678-9",
      diagnostico: "Alopecia por Radiación",
      consultorio: "Paine"
    },
    {
      nombre: "Joshua Espinoza",
      edad: 77,
      rut: "12345678-9",
      diagnostico: "Enfermedad de Creutzfeldt-Jakob",
      consultorio: "Buin"
    },
  ];
  
class Consultorio {
    constructor ( consultorio, nombre ) {
      this._consultorio = () => consultorio;
      this._nombre = () => nombre;
    }
    get consultorio() {
      return this._consultorio();
    }
    get nombre() {
      return this._nombre();
    }
    
    imprimirFila(id, i) {
      const nombre = document.getElementById(id);
      nombre.innerHTML += `
      <tr>
          <th scope="row">${i}</th>
          <th>${this.consultorio}</th>
          <th>${this.nombre}</th>
      </tr>`
  }
}

class Paciente {
    constructor(nombre, edad, rut, diagnostico){
        this._nombre = () => nombre;
        this._edad = () => edad;
        this._rut = () => rut;
        this._diagnostico = () => diagnostico;
    }

    get nombre() {
        return this._nombre();
    }

    get edad() {
        return this._edad();
    }

    get rut() {
        return this._rut();
    }

    get diagnostico() {
        return this._diagnostico();
    }

    imprimirFila(id, i) {
        const nombre = document.getElementById(id);
        nombre.innerHTML += `
        <tr>
            <th scope="row">${i}</th>
            <th>${this.nombre}</th>
            <th>${this.edad}</th>
            <th>${this.rut}</th>
            <th>${this.diagnostico}</th>
        </tr>`
    }
}

// Cargo el Arreglo de pacientes y lo imprimo el DOM
pacientes.forEach( (paciente,i)=>{
        const datosPaciente = new Paciente(
            paciente.nombre,
            paciente.edad,
            paciente.rut,
            paciente.diagnostico
        );
        datosPaciente.imprimirFila("paciente", i+1);
})

// Cargo el Arreglo de Consultorios con los Pacientes asociados y lo imprimo el DOM
pacientes.forEach( (paciente,i)=>{
        const datosConsultorio = new Consultorio (
           paciente.consultorio,
           paciente.nombre
  );
   datosConsultorio.imprimirFila("consultorio", i+1)
})


const form = document.getElementById("formulario");
form.addEventListener("submit", (e)=> {
  e.preventDefault();
  console.log("submit");
})
