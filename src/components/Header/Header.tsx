import Link from 'next/link';

export const Header = () => (
  <header className="flex flex-grow-0 bg-stone-700 justify-around h-16 items-center">
    <Link href="/" className="text-lg hover:text-yellow-600">Главная</Link>
    <Link href="/users" className="text-lg hover:text-yellow-600">Пользователи</Link>
    <Link href="/profile" className="text-lg hover:text-yellow-600">Профиль</Link>
  </header>
);
