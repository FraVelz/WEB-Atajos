# Web Atajos

Referencia rápida de atajos de teclado para Firefox, VSCode, Vim, Hyprland, Kitty y Zsh. Pensado para usuarios de Arch Linux con Hyprland.

## Características

- **Tema claro y oscuro** con toggle y preferencia del sistema
- **Navegación con indicador** de sección activa según el scroll
- **Diseño responsive** para escritorio y móvil (menú hamburguesa)
- **Accesibilidad** con enlace "Saltar al contenido" y scroll suave
- **Datos modulares** en archivos separados por categoría

## Tecnologías

- [Astro](https://astro.build) 5
- [Tailwind CSS](https://tailwindcss.com) 4
- [pnpm](https://pnpm.io)

## Inicio rápido

``` bash
# Instalar dependencias
pnpm install

# Desarrollo (con recarga en vivo)
pnpm dev

# Build para producción
pnpm build

# Vista previa del build
pnpm preview
```

El servidor de desarrollo suele estar en `http://localhost:4321`.

## Estructura del proyecto

``` text
src/
├── components/          # Componentes Astro
│   ├── AsideNav.astro   # Navegación lateral (desktop)
│   ├── CategoryBlock.astro
│   ├── Footer.astro
│   ├── Header.astro
│   ├── Nav.astro        # Header + menú móvil
│   ├── ShortcutSection.astro
│   └── ThemeToggle.astro
├── data/                # Atajos por categoría
│   ├── types.ts
│   ├── index.ts
│   ├── firefox.ts
│   ├── vscode.ts
│   ├── vim.ts
│   ├── hyprland.ts
│   ├── kitty.ts
│   └── zsh.ts
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   └── index.astro
└── styles/
    └── global.css
```

## Añadir o modificar atajos

Los atajos están en `src/data/`, uno por categoría. Ejemplo para añadir un atajo en Firefox:

```ts
// src/data/firefox.ts
{
  atajo: 'Ctrl + Shift + T',
  accion: 'Reabrir pestaña cerrada',
},
```

Para nuevas categorías, crea un archivo en `data/`, exporta el array y regístralo en `data/index.ts` y en `navSections`.

## Scripts disponibles

| Comando        | Acción                         |
|----------------|--------------------------------|
| `pnpm dev`     | Servidor de desarrollo         |
| `pnpm build`   | Build estático en `./dist/`    |
| `pnpm preview` | Vista previa del build         |
| `pnpm astro`   | CLI de Astro                   |

## Información

**Licencia:** MIT

**Autor:** Fravelz

Uso personal.
