export class CreateSerieDto {
    private constructor(
      public readonly id: number,
      public readonly nombre: string,
      public readonly clasificacion: string
    ) {}
  
    static create(props: { [key: string]: any }): [string?, CreateSerieDto?] {
      const { ID, 'Nombre de la serie': nombre, Clasificación: clasificacion } = props;
  
      if (!ID) return ['ID property is required', undefined];
      if (!nombre) return ['Nombre de la serie property is required', undefined];
      if (!clasificacion) return ['Clasificación property is required', undefined];
  
      return [undefined, new CreateSerieDto(ID, nombre, clasificacion)];
    }
  }
  