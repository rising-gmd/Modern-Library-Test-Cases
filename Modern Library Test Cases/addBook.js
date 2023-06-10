const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

const addBook = async () => {
    try {
        // Creating connection of selenium driver and chrome driver
        let driver = new Builder().forBrowser(Browser.CHROME).build();
        await driver.get('http://127.0.0.1:5173/admin/books/addBook')

        //adding Book Form
        await driver.wait(until.elementLocated(By.xpath('/html/body/div[1]/div/div/div/form/div[1]/div[1]/div/input')), 1000)
        await driver.findElement(By.xpath('/html/body/div[1]/div/div/div/form/div[1]/div[1]/div/input')).sendKeys('The Mile')
        await driver.findElement(By.xpath('/html/body/div[1]/div/div/div/form/div[1]/div[2]/div/textarea')).sendKeys(`This book tells the story of death row supervisor Paul Edgecombe's encounter with John Coffey, an unusual inmate who displays inexplicable healing and empathetic abilities`)
        await driver.findElement(By.xpath('/html/body/div[1]/div/div/div/form/div[1]/div[3]/div/input')).sendKeys('Jugnu')
        await driver.findElement(By.xpath('/html/body/div[1]/div/div/div/form/div[1]/div[4]/div[1]/input')).sendKeys('Stephen Grinder')
        await driver.findElement(By.xpath('/html/body/div[1]/div/div/div/form/div[1]/div[5]/div[1]/input')).sendKeys('1999')
        await driver.findElement(By.xpath('/html/body/div[1]/div/div/div/form/div[1]/div[6]/input')).sendKeys(__dirname+'\\assets\\book1.jpeg')
        await driver.findElement(By.xpath('/html/body/div[1]/div/div/div/form/div[2]/button')).click()

    } catch (error) {
        console.log(error) 
    }
}

addBook()