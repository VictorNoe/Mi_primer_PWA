console.log('SW Hola mundo !!');


//El mismo agrega un even listener que indicamos que lo instale
self.addEventListener('install',(event)=>{
    //Este solo pasa una si
    console.log('SW: Instalado');
});

self.addEventListener('fetch', (event)=>{
    console.log(event.request.url);

    /*if(event.request.url.includes('style.css')){
        const respuesta = new Response(
            `body{
                color: blue;
                background-color: #000;
            }`,
            {
                headers:{
                    'Content-Type':'text/css'
                }
            }
        );
        event.respondWith(respuesta);
    }*/

})