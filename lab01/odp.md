# Zad1

zrobione, nick: piotrkira

#Zad2

zrobione

#Zad3

Docker run uruchamia/tworzy kontener z obrazu. Docker start uruchamia zastopowany
kontener. Docker start -a uruchamia kontener w trybie attached (działa pierwszoplanowo,
nie w tle, tak jak np docker run -a xxx)

#Zad4

docker ps -a wyświetla wszystkie kontenery
docker rm usuwa określony kontener
docker containter prune usuwa wszystkie zastopowany kontenery

#Zad5

docker run busybox echo "Hello WOrld I'm busybox!"

#Zad6

docker run -it --entrypoint /bin/sh busybox
ls
exit
docker logs f0

#Zad7

docker run -d busybox sleep 5000
docker exec -it f0 sh #fo to początek id kontenera

#Zad8

U mnie nadal istenieje ale to dlatego że kontener cały czas jest uruchomiony,
dostałem sie do shella poprzez docker exec -it ID sh
Gdybym zrobił to tak jak w zad6 plik by nie istniał gdyż katalog / w kontenerze
nie jest zmappowany do żadnego katalogu na hoscie

#Zad9

docker exec -it f0 sh -c "echo 'Created from outside' > readme.txt"

#Zad10

docker create busybox sh -c "echo 'Hello world from my container'"  
docker start ID -a

