# React Router Challenge: Yelp Restaurants Clone

Как вы обычно выбираете ресторан или кафе? В Америке существует [Yelp](https://www.yelp.com/search?cflt=restaurants&find_loc=San+Francisco%2C+CA) - полезный сервис, где вы можете посмотреть рестораны, отфильтровать и отсортировать их как вам удобно, зарезервировать столик и тд. Помимо поиска по ресторанам Yelp предоставляет и другие функции, но мы пока их затрагивать не будем. Знаете ли вы какие-нибудь аналоги на российском рынке? Они есть, однако они не так популярны. А значит вы можете написать свой Yelp, и возможно он станет супер-популярным :)

## Введение

Основной целью данного задания является попрактиковаться с React Router-ом и React-ом.
В данной задаче мы будем использовать React, ReactRouter, Postgres. Пройдемся по нашему приложению с точки зрения пользователя.

## Releases

### Release 0: React Router

Сделайте две страницы:

1. /login с формой ввода имени пользователя и кнопкой login
2. /info с описание проекта

Тут читаем про Реакт Роутер - https://reactrouter.com/docs/en/v6/getting-started/overview

### Release 1: Библиотека компонентов

Подключите библиотеку UI компонентов, чтобы сразу же работать со стилизованными элементами на странице. Например, вы можете взять одну из следующих: 
- [React Material-UI (Google)](https://mui.com/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Reactstrap](https://reactstrap.github.io/)
- [React Semantic UI](https://react.semantic-ui.com/collections/form/)
- [Ant Design](https://ant.design/docs/react/getting-started)


### Release 2: Список ресторанов

Главная страница. Тут должен быть список ресторанов (/restaurants). У каждого ресторана должна быть кнопка `Подробнее`, которая перенаправляет пользователя на отдельную страницу с детальным описанием ресторана (/restaurants/:id - просмотр, /restaurants/:id/edit - редактирование). Где вы будете хранить рестораны? Лучше использовать Postgres, однако если вы пока что не хотите заострять внимание на данных - можете их [*захардкодить*](https://en.wikipedia.org/wiki/Hard_coding).

### Release 3: Страницы с параметром

На странице ресторана вероятно присутствует подробная информация о нем и список отзывов пользователей. Кроме того надо добавить кнопку "Оставить отзыв". Нажатие на кнопку перенаправляет пользователя на страницу написания нового отзыва (/restaurants/:id/reviews/new). Отзыв можно просмотреть (/restaurants/:id/reviews/:review_id).

### Release 4: Форма добавить отзыв

На странице "Оставить отзыв" должна быть форма, в которой уже заполнено имя пользователя именем текущего пользователя(недоступное для редактирования поле), присутствуют поле для заголовка отзыва, поле для написания самого отзыва, элемент для оценивания ресторана по шкале от 1 до 5 в виде звездочек.

### Release 5: Фильтрация

У вас есть страница входа, главная страница, страница ресторана, страница отзыва. Теперь можете доработать то что уже имеете. На странице ресторанов хотелось бы иметь возможность фильтровать выдачу по различным параметрам (цене, городу, расстоянию до ресторана, только открытые сейчас). Можно добавить поисковую строку и выдавать только те рестораны, которые содержат в своем названии текст, введенный пользователем в поисковой строке. Также было бы неплохо предоставить возможность сортировки по наилучшему совпадению, рейтингу, количеству отзывов.

### Release 6: Свои фичи

Добавьте собственные фичи. Возможно вы хотите усовершенствовать дизайн при помощи каких-либо сторонних библиотек. Либо вам не хватает функционала. Использовали ли вы базу данных, чтобы хранить рестораны, отзывы? Если вам удалось обойтись без БД - было бы неплохо теперь интегрировать в ваше приложение Postgres. А может быть вы хотите разобраться с аутентификацией и авторизацией через какие-нибудь соц. сети, внедрить их в проект и получить настоящее приложение. Это ваш проект, поэтому можете делать с ним то, что считаете нужным. Однако если у вас еще остались более важные задачи, то не задерживайтесь на данном релизе более чем на 1 час.