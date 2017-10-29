<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# Modyfikacja danych

> Odpowiedzi wpisz w odpowiednich plikach, chyba że treść polecenia wskazuje inaczej.
Pamiętaj, żeby oddzielać ćwiczenia komentarzami i pisać czytelny, dobrze sformatowany kod.
Jeśli  polecenie w zadaniach brzmi: "Stwórz nową funkcję, w której wykonasz te czynności" to znaczy, że
należy stworzyć funkcję. Nawet jeśli treści zadań są mało skomplikowane
ucz się używać funkcji.


## Zadania do samodzielnego wykonania


# Zadanie 1 (~ 15min - 30min)

Zainstaluj json-server i uruchom.
W folderze db znajdziesz plik ```movies.json```. Jest to baza filmów, z której będziemy korzystac. Twoim zadaniem jest wczytanie ich do pliku **index.html** za pomocą metody ```ajax()```, konkretnie do elementu **ul** o **klasie** ```repertuar```.

Przydatne wskazówki:
* wczytaj bazę filmów i przyjrzyj się w konsoli jak jest skonstruowany json, który dostajesz od serwera
* zapoznaj się z plikiem **index.html** (gdzie dokładnie "wstrzyknąć" filmy?),
* zapoznaj się z plikiem JavaScript, wstaw pod odpowiednie zmienne: adres URL oraz element **ul**,
* wykorzystaj wiedzę (i kod) z poprzednich zadań i wstaw tytuł filmu oraz opis do elementu **ul li** np.
    * tytuł filmu jako element ```h3```
    * opis filmu jako element ```p```

# Zadanie 2 (~ 15min - 20min)

Zadanie polega na tym, aby po wpisaniu tytułu i krótkiego opisu do pól formularza o **klasie** ```add_movie``` filmy dodały się do bazy. W tym celu stwórz odpowiednią funkcję w pliku JavaScript np. o nazwie ```addMovie()```. Wewnątrz niej:
* pozbieraj dane z formularza, ale dopiero po kliknięciu w przycisk.
* wyślij je za pomocą metody ```ajax()``` do bazy,
* zaktualizuj widok (tak, aby nowy film wczytał się do DOMU)

**Jak pozbierać dane?**
Musisz skonstruować odpowiednio obiekt.


# Zadanie 3 (~ 15min - 20min)

Zadanie polega na usunięciu filmu z bazy. W tym celu:
* stwórz odpowiednią funkcję np. ```removeMovie()```,
* wróć do funkcji z zadania 1 (wczytującej dane) i zmodyfikuj ją tak, aby przy wczytywaniu filmów dodawała również przycisk ```Usuń``` (pamiętaj o ustawieniu mu odpowiedniej klasy np. delete),
* wewnątrz funkcji ```removeMovie()``` ustaw event dla przycisku ```Usuń``` (sprawdź, czy działa),
* po uruchomieniu eventu wywołaj metodę ```ajax()``` z odpowiednimi ustawieniami do usunięcia określonego filmu,
* pamiętaj, że musisz odwołać się do konkretnego adresu np. jeżeli chcesz usunąć film o **id=2** wysyłasz żądanie pod adres http://localhost:3000/movies/2.

Skąd wziąć **id** filmu? Każdemu elementowi listy dodaj **id** (do tagu **li**). Weźmiesz je z danych zwróconych przy wczytywaniu filmów. Zmodyfikuj funkcję wczytującą filmy z zadania 1.

# Zadanie 4 (~ 20min - 25min)

Zmodyfikuj film na serwerze. W tym celu:
1. Stwórz odpowiednią funkcję np. ```updateMovie()```.
2. Wróć do funkcji z zadania 1 i zmodyfikuj ją tak, aby przy wczytywaniu filmów dodawała również przycisk ```Zmodyfikuj```  (pamiętaj o ustawieniu mu odpowiedniej klasy).
3. Wewnątrz funkcji ```updateMovie()``` ustaw event dla przycisku ```Zmodyfikuj``` (sprawdź, czy działa).
4. Przy modyfikacji musisz także wysłać odpowiednie dane pobrane z treści strony. W tym celu wewnątrz eventu obsługującego przycisk ```Zmodyfikuj```napisz kod dodający do elementów wewnątrz **li** atrybut ```contenteditable``` i ostyluj go odpowiednio (białe tło, obramowanie). W trakcie edycji zmień również napis na przycisku z ```Zmodyfikuj``` na ```Zatwierdź``` (pamiętaj o ustawieniu mu odpowiedniej klasy).
5. Pobierz zmienione dane po kliknięciu w przycisk ```Zatwierdź``` i wyślij je za pomocą metody ```ajax()``` do bazy.

Pamiętaj, że musisz odwołać się do konkretnego adresu np. jeżeli chcesz zmodyfikować film o **id=2** wysyłasz żądanie pod adres http://localhost:3000/movies/2. Skąd wziąć **id** filmu? To już wiesz z poprzedniego zadania.
