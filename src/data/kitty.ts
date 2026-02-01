import type { ShortcutSection } from './types';

export const kitty: ShortcutSection[] = [
  {
    id: 'kitty-pestanas',
    title: 'Pestañas',
    columns: 3,
    rows: [
      { atajo: 'Ctrl + Shift + t', accion: 'Nueva pestaña', descripcion: 'Abrir pestaña' },
      { atajo: 'Ctrl + Shift + w', accion: 'Cerrar pestaña', descripcion: 'Cierra pestaña actual' },
      { atajo: 'Ctrl + Shift + q', accion: 'Cerrar ventana', descripcion: 'Cierra ventana Kitty' },
      { atajo: 'Ctrl + Shift + ←/→', accion: 'Cambiar pestaña', descripcion: 'Siguiente/anterior' },
      { atajo: 'Ctrl + Shift + 1–9', accion: 'Ir a pestaña n', descripcion: 'Seleccionar por número' },
    ],
  },
  {
    id: 'kitty-paneles',
    title: 'Paneles (splits)',
    columns: 3,
    rows: [
      { atajo: 'Ctrl + Shift + Enter', accion: 'Dividir vertical', descripcion: 'Split vertical' },
      { atajo: 'Ctrl + Shift + d', accion: 'Dividir horizontal', descripcion: 'Split horizontal' },
      { atajo: 'Ctrl + Shift + flechas', accion: 'Mover entre paneles', descripcion: 'Cambiar foco' },
      { atajo: 'Ctrl + Shift + x', accion: 'Alternar layout', descripcion: 'Stack/Grid' },
      { atajo: 'Ctrl + Shift + z', accion: 'Alternar panel activo', descripcion: 'Maximizar/restaurar' },
    ],
  },
  {
    id: 'kitty-varios',
    title: 'Varios',
    columns: 3,
    rows: [
      { atajo: 'Ctrl + Shift + f', accion: 'Buscar en pantalla', descripcion: 'Scrollback search' },
      { atajo: 'Ctrl + Shift + u', accion: 'Pegar desde selección', descripcion: 'Primary selection' },
      { atajo: 'Ctrl + + / -', accion: 'Zoom', descripcion: 'Aumentar/reducir fuente' },
      { atajo: 'Ctrl + 0', accion: 'Reset zoom', descripcion: 'Tamaño original' },
      { atajo: 'Ctrl + Shift + n', accion: 'Nueva ventana', descripcion: 'Ventana OS' },
    ],
  },
];
