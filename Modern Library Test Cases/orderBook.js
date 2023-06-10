const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

const orderBook = async () => {
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
        
        //Main PAGE
        await driver.wait(until.elementLocated(By.xpath('/html/body/div[1]/div/div[2]/div[1]/div/div/div/a/button')), 1000)
        await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div[1]/div/div/div/a/button')).click()

        //Books Page
        await driver.wait(until.elementLocated(By.xpath('/html/body/div[1]/div/div[2]/div/div/div[1]/div/div[1]/div/a[2]/button')), 5000)
        await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div/div/div[1]/div/div[1]/div/a[2]/button')).click()
        await driver.wait(until.elementLocated(By.xpath('/html/body/div[1]/div/div[2]/div/div[2]/div/form/div[1]/div/input')), 1000)
        await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div/div[2]/div/form/div[1]/div/input')).sendKeys('Ghulam Mohiuddin')
        await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div/div[2]/div/form/div[2]/div/input')).sendKeys('Hostel City Islamabad')
        await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div/div[2]/div/form/div[3]/div/input')).sendKeys('03496899560')
        await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div/div[2]/div/form/div[4]/button[2]')).click()
        await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div/div[2]/div/form/div[4]/button[2]')).click()
        await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div/div[2]/div/form/div[5]/button')).click()
        
    } catch (error) {
        console.log(error) 
    }
}

orderBook()