export class AsignacionEntity {
    constructor(
      public id: number,
      public idSerie: number,
      public idPersonaje: number,
      public papel: string,
      public tipoPapel: string,
      public fechaInicio: string,
      public fechaFin: string,
      public temporadas: number
    ) {}
  
    public static fromObject(object: { [key: string]: any }): AsignacionEntity {
      const { id, idSerie, idPersonaje, papel, tipoPapel, fechaInicio, fechaFin, temporadas } = object;
      
      if (!id) throw 'ID is required';
      if (!idSerie) throw 'ID Serie is required';
      if (!idPersonaje) throw 'ID Personaje is required';
      if (!papel) throw 'Papel que interpreta is required';
      if (!tipoPapel) throw 'Tipo de papel is required';
      if (!fechaInicio) throw 'Fecha inicio is required';
      if (!fechaFin) throw 'Fecha fin is required';
      if (temporadas === undefined) throw 'Temporadas is required';
  
      return new AsignacionEntity(id, idSerie, idPersonaje, papel, tipoPapel, fechaInicio, fechaFin, temporadas);
    }
  }
  