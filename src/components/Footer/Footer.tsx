import { useState } from 'react';

export const Footer = () => {
  const [state, setState] = useState();

  return (
    <footer className="flex flex-grow-0 bg-stone-700 justify-center h-16 text-3xl items-center">@GorbatovSergey</footer>
  );
};
