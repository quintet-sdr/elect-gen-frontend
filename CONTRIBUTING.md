# Team 9 / Передача проекта

> Русский язык был использован целенаправленно.

## Тех-стек

Фронтенд написан на Nuxt (мета-фреймворк для Vue.js).

Необходимые навыки для внесения изменений: HTML, CSS (Tailwind), JS (TypeScript).

Рекомендуется пройти [официальный гайд](https://vuejs.org/tutorial/) от создателей Vue.js, с ним вполне можно управиться за час–два (мы используем Composition API, SFC).

## Рекомендуемая рабочая среда

VS Code с расширениями для работы со [Vue](https://marketplace.visualstudio.com/items?itemName=Vue.volar), [Tailwind CSS](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss), [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) (форматирование кода), [i18n Ally](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally) (если есть желание продолжить организовывать текстовую информацию в отдельном JSON файле, нежели хард-кодить содержимое), [Iconify Intellisense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) (если есть желание использовать иконки в интерфейсе).

Как пакетный менеджер мы используем Bun. Он используется для установки зависимостей, запуска кода и прочим взаимодействием с проектом. На практике меняется лишь то, что действия производятся при помощи команды `bun` вместо типичного `npm`.

```shell
# Вместо npm install vuedraggable@next:
bun install vuedraggable@next
```

## Локальная развёртка

После клонирования репозитория и изменения [`package.json`](/package.json) необходимо установить зависимости.

```shell
bun install
```

Для запуска проекта нужно запустить dev-сервер с поддержкой hot reloading.

```shell
bun dev --open
```

## Структура проекта

- [`.env`](`/.env`) — файл с секретными данными, которые нельзя публиковать в сеть.
- [`nuxt.config.ts`](`/nuxt.config.ts`) — конфигурация проекта и модулей.
- [`package.json`](`/package.json`) — манифест проекта с зависимостями. Обычно не рекомендуется изменять вручную, `bun` должен изменять его автоматически.
- [`tailwind.config.ts`](`/tailwind.config.ts`) — конфиг Tailwind CSS. Необходимо держать в синхронизации с [`main.css`](/assets/css/main.css).
- [`assets/`](/assets/) — локальные статические данные.
  - [`css/main.css`](/assets/css/main.css) — глобальный CSS. Необходимо держать в синхронизации с [`tailwind.config.ts`](/tailwind.config.ts).
  - [`icons/`](/assets/icons/) — локальные SVG иконки. В большинстве случаев рекомендуется использовать Nuxt Icon + Iconify для использования иконок с интернета.
  - [`images/`](/assets/images/) — локальные изображения.
- [`components/`](/components/) — реюзабельные блоки интерфейса.
  - [`shared/`](/components/shared/) — маленькие элементы.
  - [`widgets/`](/components/widgets/) — большие элементы.
- [`layouts/`](/layouts/) — шаблонная структура раутов, чтобы не повторять код.
- [`locales/en-US.json`](/locales/en-US.json) — текстовое содержимое страниц, i18n.
- [`pages/`](/pages/) — рауты, вводящиеся в URL страницы в браузере (filesystem routing). Большая часть кода находится здесь.
- [`server/utils/`](/server/utils/) — TypeScript код, не относящийся к компонентам и раутам напрямую.
  - [`api.ts`](/server/utils/api.ts) — взаимодействие с бэкендом.
  - [`schemas.ts`](/server/utils/schemas.ts) — интерфейсы для TypeScript.
- [`stores/store.ts`](/stores/store.ts) — глобальные переменные с использованием Pinia.

Файлы `.vue` используют особый синтаксис под названием SFC (Single File Component). По сути они из себя представляют файл, объединяющий HTML+CSS+JS вместе. Типичная структура подобного файла:

```vue
<script lang="ts" setup>
// The logic goes here.

// `lang="ts"` means that TypeScript is used as the language.
// `setup` means using the Composition API.
</script>

<template>
  <!-- The layout goes here. -->

  <!-- You can configure the layout like this: -->
  <NuxtLayout attr1="value-1" attr2="value-2">
    <!-- Make sure to write this inside your script: -->
    <!-- definePageMeta({ layout: false }) -->
  </NuxtLayout>
</template>

<style lang="postcss" scoped>
/* The styles go here. */

/* `lang="postcss"` allows using the `@apply` directive to use Tailwind styles. */
/* `scoped` makes the styles only apply to the current document. You don't always need it. */
</style>
```

## Работа с бэкендом

Для подключения к бэкенду необходимо создать файл `.env` в корне проекта (структуру можно скопировать из файла [`.env.example`](/.env.example)), после чего как значение переменной `NUXT_API_BASE_KEY` необходимо указать IP-адрес работающего бэкенда.

Для работы с бэкендом необходимо импортировать специальный файл для взаимодействия с API внутри необходимого раута/компонента:

```typescript
import * as api from '~/server/utils/api'
```

После этого можно вызывать необходимые функции, используя подсказки TypeScript.

```typescript
const students: Student[] | undefined = await api.getStudents('tech')

const courseResponse: Response = await api.postCourses(students![0], 'hum')

// This function call will download the table immediately.
const templateResponse: Response = await api.getExampleTable('tech', 'xlsx')

// If you want to download it manually.
// This may not be the best method, but it works.
const link = document.createElement('a')
link.href = templateResponse.url
link.click()
```

Для добавления новых методов внутри фронтенда необходимо вручную менять файл [`server/utils/api.ts`](server/utils/api.ts) по аналогии с имеющимися там функциями. Большая часть методов возвращают либо объект распаршенный с JSON, либо `Response`. Загрузка файлов с бэкенда (если релевантно), осуществляется автоматически, но её можно вызвать повторно при помощи вернувшегося респонса.

## Известные проблемы

- Так как фронтенд делался в очень скором темпе, многие вещи написаны небрежно и плохо структуризированны.
- Работа с API лишена какой-либо безопасности. Проблема идёт с самого бэкенда.
- Некоторые данные исчезают после перезагрузки страницы (в частности, данные хранящиеся в [сторе](/stores/store.ts)).
- Dev-сервер запускается довольно долго и при некоторых изменениях может ломаться. Проблема на стороне Nuxt, сам фреймворк не очень быстрый в плане разработки.
- ESLint не настроен корректно.
- Мы не уверены в работе `api.distributions`.

## Контакты

В случае каких-либо вопросов вы всегда можете связаться с нами:

- [Аскар Арсланов](https://t.me/AsqArslanov) (a.arslanov@innopolis.university)
- [Арсен Галиев](https://t.me/rosehipbloom) (a.galiev@innopolis.university)
