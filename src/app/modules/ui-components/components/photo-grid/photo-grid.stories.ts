// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { PhotoGridComponent } from './photo-grid.component';

export default {
    title: 'UIComponents/PhotoGrid',
    component: PhotoGridComponent
} as Meta;

const Template: Story<PhotoGridComponent> = (args: PhotoGridComponent) => ({
    props: args,
});


export const SingleProfile = Template.bind({});
SingleProfile.args = {
    profiles: [
        {
            "name": "fsdfsafsdfsd",
            "address": "sdfsdfdsf",
            "picture": "fsdf",
            "id": 1
        }
    ],
};


export const MultiProfile = Template.bind({});
MultiProfile.args = {
    profiles: [
        {
            "name": "fsdfsafsdfsd",
            "address": "sdfsdfdsf",
            "picture": "fsdf",
            "id": 1
        },
        {
            "name": "fsdfsafsdfsd",
            "address": "sdfsdfdsf",
            "picture": "fsdf",
            "id": 2
        }
    ],
};
