import { VolvoHomepage } from '../pageobjects/home.page.js';
import testData from "../testData/testData.json" assert { type: "json" };
import { assert, expect } from 'chai';



describe('Volvo Software Test Suite', () => {


    it('Volvo Header links Test', async () => {

        let [isVolvoLogo, headerLinks] = await VolvoHomepage.validateVolvoHeaderLinks();
        expect(isVolvoLogo).to.be.true;
        expect(headerLinks).to.have.members(headerLinks)
        console.log(headerLinks)
    })
    it('Volvo Home page welcome Text Test', async () => {

        let [HomePageWelcomText, homePageWelcomPara] = await VolvoHomepage.validateHomePageWelcomText();
        expect(HomePageWelcomText).to.contains(testData.homePageWelcomText1);
        expect(homePageWelcomPara).to.contains(testData.homePageWelcomPara);

    })


    it('Volvo Home page features Section Test', async () => {

        let [featuresText] = await VolvoHomepage.validateHomePageFeaturesSection();
        console.log(featuresText)
        expect(featuresText[3]).to.contains(testData.section1);
        expect(featuresText[4]).to.contains(testData.section2);
        expect(featuresText[5]).to.contains(testData.section3);

    })

    it('Volvo Home page Explore models Section Test', async () => {

        let [carModelsImageLinks] = await VolvoHomepage.validateExploreCarModelsSection();
        expect(carModelsImageLinks).to.have.members([
            true, true, true,
            true, true, true,
            true, true, true, true, true
        ])
    })
});


