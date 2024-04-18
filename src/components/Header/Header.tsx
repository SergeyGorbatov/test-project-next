import Link from 'next/link';
import { useState } from 'react';

export const Header = () => {
  const [state, setState] = useState();

  return (
    <header className="flex flex-grow-0 bg-stone-700 justify-around h-16 items-center">
      <Link href="/" className="text-lg hover:text-yellow-600">Главная</Link>
      <Link href="/users" className="text-lg hover:text-yellow-600">Пользователи</Link>
      <Link href="/profile" className="text-lg hover:text-yellow-600">Профиль</Link>
    </header>
  );
};
