export class CreatePersonajeDto {
    private constructor(
      public readonly id: number,
      public readonly nombre: string,
      public readonly anosExperiencia: number
    ) {}
  
    static create(props: { [key: string]: any }): [string?, CreatePersonajeDto?] {
      const { ID, 'Nombre del personaje': nombre, 'Años de experiencia': anosExperiencia } = props;
  
      if (ID === undefined) return ['ID property is required', undefined];
      if (!nombre) return ['Nombre del personaje property is required', undefined];
      if (anosExperiencia === undefined) return ['Años de experiencia property is required', undefined];
  
      return [undefined, new CreatePersonajeDto(ID, nombre, anosExperiencia)];
    }
  }
  