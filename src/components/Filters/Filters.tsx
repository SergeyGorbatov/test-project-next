export const Filter = () => (
  <div className="p-4 border border-gray-300 rounded-md shadow-md w-3/12 self-center">
    <h2 className="text-lg font-semibold mb-4">Фильтрация</h2>
    <form className="flex flex-col space-y-4">
      <input
        type="text"
        placeholder="Email"
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        placeholder="Имя"
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        placeholder="Фамилия"
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
      >
        Применить фильтр
      </button>
    </form>
  </div>
);
