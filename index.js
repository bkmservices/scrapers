const puppeteer = require('puppeteer');

async function scrape() {
    try {
        // Lancer le navigateur en mode visible
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();

        // Aller sur le site
        await page.goto('https://example.com');

        // Récupérer le titre de la page
        const title = await page.title();
        console.log('Titre de la page:', title);

        // Fermer le navigateur
        await browser.close();
    } catch (error) {
        console.error('Erreur de scraping:', error);
    }
}

// Exécuter le script
scrape();
