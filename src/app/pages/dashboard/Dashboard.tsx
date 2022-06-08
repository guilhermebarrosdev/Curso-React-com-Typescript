import { useCallback, useState } from 'react';

export const Dashboard = () => {
  const [lista, setLista] = useState(['Guilherme', 'João', 'Maria']);

  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> =
    useCallback((event) => {
      if (event.key === 'Enter') {
        if (event.currentTarget.value.trim().length === 0) return;
        const value = event.currentTarget.value;
        event.currentTarget.value = '';

        setLista((oldLista) => {
          if (oldLista.includes(value)) return oldLista;
          return [...oldLista, value];
        });
      }
    }, []);

  return (
    <div>
      <p>Lista</p>
      <input type="text" onKeyDown={handleInputKeyDown} />
      <ul>
        {lista.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
    </div>
  );
};
