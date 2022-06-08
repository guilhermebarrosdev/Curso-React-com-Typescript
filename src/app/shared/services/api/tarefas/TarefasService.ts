import { Api } from '../ApiConfig';
import { ApiException } from '../ApiException';

interface ITarefa {
  id: number;
  title: string;
  isCompleted: boolean;
}

const getAll = async (): Promise<ITarefa[] | ApiException> => {
  try {
    const { data } = await Api().get('/tarefas');
    return data;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao buscar os registros.');
  }
};

const getById = async (id: number): Promise<ITarefa | ApiException> => {
  try {
    const { data } = await Api().get(`/tarefas/${id}`);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao consultar registro.');
  }
};

const create = async (
  dataCreate: Omit<ITarefa, 'id'>
): Promise<ITarefa[] | ApiException> => {
  try {
    const { data } = await Api().post<any>('/tarefas', dataCreate);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao criar registro.');
  }
};

const updateById = async (
  id: string,
  dataUpdate: ITarefa
): Promise<ITarefa | ApiException> => {
  try {
    const { data } = await Api().put(`/tarefas/${id}`, dataUpdate);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao consultar Api.');
  }
};

const deleteById = async (id: string): Promise<undefined | ApiException> => {
  try {
    const { data } = await Api().put(`/tarefas/${id}`);
    return undefined;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao apagar o registro.');
  }
};

export const TarefasService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
