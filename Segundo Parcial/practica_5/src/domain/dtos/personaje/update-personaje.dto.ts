export class UpdatePersonajeDto {
    private constructor(
      public readonly id: number,
      public readonly nombre?: string,
      public readonly aniosExperiencia?: number
    ) {}
  
    static create(props: { [key: string]: any }): [string?, UpdatePersonajeDto?] {
      const { id, 'Nombre del personaje': nombre, 'Años de experiencia': aniosExperiencia } = props;
  
      if (id === undefined) return ['ID property is required', undefined];
  
      return [undefined, new UpdatePersonajeDto(id, nombre, aniosExperiencia)];
    }
  }
  