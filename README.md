# Czytam mapę

Aplikacja do nauki czytania mapy dla klasy 5 szkoły podstawowej — dział „Mapa Polski”
(geografia, podstawa programowa; treść oparta na zakresie podręcznika *Planeta Nowa 5*).

Uczy **umiejętności**, a nie wkuwania nazw: skali i podziałki, obliczania odległości,
znaków umownych, kierunków świata, poziomic i barw hipsometrycznych.

## Jak uruchomić

Otwórz plik `index.html` w przeglądarce — to wszystko. Aplikacja jest w jednym pliku,
nie wymaga serwera, instalacji ani internetu (bez sieci użyje czcionek systemowych).

## Co jest w środku

**10 ćwiczeń**, każde po 8 pytań z **losowanymi liczbami** — tego samego zadania nie da się
nauczyć na pamięć:

| Ćwiczenie | Czego uczy |
|---|---|
| Elementy mapy | tytuł, legenda, skala, róża wiatrów, siatka — wskazywane na mapie |
| Kierunki świata | główne i pośrednie, odczytywane z mapy |
| Znaki umowne | symbole oraz podział na punktowe, liniowe i powierzchniowe |
| Skala liczbowa i mianowana | zamiana `1 : 50 000` ↔ `1 cm – 500 m` |
| Obliczanie odległości | z mapy w teren i odwrotnie, z rozpisanym działaniem |
| Podziałka liniowa | pomiar odcinka przyłożonego do podziałki |
| Większa czy mniejsza skala | szczegółowość a wielkość obszaru |
| Rodzaje map | do czego służy która mapa |
| Poziomice i wysokość | wysokość bezwzględna i względna, cięcie poziomicowe, stromy stok |
| Barwy hipsometryczne | od depresji po najwyższe szczyty |

**Tryby dodatkowe**

- **Sprawdzian z działu** — 12 pytań, z każdego tematu co najmniej jedno, na koniec ocena 1–6
  z jawnymi progami.
- **Pokonaj swoje błędy** — pytania, na które padła zła odpowiedź, wracają do poprawy.
- **Poszukiwanie skarbu** — 3 misje fabularne na mapie okolic Lipowej: kierunki, skala
  i znaki umowne w jednym zadaniu.
- **Pojedynek z rodzicem** — dwie osoby grają na zmianę na jednym urządzeniu.

**Grywalizacja i oprawa**

- szlak z pieczątkami (pieczątka za 2 rundy z wynikiem min. 7/8) i stopnie kartografa,
- seria dobrych odpowiedzi — liczona tylko przy pytaniach, w których trudno zgadnąć,
- dźwięki generowane w przeglądarce (bez plików), z wyłącznikiem w opcjach,
- animacje wyjaśniające: skreślanie zer przy zamianie jednostek, wzgórze wyrastające
  z poziomic wraz z przekrojem terenu, reflektor na wskazanym elemencie mapy.

## Dla kogo

Dla ucznia klasy 5 — sam albo z rodzicem. Wyjaśnienia po każdej odpowiedzi i rozwiązania
krok po kroku mają pozwolić na naukę bez pomocy dorosłego.

## Prywatność

Aplikacja nie wysyła nigdzie żadnych danych. Postęp (punkty, pieczątki, imiona z pojedynku)
zapisuje się wyłącznie w przeglądarce, na tym urządzeniu.

## Publikowanie w sieci

Repozytorium można podpiąć pod Netlify albo GitHub Pages — katalogiem publikacji jest
główny katalog repozytorium, a stroną startową `index.html`. Nie ma nic do budowania.

## Struktura

```
index.html   — cała aplikacja: układ strony, style, logika, grafiki (SVG) i dźwięki
README.md    — ten plik
```

## Licencja

Do użytku domowego i szkolnego.
