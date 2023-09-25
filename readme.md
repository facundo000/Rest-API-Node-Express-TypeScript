Para obtener todos los elementos ecepto "comment", porque es privado
## GET
http://localhost:3000/api/diaries
## POST
```
{
	"date": "2017-01-01",
	"weather": "rainy",
	"visibility": "poor",
	"images":["https://www.blogdelfotografo.com/wp-content/uploads/2018/12/rain-275317_1920.jpg"],
	"comment": "comentario oculto"
}
## Falta obtener "comment"