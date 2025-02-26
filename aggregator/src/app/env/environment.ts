export const environment = {
    microfrontends: {
        catalog: {
            tag: 'catalog',
            host: 'http://localhost:8081/',
            scripts: ['polyfills.js', 'main.js'],
            styles: ['styles.css']
        },
        product: {
            tag: 'product',
            host: 'http://localhost:8082/',
            scripts: ['static/js/main.js'],
            styles: []
        },
        purchase: {
            tag: 'purchase',
            host: 'http://localhost:8083/',
            scripts: ['main.js'],
            styles: []
        }
    }
}

export interface MicrofrontendConfig {
    tag: string;
    host: string;
    scripts: string[];
    styles: string[];
}