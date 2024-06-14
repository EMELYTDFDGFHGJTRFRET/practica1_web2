export class SerieEntity {
    constructor(
      public id: number,
      public nombre: string,
      public clasificacion: string
    ) {}
  
    public static fromObject(object: { [key: string]: any }): SerieEntity {
      const { id, 'Nombre de la serie': nombre, Clasificación: clasificacion } = object;
      
      if (!id) throw 'ID is required';
      if (!nombre) throw 'Nombre de la serie is required';
      if (!clasificacion) throw 'Clasificación is required';
  
      let newNombre;
      if (nombre) {
        newNombre = nombre.toUpperCase();
        if (newNombre !== nombre) {
          throw 'Nombre de la serie must be uppercase';
        }
      }
  
      return new SerieEntity(id, nombre, clasificacion);
    }
  }
  