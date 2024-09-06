import { VolvoHomepage } from '../pageobjects/home.page.js';
import testData from "../testData/testData.json" assert { type: "json" };
import { assert, expect } from 'chai';



describe('Volvo Software Test Suite', () => {

    it('Volvo Home page welcome Text Test', async () => {

        let HomePageWelcomTextWDIO= await VolvoHomepage.validateHomePageWDIO();
        expect(HomePageWelcomTextWDIO).to.contains(testData.HomePageWelcomTextWDIO_test_data);

    })

});


