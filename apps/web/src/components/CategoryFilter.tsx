import type { FC } from 'react';

export interface CategoryFilterProps {
  categories: Array<{ id: string; name: string; slug: string }>;
  value?: string;
  onChange: (slug: string) => void;
}

/**
 * Selector de categoría.
 *
 * Renderiza un `<select>` nativo para elegir una categoría.  En la versión
 * final podría sustituirse por un componente de autocompletado.  Recibe un
 * callback `onChange` que devuelve el slug de la categoría seleccionada.
 */
export const CategoryFilter: FC<CategoryFilterProps> = ({ categories, value, onChange }) => {
  return (
    <select
      value={value ?? ''}
      onChange={(e) => onChange(e.target.value)}
      className="p-2 rounded-md bg-brand-surface text-brand-text border border-brand-surface/50"
    >
      <option value="">Todas las categorías</option>
      {categories.map((cat) => (
        <option key={cat.id} value={cat.slug} className="capitalize">
          {cat.name}
        </option>
      ))}
    </select>
  );
};