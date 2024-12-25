# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

###  Основний функціонал
Основний функціонал
Пошук дешевих квитків

Інтеграція з сервісами бронювання (авіаквитки, автобуси, потяги).
Фільтри: дати, бюджет, тривалість подорожі, тип транспорту.
Підписка на сповіщення про зниження цін.
Планування маршруту

Інтерактивна карта, де можна додавати точки маршруту (міста, пам’ятки, ресторани).
Автоматичний розрахунок оптимального маршруту.
Пропозиції "що побачити поруч".
Пошук житла

Інтеграція з платформами Airbnb, Booking.com тощо.
Відображення бюджетних варіантів (гуртожитки, кемпінги, хостели).
Функція пошуку попутників для спільної оренди житла.
Рекомендації та відгуки

База відгуків користувачів про локації, ресторани та активності.
Персоналізовані поради на основі інтересів (гастрономія, пригоди, історія).
Оцінки "бюджетності" кожної локації.
Бюджетний трекер

Функція створення бюджету для подорожі.
Категорії витрат: транспорт, житло, харчування, розваги.
Відстеження витрат у реальному часі.
Групові подорожі

Планувальник для компанії друзів або сім’ї.
Розподіл витрат між учасниками.
Функція "голосування" за маршрутом чи локаціями.
Локальні пропозиції

Розділ із пропозиціями від місцевих гідів, невеликих кафе, екскурсій.
Лайфхаки для подорожей від місцевих жителів.

Ключові особливості
Інтерактивна карта: додавай маршрути, зберігай точки інтересу, дивись відстані між локаціями.
Динамічний бюджетний калькулятор: коригує розрахунки в реальному часі залежно від змін у маршруті.
Чат-бот для допомоги: підказки щодо трансферу, розкладу транспорту, погодних умов.
Персоналізація: створення профілю, збереження попередніх подорожей, рекомендації на основі інтересів.

1 Головна сторінка

Простий пошук: “Куди поїхати?”, дата виїзду, бюджет.
Рекомендації для популярних напрямків (наприклад, “5 днів у Празі за $200”).
Підписка на новини про бюджетні пропозиції.

2 Сторінка маршруту

Карта маршруту.
Вибрані транспортні варіанти та житло.
Орієнтовний бюджет.

3 Сторінка пропозицій

Локації з фільтрами (ціна, рейтинг, близькість до маршруту).
Опис пам’яток, фотографії, рейтинги від інших користувачів.

4 Особистий кабінет

Збережені маршрути.
Трекер витрат.
Сповіщення про зміни цін.