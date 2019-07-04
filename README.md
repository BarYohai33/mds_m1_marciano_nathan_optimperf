# mds_m1_marciano_nathan_optimperf
#Pour configurer le cluster
1) Créer un compte sur MongoDb Atlas, Créer un projet , Construire un cluster. 
Les configurations dépendent de ce que l'on recherche mais l'on peut démarrer avec une configuration gratuite pour avoir un aperçu.
2)Ensuite il faut connecter l'application au cloud à l'aide de l'username et du password que l'on a nous même créer et connecter l'application à l'aide du lien qui est générer par le lien. 
#Schéma Architecture
![Schema Architecture](https://github.com/BarYohai33/mds_m1_marciano_nathan_optimperf/blob/master/Untitled%20Diagram.png)

Lancement du projet avec docker et docker-compose

- creer l image de l'api
docker-compose build

- lancer les services en arriere plan
docker-compose up -d

- arreter les services
docker-compose kill

l'api est accessible sur le port localhost:3000
 