const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

const logOutUser = async () => {
    try {
        // Creating connection of selenium driver and chrome driver
        let driver = new Builder().forBrowser(Browser.CHROME).build();
        await driver.get('http://127.0.0.1:5173/')

        //Main Page
        await driver.wait(until.elementLocated(By.xpath('/html/body/div[1]/div/div[1]/header/div/div[3]/a[1]/button')),1000)
        await driver.findElement(By.xpath('/html/body/div[1]/div/div[1]/header/div/div[3]/a[1]/button')).click()
        await driver.wait(until.elementLocated(By.xpath('/html/body/div[1]/div/div[2]/div/form/div[1]/div[1]/div/input')),1000)
        
        //Login + Adding implicit waits during login just to see smooth automation
        await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div/form/div[1]/div[1]/div/input')).sendKeys('aaliyan002@gmail.com')
        await driver.sleep(1000)
        await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div/form/div[1]/div[2]/div/div[2]/input')).sendKeys('Aaliyan002*')
        await driver.sleep(1000)
        await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div/form/div[2]/button')).click()

        //Hovering Menu
        await driver.wait(until.elementLocated(By.xpath('/html/body/div[1]/div/div[1]/header/div/div[3]/div[1]')), 3000);
        const menu = await driver.findElement(By.xpath('/html/body/div[1]/div/div[1]/header/div/div[3]/div[1]'))
        const actions = driver.actions({ bridge: true })
        await actions.move({ origin: menu }).perform()

        //LogOut
        await driver.wait(until.elementLocated(By.xpath('/html/body/div[1]/div/div[1]/header/div/div[3]/div[2]/div/button[4]')), 1000);
        await driver.findElement(By.xpath('/html/body/div[1]/div/div[1]/header/div/div[3]/div[2]/div/button[4]')).click()

    } catch (error) {
        console.log(error)
    }
}

logOutUser()