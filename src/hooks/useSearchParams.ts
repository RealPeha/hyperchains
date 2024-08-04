import { useState } from 'react';

type SearchParams = Record<string, string | number | boolean | undefined>;

export const useSearchParams = (
  initial: SearchParams,
  triggerUpdate = true,
) => {
  const [, update] = useState<{}>();

  const { search } = window.location;
  const params: SearchParams = {
    ...initial,
    ...Object.fromEntries(new URLSearchParams(search)),
  };

  const setParams = (newParams: SearchParams) => {
    const newSearch = new URLSearchParams(search);

    for (const [key, value] of Object.entries(newParams)) {
      if (value === undefined) {
        newSearch.delete(key);
      } else {
        newSearch.set(key, String(value));
      }
    }

    window.history.replaceState(
      null,
      '',
      `${window.location.pathname}${newSearch.size ? `?${newSearch}` : ''}`,
    );

    if (triggerUpdate) {
      update({});
    }
  };

  return [params, setParams] as const;
};
