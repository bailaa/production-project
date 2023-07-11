import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Input } from 'shared/ui/Input/Input';

function MainPage() {
  const { t } = useTranslation('about');
  const [value, setValue] = useState('');

  const onChangeHandler = (val: string) => {
    setValue(val);
  };

  return (
    <div>
      {t('Главная страница')}
      <Input
        placeholder="Введите текст"
        value={value}
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default MainPage;
