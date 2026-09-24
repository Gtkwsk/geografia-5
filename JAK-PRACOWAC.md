# Jak pracować z tym projektem

Krótka ściąga dla właściciela repozytorium — do czego służy każdy element
i jakie komendy wpisać w terminalu.

## Gdzie co jest

| Miejsce | Co to |
|---|---|
| `Pulpit\geografia-5` | folder projektu na tym komputerze (tu pracujemy) |
| `index.html` | cała aplikacja w jednym pliku |
| https://github.com/Gtkwsk/geografia-5 | kopia projektu w internecie (GitHub) |

## Wysłanie zmian na GitHub

Po każdej zmianie w plikach, w terminalu otwartym w folderze projektu:

```powershell
git add -A
git commit -m "krótki opis zmiany"
git push
```

`git add` zbiera zmiany, `git commit` zapisuje je jako wersję z opisem,
`git push` wysyła na GitHub. Historia wersji zostaje — do każdej można wrócić.

## Sprawdzenie, co się zmieniło

```powershell
git status      # które pliki się zmieniły
git log --oneline   # lista dotychczasowych wersji
```

## Publikacja strony

Repozytorium jest gotowe do podłączenia pod Netlify:
**Add new site → Import an existing project → GitHub → geografia-5**.
Nie ma nic do budowania — publish directory to katalog główny, a stroną
startową jest `index.html`. Od tego momentu każdy `git push` automatycznie
aktualizuje stronę.

Alternatywa bez Netlify: **Settings → Pages → Source: Deploy from a branch →
main / (root)** w repozytorium na GitHubie.

## Jeśli terminal nie zna komendy `git` lub `gh`

Otwórz nowe okno terminala (programy zostały zainstalowane niedawno i starsze
okna mogą ich jeszcze nie widzieć). Gdyby to nie pomogło, użyj pełnych ścieżek:

```powershell
& "C:\Program Files\Git\cmd\git.exe" status
& "C:\Program Files\GitHub CLI\gh.exe" auth status
```
