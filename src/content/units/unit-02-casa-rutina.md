---
unit: 2
slug: "la-casa-y-la-rutina-diaria"
title: "La casa y la rutina diaria"
objetivo: "Describir tu casa y contar tu rutina de un día normal (mañana, tarde y noche)."
abuelaCheckpoint: false

paraTi: "You already do all of this every day — you're just going to name it in Spanish now. That's the easiest kind of learning: new words for a life you already live."

vocabulario:
  # La casa
  - termino: "la casa"
    gloss: "house / home"
  - termino: "el salón"
    gloss: "living room"
    nota: "En España, el salón es donde se ve la tele y se está en familia."
  - termino: "la cocina"
    gloss: "kitchen"
  - termino: "el dormitorio / la habitación"
    gloss: "bedroom"
  - termino: "el baño"
    gloss: "bathroom"
  - termino: "hay"
    gloss: "there is / there are"
    nota: "Una sola palabra para singular y plural: «hay un salón», «hay dos baños»."
  # La rutina
  - termino: "levantarse"
    gloss: "to get up"
    nota: "me levanto = I get up"
  - termino: "ducharse"
    gloss: "to shower"
    nota: "me ducho = I shower"
  - termino: "desayunar"
    gloss: "to have breakfast"
  - termino: "limpiar"
    gloss: "to clean"
  - termino: "cocinar"
    gloss: "to cook"
  - termino: "comer"
    gloss: "to eat / to have lunch"
    nota: "En España, «comer» también es la comida del mediodía (lunch)."
  - termino: "echarse la siesta"
    gloss: "to take a nap"
    nota: "Una institución española. 😴"
  - termino: "acostarse"
    gloss: "to go to bed"
    nota: "me acuesto = I go to bed"
  # El tiempo del día
  - termino: "por la mañana / por la tarde / por la noche"
    gloss: "in the morning / afternoon / at night"
  - termino: "primero… luego… después…"
    gloss: "first… then… after that…"

grammar:
  titulo: "El presente y los verbos reflexivos (el «me» de cada día)"
  intro: "Para contar tu día usas el presente. Casi todos los verbos siguen un patrón fácil. Y algunos verbos llevan «me» cuando la acción es sobre ti misma — son los reflexivos. Mira los ejemplos:"
  ejemplos:
    - "Presente normal: «Desayuno café. Limpio la casa. Cocino la comida.» (yo: -o)"
    - "Reflexivos (con «me»): «ME levanto, ME ducho, ME acuesto.» El «me» eres tú."
    - "Para preguntar a otra persona, el «me» se vuelve «te»: «¿A qué hora TE levantas?»"
    - "«hay» para describir tu casa: «En mi casa HAY un salón, una cocina y un dormitorio.»"
    - "Ordena el día: «PRIMERO me levanto, LUEGO desayuno y DESPUÉS limpio.»"

dialogos:
  - titulo: "Un día normal"
    contexto: "Una amiga te pregunta qué haces en un día cualquiera. Esta es, más o menos, tu rutina real."
    lineas:
      - hablante: "Amiga"
        texto: "¿Qué haces normalmente por la mañana?"
      - hablante: "Muna"
        texto: "Me levanto, desayuno y limpio un poco la casa. Luego cocino."
      - hablante: "Amiga"
        texto: "¿Y por la tarde?"
      - hablante: "Muna"
        texto: "Como, y después me echo la siesta. Por la noche vemos la tele."
        gloss: "«vemos» = we watch (you and your husband)."
  - titulo: "¿Cómo es tu casa?"
    contexto: "La abuela quiere saber cómo es vuestra casa. Fíjate en «tenéis» — es el «vosotros» de España."
    lineas:
      - hablante: "Abuela"
        texto: "¿Cómo es tu casa, Muna?"
      - hablante: "Muna"
        texto: "Es pequeña pero bonita. Hay un salón, una cocina y un dormitorio."
      - hablante: "Abuela"
        texto: "¿Y tenéis terraza?"
        gloss: "«tenéis» = do you (both) have — the Spain plural «vosotros»."
      - hablante: "Muna"
        texto: "Sí, tenemos una terraza pequeña."

lectura:
  texto: |
    Un día normal para mí: por la mañana me levanto pronto y me ducho.
    Después desayuno un café con tostadas. Luego limpio la casa
    y cocino la comida. A las dos comemos mi marido y yo.
    Por la tarde, me echo la siesta. ¡Me encanta la siesta española!
    Por la noche vemos una serie en la tele y nos acostamos tarde.
    Mi parte favorita del día es la siesta. ¿Y la tuya?
  glosario:
    - termino: "pronto"
      gloss: "early"
    - termino: "las tostadas"
      gloss: "toast"
    - termino: "nos acostamos"
      gloss: "we go to bed"
    - termino: "¿y la tuya?"
      gloss: "and yours?"
  preguntas:
    - pregunta: "¿Qué hace Muna primero por la mañana?"
      opciones: ["Cocina la comida", "Se levanta y se ducha", "Ve una serie"]
      correcta: 1
    - pregunta: "¿A qué hora come?"
      opciones: ["A la una", "A las dos", "A las tres"]
      correcta: 1
    - pregunta: "¿Cuál es su parte favorita del día?"
      opciones: ["El desayuno", "La siesta", "La noche"]
      correcta: 1

video:
  anchor:
    titulo: "Mi casa (Nivel A1)"
    canal: "VideoEle"
    url: "https://www.youtube.com/watch?v=Qs3kUMqRvKY"
    duracion: "~3 min"
  stretch:
    titulo: "Verbos reflexivos (Nivel A2)"
    canal: "VideoEle"
    url: "https://videoele.com/A2-Verbos-reflexivos.html"
    duracion: "~3 min"

practica:
  nivel: "A1"
  systemPromptHint: >
    Practica describir la casa (con «hay») y contar la rutina diaria usando el
    presente y verbos reflexivos (levantarse, ducharse, acostarse). La estudiante,
    Muna, vive en Castellón con su marido; su día real incluye limpiar, cocinar,
    la siesta y ver la tele por la noche. Usa SOLO español de España, frases cortas,
    nivel A1. Pregúntale por su día y reacciona con naturalidad. Corrige con cariño.

misiones:
  real: "Mientras limpias o cocinas hoy, di en voz alta lo que haces, en español: «Limpio el salón», «Cocino arroz», «Friego los platos». Hablar sola cuenta — es de las cosas que más ayudan."
  casa: "Pregúntale a tu marido por su rutina en español: «¿A qué hora te levantas?», «¿Qué haces por la tarde?». Intenta entender su respuesta."
  reto: "Aprende a decir tu parte favorita del día y por qué: «Mi parte favorita es… porque…». Suéltasela a alguien esta semana."

cierre:
  yaSabes:
    - "Puedo describir mi casa con «hay»."
    - "Puedo contar mi rutina: por la mañana, por la tarde, por la noche."
    - "Puedo usar verbos reflexivos: me levanto, me ducho, me acuesto."
    - "Puedo ordenar las acciones: primero, luego, después."
  tocaPracticar:
    - "No olvidar el «me» de los reflexivos — es lo más fácil de saltarse."
    - "«hay» (para cosas) frente a «tener» (para lo que posees): «hay un salón» / «tenemos terraza»."
    - "Las formas «nosotros» (-amos, -emos, -imos): comemos, vemos, vivimos."

enlaces:
  recomendados:
    - titulo: "VideoEle — «Mi casa»: PDF de actividades"
      url: "https://videoele.com/Archivos/A1_Mi_casa_actividad.pdf"
      nota: "Ejercicios cortos para fijar el vocabulario de la casa. 10 minutos."
    - titulo: "Lola Lago — «Sin noticias» (capítulo 2)"
      url: "https://difusion.com/tienda/producto/sin-noticias"
      nota: "Sigue con tu novela: un capítulo esta semana, con el audio puesto."
  directorio:
    - titulo: "VideoEle — Menú nivel A2 (verbos reflexivos y más)"
      url: "https://videoele.com/menu-A2.html"
    - titulo: "ProfeDeELE — Actividades nivel A1"
      url: "https://www.profedeele.es/nivel/a1/"
    - titulo: "Notes in Spanish — Inspired Beginners (podcast, gratis)"
      url: "https://www.notesinspanish.com/beginners-spanish-audio/"
---

<!--
  Body optional. All structured content is in the frontmatter so the unit layout
  renders the locked 10-section template deterministically.
-->
