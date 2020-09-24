import React from 'react'
import BoxInfo from './BoxInfo'

export default {
    title: 'Example/BoxInfo',
    component: BoxInfo
}

const Template = (args) => <BoxInfo {...args} />

export const FirstStory = Template.bind({})
FirstStory.args = {
    message: 'Mensaje de prueba'
}