import { useSearchParams } from './useSearchParams';

export const useUrlState = <T extends string | number | boolean | (string | number | boolean)[]>(
  key: string,
  initial: T,
) => {
  const [params, setParams] = useSearchParams({
    [key]: Array.isArray(initial) ? initial.join(',') : initial,
  });

  const setValue = (value: T, triggerUpdate = true) => {
    if (JSON.stringify(value) === JSON.stringify(initial)) {
      setParams({ [key]: undefined }, triggerUpdate);
    } else {
      setParams({ [key]: Array.isArray(value) ? value.join(',') : value }, triggerUpdate);
    }
  };

  const getValue = (): T => {
    const param = params[key];
    if (Array.isArray(initial) && typeof param === 'string') {
      return param.split(',').filter(Boolean) as T;
    }
    return param as T;
  };

  return [getValue(), setValue] as const;
};
