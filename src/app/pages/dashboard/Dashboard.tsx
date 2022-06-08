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
    useCallback(
      (e) => {
        if (e.key === 'Enter') {
          if (e.currentTarget.value.trim().length === 0) return;

          const value = e.currentTarget.value;

          e.currentTarget.value = '';

          if (lista.some((listItem) => listItem.title === value)) return;

          TarefasService.create({ title: value, isCompleted: false }).then(
            (result) => {
              if (result instanceof ApiException) alert(result.message);
              else setLista((oldLista) => [...oldLista, result]);
            }
          );
        }
      },
      [lista]
    );

  const handleToggleComplete = useCallback(
    (id: number) => {
      const tarefaToUpdate = lista.find((tarefa) => tarefa.id === id);
      if (!tarefaToUpdate) return;

      TarefasService.updateById(id, {
        ...tarefaToUpdate,
        isCompleted: !tarefaToUpdate.isCompleted,
      }).then((result) => {
        if (result instanceof ApiException) alert(result.message);
        else {
          setLista((oldLista) => {
            return oldLista.map((oldListaItem) => {
              if (oldListaItem.id === id) return result;
              return oldListaItem;
            });
          });
        }
      });
    },
    [lista]
  );

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
                onChange={() => handleToggleComplete(listItem.id)}
              />

              {listItem.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
