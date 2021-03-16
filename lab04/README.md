# Lab04

## Zad01

Podłączony jest do sieci bridge

## Zad02

Ani jeden kontener nie jest podłączony do sieci firstNetwork gdyż
kontenery nie są uruchomione. Po uruchomieniu kontneru, kontener second należy
do sieci firstNetwork

## Zad03

```
docker network connect firstNetwork ID
docker network inspect firstNetwork
docker network disconnect bridge ID
```
Tak oba kontenery znajdują się w sieci firstNetwork

## Zad04

```
docker container prune
```

## Zad05

```
docker run -d \
--name pg \
--mount source=lab04-vol,target=/var/lib/postgresql/data \
-p 5432:5432 \
-e POSTGRES_PASSWORD=pass -e POSTGRES_DB=sample \
postgres
```

```
\c sample
create table user2 (id SERIAL, name VARCHAR(100));
INSERT INTO user2 VALUES(1, 'Maciej');
SELECT * FROM user2;
```

```
docker container stop ID
docker container prune
-----;;------
```

Wszystko działa, jest ok

## Zad06

## Zad07
