![Image of Calgo]
(https://uhusystems.com/img/calgo.png) 

 CALGO CALL CENTER MONITORING APPLICATION 
---
this is a monitoring application for the call center of the uhu systems
kft. lkslkkfsdlé ..sdféá .sd.fésdfflsdfsdf. és akkor attila elment vadaszni,
az evi meglotte, a zsolt hazavitte, kristof pedig mind megette :-) volt
egyszer egy kiscicam, de a kiscicam ngyon beteg lett, ezert
felgyujtottam es megettem. nagyon szomoru lettem utana, de szerencsere
elkezdtem iskolaba jarni, ahol uj embereket ismertem meg, akiket megolhetek
:-)


First Step
---
**Install:**

1.  you need to install the lastest `node.js.` you can download it from [here!](https://nodejs.org/)
2.  `node.js` comes with `npm`. update `npm` with the following command
```
sudo npm install npm -g
```
   in the project directory run this command to get all the necessary packages
```
npm install -g
```

Second Step
---
 a local database is necessarry for a smooth development. we are using
 `postgreSQL`. [get it from here!](http://www.postgresql.org/download/)  
 after the installation, you need the configure the users settings in the
`pg_hba.conf` file  
it's located in the postgres installation directory. set the `postgres`  user authentication method from `md5` to  `trust` 


now you can log into `postgres` with the user `postgres` just paste the code below  

``` 
psql -U postgres
``` 

to change the password, use the following code
``` 
ALTER USER postgres WITH PASSWORD 'postgres';
``` 
after this, change back the aut method in `pg_hba.conf` to `md5`  
to create the local database use normal sql commands, or here is the help
```
CREATE DATABASE uhu;
```
with `\connect uhu;` now you are at your local uhu database

create table for the heartbeat method
```
CREATE TABLE heartbeat (
ok boolean
);
```
now you have it, with a simple select command test your table
```
SELECT ok FROM heartbeat;
```

Third Step
---

set a local enviroment variable to the following
```
export DATABASE_URL=postgres://postgres:postgres@localhost:5432/uhu
export DEFAULT_LOGGINGLEVEL=INFO
```

