'use client';

import type { FC } from 'react';

/**
 * Editor MDX para administradores.
 *
 * Este componente utilizará Tiptap para proporcionar una interfaz WYSIWYG
 * que genere contenido en formato MDX.  Debido a la complejidad de la
 * integración y la falta de dependencias en este ejemplo, se presenta
 * únicamente un placeholder.  En producción se deberá cargar los
 * componentes de Tiptap de forma dinámica (`next/dynamic`) para reducir
 * el tamaño del bundle.
 */
const AdminEditorMDX: FC = () => {
  return (
    <div className="p-4 bg-brand-surface rounded-lg border border-brand-surface/50">
      <p className="italic text-brand-muted">Editor MDX en desarrollo…</p>
    </div>
  );
};

export default AdminEditorMDX;