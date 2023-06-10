const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

const registerUser = async () => {
    try {
        // Creating connection of selenium driver and chrome driver
        let driver = new Builder().forBrowser(Browser.CHROME).build();
        await driver.get('http://127.0.0.1:5173/')

        //Main Page
        await driver.wait(until.elementLocated(By.xpath('/html/body/div[1]/div/div[1]/header/div/div[3]/a[2]/button')),1000)
        await driver.findElement(By.xpath('/html/body/div[1]/div/div[1]/header/div/div[3]/a[2]/button')).click()

        //Register + Adding implicit waits during registration just to see smooth automation
        await driver.wait(until.elementLocated(By.xpath('/html/body/div[1]/div/div[2]/div/form/div[1]/div[1]/div/input')),1000)
        await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div/form/div[1]/div[1]/div/input')).sendKeys('Alliyan')
        await driver.sleep(1000)
        await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div/form/div[1]/div[2]/div/input')).sendKeys('aaliyan002@gmail.com')
        await driver.sleep(1000)
        await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div/form/div[1]/div[3]/div/div[2]/input')).sendKeys('Aaliyan002*')
        await driver.sleep(1000)
        await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div/form/div[1]/div[4]/div/div[1]/input')).click()
        await driver.sleep(1000)
        await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div/form/div[2]/button')).click()

    } catch (error) {
        console.log(error)
    }
}

registerUser()