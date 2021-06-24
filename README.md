###SKeleton Code for Uberjars using SPring And Angular
- Spring 2.5.1, Angular 11, Bulma, Angular Material

###Dev Setup

```
#Start API
mvn spring-boot:run 
or 
java -jar app.jar
or
intellij start app

#start UI
cd client-app  
npm start (starts ng app using proxies for API)
access at localhost:4200
````


###Build

```
#Build All
mvn clean install

#Build API only
mvn -pl '!client-app' install
or
mvn -P rest clean install 

#Build UI only
mvn -pl 'client-app' install
````
###Build

```
#Deployment
java -jar application/target/application-0.0.1-SNAPSHOT.jar
````

Access at localhost:8082
