'use client';

import { useSyncExternalStore } from 'react';

const subscribe = () => () => {};

/** Empty on the server, the current year on the client: Cache Components forbids reading the clock while prerendering. */
export function CurrentYear() {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => null,
  );

  return <span>{year}</span>;
}
