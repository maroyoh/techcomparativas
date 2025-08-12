import type { FC } from 'react';
import { Button } from '@techcomparativas/ui';

export type CompareView = 'table' | 'cards';

export interface CompareSwitchProps {
  view: CompareView;
  onToggle: (view: CompareView) => void;
}

/**
 * Interruptor para alternar entre la vista de tabla y la vista de tarjetas.
 */
export const CompareSwitch: FC<CompareSwitchProps> = ({ view, onToggle }) => {
  return (
    <div className="inline-flex items-center gap-2">
      <Button
        variant={view === 'table' ? 'primary' : 'ghost'}
        onClick={() => onToggle('table')}
      >
        Tabla
      </Button>
      <Button
        variant={view === 'cards' ? 'primary' : 'ghost'}
        onClick={() => onToggle('cards')}
      >
        Tarjetas
      </Button>
    </div>
  );
};