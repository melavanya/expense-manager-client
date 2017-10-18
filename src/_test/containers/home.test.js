import React from 'react';
import {shallow} from 'enzyme';
import  Home from '../../containers/home';
import '../test-set-up';
import {mockStore} from '../test-set-up';

const expenseManagerReducer = {
    budget: {},
    expense: [],
    totalExpense:{}
};

const authReducer= {
    authToken: null,
    currentUser: "test"
};

const initialState = {
    expenseManager: expenseManagerReducer,
    auth: authReducer
}
const store = mockStore(initialState);

describe('Dashboard Header', () => {
    let wrapper; 
    beforeEach(() => {
        wrapper = shallow(<Home store={store} />); 
    }); 

    it('Renders without crashing', () => {
        expect(wrapper.length).toEqual(1);        
    });

    it("check user loggeedIn", () => {
        expect(wrapper.prop('loggedIn')).toEqual(true);        
        
     });

});
