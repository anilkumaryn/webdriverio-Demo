const LoginPage = require('../../login.page');
const securePage = require('../../secure.page');
const searchPage = require('../../search.page');
const searchPage = require('');
const { searchInput, searchBtn } = require('../../search.page');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('9945833924', 'qwerty@12345');
        
        await expect(securePage.accountDisplayed).toBeExisting();
        await expect(securePage.accountDisplayed).toHaveTextContaining('Test');
    
        //await expect(securePage.flipkarHomeTitle).toHaveTextContaining(
       //'Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!');
    });

    it('it should search and verfiy',async() => {
        //const 
        //const searchInput =  $('//input[@placeholder="Search for products, brands and more"]')
        //const 
        //get btnSubmit () { return $('//button[@class="_2KpZ6l _2HKlqd _3AWRsL"]') }
       await searchInput.setValue('Laptops');
       await searchBtn.click();
        
        await expect(searchPage.searchInput).toHaveTextContaining('laptop')



    });



});
    

