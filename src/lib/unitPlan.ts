export interface PlannedUnit {
  unit: number;
  title: string;
  goal: string;
  abuelaCheckpoint?: boolean;
}

export const unitPlan: PlannedUnit[] = [
  { unit: 1, title: "Saludos, presentaciones y la familia", goal: "Saludar, presentarse, hablar de la familia." },
  { unit: 2, title: "La casa y la rutina diaria", goal: "Describir la casa y el día a día." },
  { unit: 3, title: "La compra", goal: "Comprar y manejar la conversación con el cajero." },
  { unit: 4, title: "Comida y cocinar", goal: "Hablar de comida y pedir en un bar.", abuelaCheckpoint: true },
  { unit: 5, title: "El tiempo y las estaciones", goal: "Hablar del tiempo — el rompehielos por excelencia." },
  { unit: 6, title: "Salir con amigos", goal: "Quedar, salir, registro de bar y de calle." },
  { unit: 7, title: "La ciudad y el transporte", goal: "Moverse por Castellón y preguntar direcciones." },
  { unit: 8, title: "Hablar del pasado", goal: "Contar lo que ha hecho en pretérito perfecto.", abuelaCheckpoint: true },
  { unit: 9, title: "Sentimientos y opiniones", goal: "Decir lo que piensa y cómo se siente." },
  { unit: 10, title: "Salud y el cuerpo", goal: "Farmacia, médico, «me duele»." },
  { unit: 11, title: "Planes y el futuro", goal: "Hablar de planes y esperanzas." },
  { unit: 12, title: "Conversación con la abuela", goal: "La conversación de verdad.", abuelaCheckpoint: true },
];
