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
W folderze db znajdziesz plik ```cars.json```. Jest to baza samochodów, z której będziemy korzystac. Twoim zadaniem jest wczytanie ich do pliku **index.html** za pomocą metody ```ajax()```, konkretnie do elementu **ul** o **klasie** ```repertuar```.

Przydatne wskazówki:
* wczytaj bazę samochodów i przyjrzyj się w konsoli jak jest skonstruowany json, który dostajesz od serwera
* zapoznaj się z plikiem **index.html** (gdzie dokładnie "wstrzyknąć" samochody?),
* zapoznaj się z plikiem JavaScript, wstaw pod odpowiednie zmienne: adres URL oraz element **ul**,
* wykorzystaj wiedzę (i kod) z poprzednich zadań i wstaw nazwę samochodu oraz brand do elementu **ul li** np.
    * nazwę samochodu jako element ```h3```
    * brand samochodu jako element ```span```

# Zadanie 2 (~ 15min - 20min)

Zadanie polega na tym, aby po wpisaniu nazwy i marki  do pól formularza o **klasie** ```add_car``` auta dodały się do bazy. W tym celu stwórz odpowiednią funkcję w pliku JavaScript np. o nazwie ```addCar()```. Wewnątrz niej:
* pozbieraj dane z formularza, ale dopiero po kliknięciu w przycisk.
* wyślij je za pomocą metody ```ajax()``` do bazy,
* zaktualizuj widok (tak, aby nowy samochód wczytał się do DOMU)

**Jak pozbierać dane?**
Musisz skonstruować odpowiednio obiekt.


# Zadanie 3 (~ 15min - 20min)

Zadanie polega na usunięciu auta z bazy. W tym celu:
* stwórz odpowiednią funkcję np. ```removeCar()```,
* wróć do funkcji z zadania 1 (wczytującej dane) i zmodyfikuj ją tak, aby przy wczytywaniu samochodów dodawała również przycisk ```Usuń``` (pamiętaj o ustawieniu mu odpowiedniej klasy np. delete),
* wewnątrz funkcji ```removeCar()``` ustaw event dla przycisku ```Usuń``` (sprawdź, czy działa),
* po uruchomieniu eventu wywołaj metodę ```ajax()``` z odpowiednimi ustawieniami do usunięcia określonego samochodu,
* pamiętaj, że musisz odwołać się do konkretnego adresu np. jeżeli chcesz usunąć samochód o **id=2** wysyłasz żądanie pod adres http://localhost:3000/cars/2.

Skąd wziąć **id** samochodu? Każdemu elementowi listy dodaj **id** (do tagu **li**). Weźmiesz je z danych zwróconych przy wczytywaniu samochodów. Zmodyfikuj funkcję wczytującą auta z zadania 1.

# Zadanie 4 (~ 20min - 25min)

Zmodyfikuj samochód na serwerze. W tym celu:
1. Stwórz odpowiednią funkcję np. ```updateCar()```.
2. Wróć do funkcji z zadania 1 i zmodyfikuj ją tak, aby przy wczytywaniu aut dodawała również przycisk ```Zmodyfikuj```  (pamiętaj o ustawieniu mu odpowiedniej klasy).
3. Wewnątrz funkcji ```updateCar()``` ustaw event dla przycisku ```Zmodyfikuj``` (sprawdź, czy działa).
4. Przy modyfikacji musisz także wysłać odpowiednie dane pobrane z treści strony. W tym celu wewnątrz eventu obsługującego przycisk ```Zmodyfikuj```napisz kod dodający do elementów wewnątrz **li** atrybut ```contenteditable``` i ostyluj go odpowiednio (białe tło, obramowanie). W trakcie edycji zmień również napis na przycisku z ```Zmodyfikuj``` na ```Zatwierdź``` (pamiętaj o ustawieniu mu odpowiedniej klasy).
5. Pobierz zmienione dane po kliknięciu w przycisk ```Zatwierdź``` i wyślij je za pomocą metody ```ajax()``` do bazy.

Pamiętaj, że musisz odwołać się do konkretnego adresu np. jeżeli chcesz zmodyfikować samochód o **id=2** wysyłasz żądanie pod adres http://localhost:3000/cars/2. Skąd wziąć **id** samochodu? To już wiesz z poprzedniego zadania.
