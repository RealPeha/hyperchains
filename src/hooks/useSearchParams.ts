import { useState } from 'react';

type SearchParams = Record<string, string | number | boolean | undefined>;

export const useSearchParams = (initial: SearchParams) => {
  const [, update] = useState<{}>();

  const params: SearchParams = {
    ...initial,
    ...Object.fromEntries(new URLSearchParams(window.location.search)),
  };

  const setParams = (newParams: SearchParams, triggerUpdate = true) => {
    const newSearch = new URLSearchParams(window.location.search);

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
