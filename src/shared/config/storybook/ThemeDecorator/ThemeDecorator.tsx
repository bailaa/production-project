import { Decorator } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
// оборачивание элемента с добавлением ему какго-либо нового функционала ввиде стилей
const ThemeDecorator = (theme: Theme): Decorator => (Story) => (
  <div className={`app ${theme}`}>
    <Story />
  </div>
);

export default ThemeDecorator;
