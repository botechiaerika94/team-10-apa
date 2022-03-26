# TEAM 10 APA!

(building process README.md)


# SPRINT 04

## FORM LOCALES

- USAR FUNCION CONSTRUCTORA DE CLASE LOCALES
```js 
function Locales(id, cmRL, cmnID, gRL, aL, wL, rooomsL, dL, servicesL priceL, img1, img2, img3, img4, img5){
        this.id = id, //id
        this.cmRL = cmRL, //registro en la COMUNA --> 1 AL 9
        this.cmnID = cmnID, // numeero comuna quue pertenence
        this.gRL = gRL, // RREGISTROO GENEERAL DE LOCALEES DEJAR EN BLANCO
        this.aL = aL,  // ADDRESS --> UBICACION LOCAL
        this.wL = wL, // WEB PAGE
        this.pL = roomsL, // CITAR SOLAMENTE NOMBRE DE HABIIACION
        this.dL = dL // DESCRIPTION --> 1 ranglon de parrafoo del hotel
        this.servicesL = sL, SERVICES --> servicios generales en una palabra para cada topico
        this.priceL = priceL, --> precio MENOR VALOR - MAYOR VALOR (rango dee precio)
        this.img1 = img1,
        this.img2 = img2,
        this.img3 = img3,
        this.img4 = img4,
        this.img5 = img5
        }
Locales()
let localesCreate = new Locales(id, cmRL, cmnID, gRL, aL, wL, rooomsL, dL, servicesL priceL, img1, img2, img3, img4, img5)
```
definir 9 locales para cada comuna (1 al 6 + palermo y belgrano)
 Luego de terminado hacer array
 ```js
 let locales = [local01, local02 '...', local03]```
 resultado de console.log(locales) es array de locales eligidos para pagina coomunas luego dee ahii seguimos con habitaciones
salvar en archivo localesDataBase.json
```js
const localesJSON = JSON.stringify(locales)
console.log(localesJSON)```
