import { useTranslation } from 'react-i18next';

function MainPage() {
  const { t } = useTranslation('about');

  return (
    <div>
      {/* <BugButton/> */}
      {t('Главная')}
      {/* <Counter/> */}
    </div>
  );
}

export default MainPage;
