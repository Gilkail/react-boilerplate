import React from 'react'
import {shallow} from 'enzyme'
import DashboardPage from '../../components/DashboardPage'

test('Should display the dashboard componenet', ()=>{
    const wrapper = shallow(<DashboardPage />)
    expect(wrapper).toMatchSnapshot()
})