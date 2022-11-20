import {StoryObj, Meta} from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Tipography/Text',
  component: Text,
  args: {
    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione inventore sapiente quo, aspernatur laudantium eius quae illo dolor a? Suscipit, sapiente impedit excepturi nisi reiciendis facere molestiae voluptatem ipsa delectus!"
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong'
  }
}