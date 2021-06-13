const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class searchPage extends Page {
    /**
     * define selectors using getter methods
     */
   // get flashAlert () { return $('#//div[contains(text(),"My Account")]') }
   
   // get flipkarHomeTitle() {return $('html head title')}
  // get flipkarHomeTitle() {return $('//title[contains(text(),"Online Shopping Site for Mobiles, Electronics, Fur")]')}
    get searchInput()  {return $('//input[@type="text"]')} 
    get searchBtn() {return $('//button[@type="submit"]') } 


    open (path) {
        return browser.url(`https://www.flipkart.com//${path}`)
    }
}

module.exports = new searchPage( );
