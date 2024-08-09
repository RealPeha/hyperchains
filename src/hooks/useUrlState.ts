import { useSearchParams } from './useSearchParams';

export const useUrlState = <T extends string | number | boolean>(
  key: string,
  initial: T,
) => {
  const [params, setParams] = useSearchParams({
    [key]: initial,
  });

  const setValue = (value: T, triggerUpdate = true) => {
    if (value === initial) {
      setParams({ [key]: undefined }, triggerUpdate);
    } else {
      setParams({ [key]: value }, triggerUpdate);
    }
  };

  return [params[key] as T, setValue] as const;
};
