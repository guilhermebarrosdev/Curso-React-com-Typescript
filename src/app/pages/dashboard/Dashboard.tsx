import { useCallback, useEffect, useState } from 'react';
import { ApiException } from '../../shared/services/api/ApiException';
import {
  ITarefa,
  TarefasService,
} from '../../shared/services/api/tarefas/TarefasService';

export const Dashboard = () => {
  const [lista, setLista] = useState<ITarefa[]>([]);

  useEffect(() => {
    TarefasService.getAll().then((result) => {
      if (result instanceof ApiException) alert(result.message);
      else setLista(result);
    });
  }, []);

  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> =
    useCallback((event) => {
      if (event.key === 'Enter') {
        if (event.currentTarget.value.trim().length === 0) return;
        const value = event.currentTarget.value;
        event.currentTarget.value = '';

        setLista((oldLista) => {
          if (oldLista.some((ListItem) => ListItem.title === value))
            return oldLista;
          return [
            ...oldLista,
            { id: oldLista.length, title: value, isCompleted: false },
          ];
        });
      }
    }, []);

  return (
    <div>
      <p>Lista</p>
      <input onKeyDown={handleInputKeyDown} />
      <p>{lista.filter((ListItem) => ListItem.isCompleted).length}</p>
      <ul>
        {lista.map((listItem) => {
          return (
            <li key={listItem.id}>
              <input
                type="checkbox"
                checked={listItem.isCompleted}
                onChange={() => {
                  setLista((oldLista) => {
                    return oldLista.map((oldListItem) => {
                      const newIsCompleted =
                        oldListItem.title === listItem.title
                          ? !oldListItem.isCompleted
                          : oldListItem.isCompleted;

                      return {
                        ...oldListItem,
                        isCompleted: newIsCompleted,
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
