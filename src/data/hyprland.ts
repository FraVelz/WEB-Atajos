import type { ShortcutSection } from './types';

export const hyprland: ShortcutSection[] = [
  {
    id: 'hyprland-modificadores',
    title: 'Modificadores principales',
    columns: 2,
    rows: [
      { atajo: '$mainMod = Super', accion: 'Tecla Windows/Super' },
      { atajo: '$secondMod = Super + Shift', accion: 'Super + Shift' },
    ],
  },
  {
    id: 'hyprland-ventanas',
    title: 'Gestión de ventanas',
    columns: 2,
    rows: [
      { atajo: 'Super + Return', accion: 'Abrir terminal (Kitty)' },
      { atajo: 'Super + C', accion: 'Cerrar ventana activa' },
      { atajo: 'Super + M', accion: 'Salir de sesión Hyprland' },
      { atajo: 'Super + U', accion: 'Alternar modo flotante' },
      { atajo: 'Super + P', accion: 'Activar pseudotile' },
      { atajo: 'Super + O', accion: 'Cambiar modo de división' },
      { atajo: 'Super + F', accion: 'Abrir Firefox' },
      { atajo: 'Super + Z', accion: 'Abrir Flameshot (captura)' },
      { atajo: 'Super + V', accion: 'Toggle ventana flotante' },
    ],
  },
  {
    id: 'hyprland-menus',
    title: 'Menús personalizados',
    columns: 2,
    rows: [
      { atajo: 'Super + D', accion: 'Rofi drun (Menú aplicaciones)' },
      { atajo: 'Super + Q', accion: 'Menú de apagado' },
      { atajo: 'Super + A', accion: 'Cambiador de temas' },
      { atajo: 'Super + W', accion: 'Cambiador de fondos' },
      { atajo: 'Super + E', accion: 'Menú de iconos' },
      { atajo: 'Super + Shift + Return', accion: 'Modo hacker (3 Kitty organizadas)' },
      { atajo: 'Super + R', accion: 'Rofi (comandos)' },
    ],
  },
  {
    id: 'hyprland-movimiento',
    title: 'Movimiento entre ventanas',
    columns: 2,
    rows: [
      { atajo: 'Super + ←/→/↑/↓', accion: 'Mover foco' },
      { atajo: 'Super + H/L/K/J', accion: 'Mover foco (estilo vim)' },
      { atajo: 'Super + Shift + ←/→/↑/↓', accion: 'Mover ventana' },
      { atajo: 'Super + Shift + H/L/K/J', accion: 'Mover ventana (estilo vim)' },
      { atajo: 'Super + Tab', accion: 'Cambiar ventana (cycle)' },
      { atajo: 'Super + Shift + Tab', accion: 'Cambiar ventana (atrás)' },
    ],
  },
  {
    id: 'hyprland-workspaces',
    title: 'Espacios de trabajo (Workspaces)',
    columns: 2,
    rows: [
      { atajo: 'Super + 1–0', accion: 'Cambiar workspace' },
      { atajo: 'Super + Shift + 1–0', accion: 'Mover ventana a workspace' },
      { atajo: 'Super + S', accion: 'Workspace Magic' },
      { atajo: 'Super + Shift + S', accion: 'Mover ventana a Magic' },
      { atajo: 'Super + Scroll Up', accion: 'Workspace anterior' },
      { atajo: 'Super + Scroll Down', accion: 'Siguiente workspace' },
    ],
  },
  {
    id: 'hyprland-raton',
    title: 'Gestos del ratón',
    columns: 2,
    rows: [
      { atajo: 'Super + Click izq', accion: 'Mover ventana' },
      { atajo: 'Super + Click der', accion: 'Redimensionar ventana' },
    ],
  },
];
