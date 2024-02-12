
import { Builder, By, Key } from "selenium-webdriver"
import {should} from "chai";
should()

async function adicionarTarefas() {
    
    //Abrir o navegador
    let driver = await new Builder().forBrowser("chrome").build();

    //Navegar até o site
    await driver.get('https://herziopinto.github.io/lista-de-tarefas/')

    //Adicionar tarefas 
await driver.findElement(By.id("inputTask")).sendKeys("Aprender selenium", Key.RETURN)

//Assertion / Validação
let seleniumText = await driver.findElement(By.xpath('/html/body/div/section/ul/li')).getText()
.then(function(value){
    return value
});

seleniumText.should.equal('Aprender selenium')

//Fechar o navegador
await driver.quit()

    

}
adicionarTarefas()
