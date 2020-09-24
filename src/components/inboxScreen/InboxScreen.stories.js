import React from 'react'
import {PureInboxScreen} from "./InboxScreen";
import * as TaskListStories from '../tasklist/TaskList.stories';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';

// A super-simple mock of a redux store
const store = {
    getState: () => {
        return {
            tasks: TaskListStories.Default.args.tasks,
        };
    },
    subscribe: () => 0,
    dispatch: action('dispatch'),
};

export default {
    component: PureInboxScreen,
    decorators: [story => <Provider store={store}>{story()}</Provider>],
    title: 'example/InfoScreen'
}

const Template = args => <PureInboxScreen {...args}/>

export const Default = Template.bind({})

export const Error = Template.bind({})
Error.args = {
    error: 'Something'
}