import { useSearchParams } from './useSearchParams';

export const useUrlState = <T extends string | number | boolean>(
  key: string,
  initial: T,
  triggerUpdate = true,
): [T, (value: T) => void] => {
  const [params, setParams] = useSearchParams(
    {
      [key]: initial,
    },
    triggerUpdate,
  );

  const setValue = (value: T) => {
    if (value === initial) {
      setParams({ [key]: undefined });
    } else {
      setParams({ [key]: value });
    }
  };

  return [params[key] as T, setValue];
};
