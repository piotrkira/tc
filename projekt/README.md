# Projekt

Projekt zrobiony w celach edukacyjnych.

Applikacja do spisu powszechnego, możliwość dodawania rekordów i ich wyświetlania.

## Info

Frontend & Backend - minimalna ilość replik 2, automatyczne
skalowanie replik w razie średniego zużycia procesora większego niż
75% (maksymalna ilość replik 10).
Wybrałem ilość replik 2 tak by w razie failure od razu
wykorzystywana była druga replika, nie wybrałem 3 lub więcej replik
gdyż w razie zwiększonego ruch ilość replik jest zwiększana.

W plikach konfiguracyjncyh zostały również ustalone limity zasobów
komputerowych dla każdego z poda by w razie jakiegoś problemu z
nadmierną alokacją pamięci, by nie miało to wpływu na pozostałe
mikroserwisy działające na tej samej maszynie.

Dostęp do Frontendu - example.com
Dostęp do backendu - example.com/api

Mongo - persistent storage, 1 replika po to by wszystkie dane były
w jendym miejscu. Do mongo nie powinno się sotsować wielu replik,
mongo ma swoje własne rozwiązania: Sharding

Redis - 1 replika gdyż chcemy by dane były w jendym miejscu, brak
persistent storage gdyż redis wykorzystuje pamięć RAM do
przechowywania danych, nie powinno się trzymać ważnych danych bez
kopi w bazie Redis.

## Setup

```
minikube config set vm-driver kvm2
minikube start --cpus 4 --memory 4000
minikube addons enable ingress
./setup.sh
minikube ip | awk '{printf "example.com\t%s\n", $1}' > /etc/hosts
```

Rekomendowane dodanie rekordu w pliku /etc/hosts dla polecenia
"minikube ip" - example.com

P.S. W przypadku gdy do pliku /etc/hosts nie zostanie dodany rekord z ip, żeby wejśc na stronę należy wejś na adres z polecenia "minikube ip"

