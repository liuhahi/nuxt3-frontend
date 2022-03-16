import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'My stories',
  component: Button,
  decorators: [withDesign],
}

export const myStory = () => <Button>Hello, World!</Button>

myStory.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/RYMVZfOYixOTpAp2MBcC3F/SCA-Product-V4-WIP?node-id=1855%3A11828',
  },
}