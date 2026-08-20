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
- 52 imágenes en total.
- Selector de idioma `ES / EN`.
- Footer con `Términos`, `Privacidad`, `Contacto` y disclaimer de Apple.
- Popups para la información legal sin sacar al usuario del catálogo.
- Botón ` Pay` simulado.
- Modal post-compra con `Add Apple Watch Face`.

## Colecciones

| Colección | Imágenes | Carpeta |
|---|---:|---|
| Black | 6 | `images/black/` |
| Space | 16 | `images/space/` |
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
La carpeta `images/` debe contener sólo las 52 imágenes finales.

## Estado actual

Esto todavía no vende ni instala esferas reales.

Faltan para producción:

- Conectar Stripe/Apple Pay real.
- Crear la pantalla post-compra real por colección.
- Generar/exportar los archivos `.watchface`.
- Servir `.watchface` con el MIME correcto:

```text
Content-Type: application/vnd.apple.watchface
```

- Sustituir `hello@faces.example` por un email real.
- Completar aviso legal, términos, privacidad, desistimiento digital e IVA.

## Disclaimer

Apple Watch is a trademark of Apple Inc. FACES is not affiliated with or
endorsed by Apple Inc.
