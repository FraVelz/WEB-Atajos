/**
 * Exportaciones centralizadas de atajos de teclado.
 * Los datos están divididos por categoría para fácil mantenimiento.
 */

export type { ShortcutRow, ShortcutSection } from './types';
export { firefox } from './firefox';
export { vscode } from './vscode';
export { vim } from './vim';
export { hyprland } from './hyprland';
export { kitty } from './kitty';
export { zsh } from './zsh';

export const navSections = [
  { id: 'firefox', label: 'Firefox', href: '#firefox' },
  { id: 'vscode', label: 'VSCode', href: '#vscode' },
  { id: 'vim', label: 'Vim', href: '#vim' },
  { id: 'hyprland', label: 'Hyprland (Arch)', href: '#hyprland' },
  { id: 'kitty', label: 'Kitty', href: '#kitty' },
  { id: 'zsh', label: 'Zsh / Bash', href: '#zsh' },
] as const;
