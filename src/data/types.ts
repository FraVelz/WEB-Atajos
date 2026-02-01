/**
 * Tipos para la estructura de atajos de teclado.
 */

export interface ShortcutRow {
  atajo: string;
  accion: string;
  descripcion?: string;
}

export interface ShortcutSection {
  id: string;
  title: string;
  description?: string;
  rows: ShortcutRow[];
  columns?: 2 | 3;
}
