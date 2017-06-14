import expect from 'expect';
import { authorsFormattedForDropDown } from './selectors';

describe('Author Selectors', () => {
    describe('authorsFormattedForDropDown', () => {
        it('Should return author data formatted for use in a dropdown', () => {
            const authors =  [
                               { id: 'cory-house',  firstName: 'Cory',  lastName: 'House'  },
                               { id: 'scott-allen', firstName: 'Scott', lastName: 'Allen'  },
                               { id: 'dan-wahlin',  firstName: 'Dan',   lastName: 'Wahlin' }
                             ];
            const expected = [
                               { value: 'cory-house',  text: 'Cory House'  },
                               { value: 'scott-allen', text: 'Scott Allen' },
                               { value: 'dan-wahlin',  text: 'Dan Wahlin'  }
                             ];
            expect(authorsFormattedForDropDown(authors)).toEqual(expected);
        });
    });
});