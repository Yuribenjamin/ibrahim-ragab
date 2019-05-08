if ('serviceWorker' in navigator) {

    navigator.serviceWorker
        .register('./service-worker.js', {scope: './'})
        .then((registration) =>{
        })
        .catch((err) => {
            console.log('Service Worker faild to register', err);
        })
}