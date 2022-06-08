import { useCallback, useState } from 'react';

interface IListItem {
  title: string;
  isSelected: boolean;
}

export const Dashboard = () => {
  const [lista, setLista] = useState<IListItem[]>([]);

  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> =
    useCallback((event) => {
      if (event.key === 'Enter') {
        if (event.currentTarget.value.trim().length === 0) return;
        const value = event.currentTarget.value;
        event.currentTarget.value = '';

        setLista((oldLista) => {
          if (oldLista.some((ListItem) => ListItem.title === value))
            return oldLista;
          return [...oldLista, { title: value, isSelected: false }];
        });
      }
    }, []);

  return (
    <div>
      <p>Lista</p>
      <input onKeyDown={handleInputKeyDown} />
      <p>{lista.filter((ListItem) => ListItem.isSelected).length}</p>
      <ul>
        {lista.map((listItem) => {
          return (
            <li key={listItem.title}>
              <input
                type="checkbox"
                checked={listItem.isSelected}
                onChange={() => {
                  setLista((oldLista) => {
                    return oldLista.map((oldListItem) => {
                      const newIsSelected =
                        oldListItem.title === listItem.title
                          ? !oldListItem.isSelected
                          : oldListItem.isSelected;

                      return {
                        ...oldListItem,
                        isSelected: newIsSelected,
                      };
                    });
                  });
                }}
              />
              {listItem.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
