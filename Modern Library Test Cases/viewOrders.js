const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

const viewOrders = async () => {
    try {
        // Creating connection of selenium driver and chrome driver
        let driver = new Builder().forBrowser(Browser.CHROME).build();
        await driver.get('http://127.0.0.1:5173/admin/orders') 

    } catch (error) {
        console.log(error)
    }
}

viewOrders()
 