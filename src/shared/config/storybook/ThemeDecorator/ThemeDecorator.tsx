import { Decorator } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
// оборачивание элемента с добавлением ему какго-либо нового функционала ввиде стилей
const ThemeDecorator = (theme: Theme): Decorator => (Story) => (
  <ThemeProvider initialTheme={theme}>
    <div className={`app ${theme}`}>
      <Story />
    </div>
  </ThemeProvider>
);

export default ThemeDecorator;
