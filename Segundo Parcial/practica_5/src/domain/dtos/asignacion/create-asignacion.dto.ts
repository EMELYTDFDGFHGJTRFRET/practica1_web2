export class CreateAsignacionDto {
  constructor(
    public readonly id: number,
    public readonly serieId: number,
    public readonly personajeId: number,
    public readonly papel: string,
    public readonly tipo: string,
    public readonly fechaInicio: Date,
    public readonly fechaFin: Date,
    public readonly temporadas: number
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateAsignacionDto?] {
    const { id, serieId, personajeId, papel, tipo, fechaInicio, fechaFin, temporadas } = props;

    if (id === undefined || id === null) return ['ID property is required', undefined];
    if (serieId === undefined || serieId === null) return ['Serie ID property is required', undefined];
    if (personajeId === undefined || personajeId === null) return ['Personaje ID property is required', undefined];
    if (!papel) return ['Papel property is required', undefined];
    if (!tipo) return ['Tipo property is required', undefined];
    if (!fechaInicio) return ['Fecha inicio property is required', undefined];
    if (!fechaFin) return ['Fecha fin property is required', undefined];
    if (temporadas === undefined || temporadas === null) return ['Temporadas property is required', undefined];

    return [undefined, new CreateAsignacionDto(
      id,
      serieId,
      personajeId,
      papel,
      tipo,
      new Date(fechaInicio),
      new Date(fechaFin),
      temporadas
    )];
  }
}
