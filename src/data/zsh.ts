import type { ShortcutSection } from './types';

export const zsh: ShortcutSection[] = [
  {
    id: 'zsh-basicos',
    title: 'Atajos básicos (Bash y Zsh)',
    columns: 2,
    rows: [
      { atajo: 'Ctrl + A', accion: 'Inicio de línea' },
      { atajo: 'Ctrl + E', accion: 'Final de línea' },
      { atajo: 'Ctrl + U', accion: 'Borrar antes del cursor' },
      { atajo: 'Ctrl + K', accion: 'Borrar después del cursor' },
      { atajo: 'Ctrl + W', accion: 'Borrar palabra anterior' },
      { atajo: 'Ctrl + Y', accion: 'Pegar (yank) último borrado' },
      { atajo: 'Ctrl + L', accion: 'Limpiar pantalla' },
      { atajo: 'Ctrl + C', accion: 'Cancelar comando actual' },
      { atajo: 'Ctrl + D', accion: 'Salir/cerrar sesión (EOF)' },
      { atajo: 'Ctrl + Z', accion: 'Suspender proceso (fg para continuar)' },
      { atajo: 'Ctrl + _', accion: 'Deshacer último cambio' },
    ],
  },
  {
    id: 'zsh-historial',
    title: 'Historial',
    columns: 2,
    rows: [
      { atajo: 'Ctrl + R', accion: 'Buscar en historial (reverse search)' },
      { atajo: 'Ctrl + S', accion: 'Buscar adelante en historial' },
      { atajo: '↑ / ↓', accion: 'Navegar historial' },
      { atajo: 'Alt + <', accion: 'Primer comando del historial' },
      { atajo: 'Alt + >', accion: 'Último comando del historial' },
      { atajo: '!!', accion: 'Repetir último comando' },
      { atajo: '!$', accion: 'Último argumento del comando anterior' },
    ],
  },
  {
    id: 'zsh-zle',
    title: 'Atajos especiales Zsh (ZLE)',
    columns: 2,
    rows: [
      { atajo: 'Ctrl + X, Ctrl + E', accion: 'Editar comando en $EDITOR' },
      { atajo: 'Ctrl + X, Ctrl + U', accion: 'Deshacer' },
      { atajo: 'Alt + .', accion: 'Último argumento del comando anterior' },
      { atajo: 'Esc + /', accion: 'Autocompletar desde historial' },
      { atajo: 'Ctrl + X, *', accion: 'Expandir patrones (globbing)' },
      { atajo: 'Alt + U', accion: 'Mayúsculas hasta final de palabra' },
      { atajo: 'Alt + L', accion: 'Minúsculas hasta final de palabra' },
      { atajo: 'Alt + C', accion: 'Capitalizar palabra' },
    ],
  },
  {
    id: 'zsh-movimiento',
    title: 'Movimiento de cursor',
    columns: 2,
    rows: [
      { atajo: 'Alt + F', accion: 'Siguiente palabra (adelante)' },
      { atajo: 'Alt + B', accion: 'Palabra anterior' },
      { atajo: 'Ctrl + F', accion: 'Un carácter adelante' },
      { atajo: 'Ctrl + B', accion: 'Un carácter atrás' },
    ],
  },
];
