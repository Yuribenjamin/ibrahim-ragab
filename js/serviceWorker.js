if ('serviceWorker' in navigator) {

    navigator.serviceWorker
        .register('./service-worker.js', {scope: './'})
        .then((registration) =>{
            console.log('Service Worker Registered');
        })
        .catch((err) => {
            console.log('Service Worker faild to register', err);
        })
}