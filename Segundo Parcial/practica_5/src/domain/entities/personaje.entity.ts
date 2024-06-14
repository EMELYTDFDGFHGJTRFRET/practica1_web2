export class PersonajeEntity {
    constructor(
      public id: number,
      public nombre: string,
      public aniosExperiencia: number
    ) {}
  
    public static fromObject(object: { [key: string]: any }): PersonajeEntity {
      const { id, 'Nombre del personaje': nombre, 'Años de experiencia': aniosExperiencia } = object;
      
      if (!id) throw 'ID is required';
      if (!nombre) throw 'Nombre del personaje is required';
      if (aniosExperiencia === undefined) throw 'Años de experiencia is required';
  
      let newNombre;
      if (nombre) {
        newNombre = nombre.toUpperCase();
        if (newNombre !== nombre) {
          throw 'Nombre del personaje must be uppercase';
        }
      }
  
      return new PersonajeEntity(id, nombre, aniosExperiencia);
    }
  }
  