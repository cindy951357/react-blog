import { useTranslation } from 'next-i18next';

export default function Index() {
    const { t } = useTranslation('common');
    return (
      <>
        <main className="flex w-full h-full justify-center items-center">
          {t('welcome')} 
        </main>
      </>
    );
}
  