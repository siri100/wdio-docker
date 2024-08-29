
import { BasePage } from './base.page.js';
import testData from "../testData/testData.json" assert { type: "json" };
import { driver } from '@wdio/globals';


export class VolvoElement {
    static Element(locator) {

        return new BasePage(locator);
    }
}

export class VolvoHomepage extends VolvoElement {

    static volvoLogo() { return this.Element(`//img`) };
    static acceptCookiesBtn() { return this.Element(`//button[@id='onetrust-accept-btn-handler']`) };
    static homePageWelcomText() { return this.Element(`//h1[contains(text(),'Safety')]`) };
    static homePageWelcomPara() { return this.Element(`//p[contains(text(),'Volvo Cars has been a leader in automotive safety for decades,')]`) };
    static videoSection() { return this.Element(`//video[@class='a dj dk dl dm dn do dp dq dr ds dt du dv dw']`) };
    static videoSectio1n() { return this.Element(`//video[@data-autoid='videoTestimonials:video-0']//source`) };
    static home_page_txt_wdio() { return this.Element(`//p[@class='hero__subtitle']`) };




    static async validateVolvoHeaderLinks() {
        await driver.url(testData.base_url);
        await driver.maximizeWindow()
        await this.acceptCookiesBtn().waitForDisplayed();
        await this.acceptCookiesBtn().click();
        await this.volvoLogo().waitForDisplayed();
        let isVolvoLogo = await this.volvoLogo().isDisplayed();
        let headerLinks  = await $$(`//ul//li//button//em`).map(async ele =>await ele.getText())
       
        return [isVolvoLogo,headerLinks]
    }
    static async validateHomePageWelcomText() {
        await this.volvoLogo().waitForDisplayed();
        let HomePageWelcomText = await this.homePageWelcomText().getVisibleText();
        let homePageWelcomPara = await this.homePageWelcomPara().getVisibleText();
     
       
        return [HomePageWelcomText,homePageWelcomPara]
    }

    static async validateHomePageWDIO() {
        await driver.url(testData.base_url_wdio);
        await this.home_page_txt_wdio().waitForDisplayed();
        let HomePageWelcomTextWDIO = await this.home_page_txt_wdio().getVisibleText();
       
        return HomePageWelcomTextWDIO
    }

    static async validateHomePageVideoSection() {
        
        let videoAttribute = await this.videoSection().getAttribute('preload')
     
       
        return videoAttribute
    }
    static async validateHomePageFeaturesSection() {
        await driver.pause(3000)
        let featuresText  = await $$(`//h2`).map(async ele =>await ele.getText())
        return [featuresText]
     
    }
    static async validateExploreCarModelsSection() {
        let carModelsImageLinks  = await $$(`//div[@role='listitem']`).map(async ele =>await ele.isDisplayed())
     
        return [carModelsImageLinks]
     
    }
    static async validateFooterLinks() {
        let footerLinks  = await $$(`//ul[@class='flex-row gap-16 md:gap-32']//li//a`).map(async ele =>await ele.getAttribute('aria-label'))
     
       
        return [footerLinks]
     
    }
}


