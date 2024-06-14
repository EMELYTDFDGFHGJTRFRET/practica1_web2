export class UpdateAsignacionDto {
    private constructor(
      public readonly id: number,
      public readonly idSerie?: string,
      public readonly idPersonaje?: string,
      public readonly papel?: string,
      public readonly tipoPapel?: string,
      public readonly fechaInicio?: string,
      public readonly fechaFin?: string,
      public readonly temporadas?: number
    ) {}
  
    static create(props: { [key: string]: any }): [string?, UpdateAsignacionDto?] {
      const { id, idSerie, idPersonaje, papel, tipoPapel, fechaInicio, fechaFin, temporadas } = props;
  
      if (id === undefined) return ['ID property is required', undefined];
  
      return [
        undefined,
        new UpdateAsignacionDto(id, idSerie, idPersonaje, papel, tipoPapel, fechaInicio, fechaFin, temporadas)
      ];
    }
  }
  