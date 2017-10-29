<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# Wczytywanie danych

> Odpowiedzi wpisz w odpowiednich plikach, chyba że treść polecenia wskazuje inaczej.
Pamiętaj, żeby oddzielać ćwiczenia komentarzami i pisać czytelny, dobrze sformatowany kod.
Jeśli  polecenie w zadaniach brzmi: "Stwórz nową funkcję, w której wykonasz te czynności" to znaczy, że
należy stworzyć funkcję. Nawet jeśli treści zadań są mało skomplikowane
ucz się używać funkcji.

## Zadanie **omawiane** z wykładowcą  (~ 15min - 20min)

Zapoznaj się z plikami HTML i JavaScript. Zadanie polega na wczytaniu danych z adresu: http://swapi.co/api/films/.
Przejdź przez zadanie korzystając z **debuggera**. Zwróć uwagę na to kiedy filmy zostają wczytane?

Przydatne informacje:
* użyj odpowiedniej metody HTTP, jeśli jest potrzebna,
* użyj odpowiednich funkcji informujących użytkownika o statusie żądania (metody ```done()```, ```fail()```),
* sprawdź w konsoli, jak wyglądają wczytywane dane, czy jest to tablica, string, JSON?
* jeśli dane zostaną poprawnie wczytane, to wywołaj odpowiednią funkcję np. ```insertContent()```, do której jako argument przekaż wczytane dane,
* wewnątrz funkcji ```insertContent()```przeiteruj się po prostu po tablicy wyników,
* wewnątrz pętli stwórz dwa elementy **li** oraz **h3**,
* ustaw odpowiednią **klasę** dla elementu **li**,
* do elementu **h3** dodaj tytuł filmu,
* wstaw element **h3** do **li**, a następnie wszystko do listy **ul**.
