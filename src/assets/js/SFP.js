// Whole-script strict mode syntax
'use strict';

import * as FAKE from 'faker';
export class SFP {

    constructor(){

        this.search = {
            origen: faker.name.findName(),
            destination: faker.internet.email(),
            etd: faker.address.streetAddress(),
            eta: faker.lorem.sentence(),
            eta: faker.lorem.sentence(),
            adults: faker.random.number(4),
            young:faker.random.number(2),
            children:faker.random.number(2),
            infants:faker.random.number(2),
        }

        $('#origen').on('change')
    }

}
