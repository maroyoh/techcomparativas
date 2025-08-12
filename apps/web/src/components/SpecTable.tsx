export interface SpecTableProps {
  /** Objeto de especificaciones donde la clave es el nombre de la característica y el valor su descripción */
  specs: Record<string, string>;
}

/**
 * Tabla de especificaciones de un producto.
 *
 * Convierte el objeto de especificaciones en filas de una tabla.  Este
 * componente puede combinarse con `CompareTableVirtualized` para mostrar
 * múltiples productos lado a lado.
 */
export default function SpecTable({ specs }: SpecTableProps) {
  return (
    <table className="min-w-full text-sm border-collapse">
      <tbody>
        {Object.entries(specs).map(([key, value]) => (
          <tr key={key} className="border-t border-brand-surface">
            <th className="p-2 text-left font-medium capitalize whitespace-nowrap">
              {key}
            </th>
            <td className="p-2 text-brand-muted">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}