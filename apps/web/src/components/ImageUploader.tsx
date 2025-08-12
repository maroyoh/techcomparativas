'use client';

import type { FC } from 'react';

/**
 * Cargador de imágenes para el panel de administración.
 *
 * En la versión final este componente permitirá subir imágenes a un bucket
 * compatible con S3 (por ejemplo MinIO en desarrollo o AWS S3 en
 * producción).  Se configurará la firma de subida desde un API route para
 * evitar exponer credenciales.  Aquí se presenta un placeholder.
 */
const ImageUploader: FC = () => {
  return (
    <div className="p-4 bg-brand-surface rounded-lg border border-brand-surface/50">
      <p className="italic text-brand-muted">Cargador de imágenes en desarrollo…</p>
    </div>
  );
};

export default ImageUploader;