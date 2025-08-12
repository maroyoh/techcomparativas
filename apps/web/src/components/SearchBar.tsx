import { useState, type FC } from 'react';

export interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
}

/**
 * Barra de búsqueda de productos.
 *
 * Controlado localmente mediante el estado `value`.  Llama a `onSearch`
 * cuando el usuario envía el formulario.  En la versión final se puede
 * incluir un debounce para búsquedas en tiempo real.
 */
export const SearchBar: FC<SearchBarProps> = ({ placeholder = 'Buscar…', onSearch }) => {
  const [value, setValue] = useState('');
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(value);
      }}
      className="flex items-center gap-2"
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="flex-1 p-2 rounded-md bg-brand-surface border border-brand-surface/50 text-brand-text"
      />
      <button type="submit" className="sr-only">
        Buscar
      </button>
    </form>
  );
};