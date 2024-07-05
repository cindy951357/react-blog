import { useTranslation } from 'next-i18next';
import GlowButton from '@/components/Button/GlowButton';
export default function Index() {
    const { t } = useTranslation('common');
    return (
      <div className='flex h-full w-full justify-center items-center'>
        <main className="flex w-full h-full justify-center items-center">
          {t('welcome')}
          <GlowButton btnText={`Hover Me`}/>
        </main>
      </div>
    );
}
  