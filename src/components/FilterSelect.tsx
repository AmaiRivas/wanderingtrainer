import type { Signal } from '@preact/signals';

type Props = {
  selectedValue: Signal<string>;
}

export default function FilterSelect({ selectedValue }: Props) {

  const handleChange = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    selectedValue.value = target.value;
  };

  return (
    <select value={selectedValue} onChange={handleChange}>
      <option value="">None</option>
      <option value="synergy1">Synergy 1</option>
      <option value="synergy2">Synergy 2</option>
      <option value="synergy3">Synergy 3</option>
    </select>
  );
}