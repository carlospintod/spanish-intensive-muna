import { defineCollection, z } from "astro:content";

const bilingue = z.object({
  es: z.string(),
  en: z.string(),
});

const bilingueOpcional = z.object({
  es: z.string(),
  en: z.string().optional(),
});

const vocabularioItem = z.object({
  termino: z.string(),
  gloss: z.string(),
  nota: z.string().optional(),
  audio: z.string().optional(),
});

const dialogoLinea = z.object({
  hablante: z.string(),
  texto: z.string(),
  gloss: z.string().optional(),
  audio: z.string().optional(),
});

const dialogo = z.object({
  titulo: z.string(),
  contexto: bilingueOpcional.optional(),
  lineas: z.array(dialogoLinea).min(1),
});

const lecturaPregunta = z.object({
  pregunta: z.string(),
  preguntaEn: z.string().optional(),
  opciones: z.array(z.string()).min(2),
  correcta: z.number().int().nonnegative(),
});

const lectura = z.object({
  texto: z.string(),
  glosario: z.array(z.object({ termino: z.string(), gloss: z.string() })).default([]),
  preguntas: z.array(lecturaPregunta).default([]),
});

const videoItem = z.object({
  titulo: z.string(),
  canal: z.string().optional(),
  url: z.string().url(),
  duracion: z.string().optional(),
});

const enlace = z.object({
  titulo: z.string(),
  url: z.string().url(),
  nota: z.string().optional(),
});

const gapfillItem = z.object({
  frase: z.string(),
  fraseEn: z.string().optional(),
  respuesta: z.string(),
  opciones: z.array(z.string()).min(2),
});

const construirItem = z.object({
  objetivo: z.string(),
  objetivoEn: z.string().optional(),
});

const exercises = z.object({
  gapfill: z.array(gapfillItem).default([]),
  construir: z.array(construirItem).default([]),
});

const units = defineCollection({
  type: "content",
  schema: z.object({
    unit: z.number().int().min(1).max(12),
    title: z.string(),
    objetivo: z.string(),
    objetivoEn: z.string().optional(),
    abuelaCheckpoint: z.boolean().default(false),

    paraTi: z.string().optional(),

    vocabulario: z.array(vocabularioItem).min(1),

    grammar: z.object({
      titulo: z.string(),
      intro: z.string().optional(),
      introEn: z.string().optional(),
      ejemplos: z.array(bilingueOpcional).default([]),
    }),

    dialogos: z.array(dialogo).default([]),

    lectura: lectura,

    video: z.object({
      anchor: videoItem,
      stretch: videoItem.optional(),
    }),

    practica: z.object({
      nivel: z.enum(["A1", "A2"]),
      systemPromptHint: z.string(),
    }),

    misiones: z.object({
      real: bilingue,
      casa: bilingue,
      reto: bilingue,
    }),

    cierre: z.object({
      yaSabes: z.array(bilingue).min(1),
      tocaPracticar: z.array(bilingue).default([]),
    }),

    enlaces: z.object({
      recomendados: z.array(enlace).default([]),
      directorio: z.array(enlace).default([]),
    }),

    exercises: exercises.optional(),
  }),
});

export const collections = { units };
