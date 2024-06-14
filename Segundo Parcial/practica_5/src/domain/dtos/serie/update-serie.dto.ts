export class UpdateSerieDto {
    private constructor(
      public readonly id: number,
      public readonly nombre?: string,
      public readonly clasificacion?: string
    ) {}
  
    static create(props: { [key: string]: any }): [string?, UpdateSerieDto?] {
      const { id, 'Nombre de la serie': nombre, Clasificación: clasificacion } = props;
  
      if (id === undefined) return ['ID property is required', undefined];
  
      return [undefined, new UpdateSerieDto(id, nombre, clasificacion)];
    }
  }
  