# FACES

Mini web estática para vender colecciones visuales diseñadas para la esfera
Fotos de Apple Watch.

La idea del MVP es muy directa:

```text
ver colección -> pagar 0,99 € -> Add Apple Watch Face
```

Ahora mismo la web es una maqueta funcional de producto: muestra colecciones,
previews dentro de un Apple Watch simulado, thumbnails, selector de idioma,
popups legales/informativos y un flujo de compra simulado.

## Cómo abrirla

Puedes abrir directamente:

```text
index.html
```

O servir la carpeta localmente:

```bash
python3 -m http.server 8080
```

Y entrar en:

```text
http://localhost:8080
```

## Qué incluye

- Catálogo visual en 2 columnas.
- 6 colecciones.
- 44 imágenes en total.
- Selector de idioma `ES / EN`.
- Footer con `Términos`, `Privacidad`, `Contacto` y disclaimer de Apple.
- Popups para la información legal sin sacar al usuario del catálogo.
- Botón ` Pay` simulado.
- Modal post-compra con `Add Apple Watch Face`.

## Colecciones

| Colección | Imágenes | Carpeta |
|---|---:|---|
| Black | 6 | `images/black/` |
| Space | 8 | `images/space/` |
| Art Deco | 6 | `images/art-deco/` |
| Nippon | 12 | `images/nippon/` |
| Matrix | 6 | `images/matrix/` |
| Racing | 6 | `images/racing/` |

## Estructura

```text
.
├── index.html
├── styles.css
├── script.js
├── README.md
├── watchfaces/
│   ├── black/
│   ├── space/
│   ├── art-deco/
│   ├── nippon/
│   ├── matrix/
│   └── racing/
└── images/
    ├── black/
    ├── space/
    ├── art-deco/
    ├── nippon/
    ├── matrix/
    └── racing/
```

## Idiomas

La web arranca en español por defecto.

El selector `ES / EN` cambia:

- tagline
- contador de imágenes
- complications del preview
- footer
- popups
- modal post-compra

Los textos están en el objeto `translations` dentro de `script.js`.

## Imágenes

Cada imagen es un PNG cuadrado usado como fondo dentro del preview del reloj.

Convención de nombres:

```text
images/<coleccion>/<coleccion>-01.png
images/<coleccion>/<coleccion>-02.png
...
```

Ejemplos:

```text
images/space/space-01.png
images/nippon/nippon-12.png
images/racing/racing-06.png
```

Las antiguas hojas de contacto usadas durante la generación ya se eliminaron.
La carpeta `images/` debe contener sólo las 44 imágenes finales.

## Watchfaces

Los archivos se generan a partir de una esfera Fotos exportada desde la app
Watch y empaquetan sus propias imágenes internas.

Archivos generados:

```text
watchfaces/black/black.watchface
watchfaces/space/space.watchface
watchfaces/art-deco/art-deco.watchface
watchfaces/nippon/nippon.watchface
watchfaces/matrix/matrix.watchface
watchfaces/racing/racing.watchface
```

Cada archivo usa la estructura de una esfera Fotos, cambia el nombre interno a
la colección correspondiente en mayúsculas cuando watchOS lo respeta y contiene
todas las imágenes de esa colección como una esfera Fotos rotatoria.

Los `.watchface` se han generado con la complication de batería arriba, sin la
complication inferior heredada de la plantilla, con la hora en tamaño pequeño,
con los objetos/artworks recolocados más abajo dentro de los recursos internos y
con previews internas nuevas basadas en la primera imagen de cada colección.

Las PNG visibles en la web no se modifican. El ajuste de posición sólo afecta a
los JPG internos empaquetados dentro de cada `.watchface`.

Space y Matrix usan un tratamiento interno distinto: las imágenes del
`.watchface` se generan a pantalla completa/full-bleed para que las galaxias y
el arte de fósforo verde ocupen más superficie de la esfera.

Para probarlos:

- Abrir un `.watchface` en iPhone.
- Comprobar si iOS/Watch lo acepta como esfera válida.
- Probar la distribución web con el MIME:

```text
Content-Type: application/vnd.apple.watchface
```

Aunque se añaden campos internos `name`, `title` y `displayName`, watchOS puede
seguir mostrando `Fotos` como nombre porque el tipo de esfera procede de la
plantilla oficial de Fotos.

## Plan de promoción

Objetivo: generar tráfico orgánico hacia la web desde vídeo corto, con una
compra impulsiva de 0,99 € y el menor número posible de pasos entre descubrir
una esfera y pagar.

Canales iniciales:

- TikTok
- Instagram Reels
- YouTube Shorts

Crear una cuenta específica de marca para cada plataforma, usando el mismo
nombre, avatar, bio corta y enlace principal hacia la web. La bio debe explicar
el producto sin fricción:

```text
Apple Watch face designs. 0,99 €. Tap, pay, install.
```

Líneas de contenido a probar:

- Vídeos muy cortos mostrando una esfera dentro del Apple Watch.
- Comparativas rápidas: esfera por defecto vs. FACES.
- Carruseles visuales de una colección completa.
- Lanzamientos por colección: Black, Space, Art Deco, Nippon, Matrix, Racing.
- Clips de temporada o tendencia: espacio, coches clásicos, estética japonesa,
  minimalismo negro, retro computing.
- Vídeos de satisfacción inmediata: elegir diseño, pagar con Apple Pay y llegar
  a `Add Apple Watch Face`.

Ideas de formato:

- Primer segundo con el reloj ya en pantalla.
- Fondo limpio, sin explicación larga.
- Texto en pantalla muy breve: `This is an Apple Watch face`.
- Cierre con precio claro: `0,99 €`.
- CTA directo: `Link in bio`.
- Reutilizar el mismo vídeo en TikTok, Reels y Shorts adaptando sólo caption y
  hashtags.

Hipótesis a validar:

- Qué colección convierte mejor.
- Si vende más una pieza individual o una colección con varias imágenes.
- Si funciona mejor comunicar `0,99 €` al principio o al final.
- Si el público responde más a estética Apple/OLED, lujo retro, espacio,
  Japón/minimalismo o nostalgia informática.
- Si los vídeos con muñeca/reloj real convierten mejor que los mockups.

Métricas mínimas:

- Visualizaciones por vídeo.
- Porcentaje de retención en los primeros 2 segundos.
- Clics al enlace de la bio.
- Conversión de visita a compra.
- Colección comprada.

Rutina inicial:

- Publicar 2-3 vídeos diarios durante 30 días.
- Probar 3-5 hooks distintos por colección.
- Mantener los vídeos que superen la media de retención y rehacer variaciones.
- Convertir los vídeos ganadores en anuncios pagados pequeños si ya hay señal
  de compra.

Pendiente: investigar tácticas concretas para generar tráfico cualificado en
TikTok, Instagram Reels y YouTube Shorts, incluyendo hooks, hashtags, creators,
colaboraciones, tendencias visuales y posibles campañas de bajo presupuesto.

## Estado actual

Esto todavía no vende ni instala esferas reales.

Faltan para producción:

- Conectar Stripe/Apple Pay real.
- Crear la pantalla post-compra real por colección.
- Validar en iPhone/Apple Watch los `.watchface` generados.
- Generar/exportar los archivos `.watchface` definitivos.
- Servir `.watchface` con el MIME correcto:

```text
Content-Type: application/vnd.apple.watchface
```

- Sustituir `hello@faces.example` por un email real.
- Completar aviso legal, términos, privacidad, desistimiento digital e IVA.
- Conseguir que las URLs de los assets estén protegidas para evitar que se puedan descargar.

## Disclaimer

Apple Watch is a trademark of Apple Inc. FACES is not affiliated with or
endorsed by Apple Inc.
