import { useTranslation } from 'next-i18next';
import GlowButton from '@/components/Button/GlowButton';
import CommentList from '../components/CommentList';
import LatestComment from '../components/LatestComments';

export default function Index() {
    const { t } = useTranslation('common');
    return (
      <div className='flex h-full w-full justify-center items-center'>
        <main className="flex w-full h-full justify-center items-center flex-col gap-2">
          {t('welcome')}
          <div className="row flex">
            <GlowButton btnText={`Hover Me`}/>
          </div>          
          <div className="row flex">
            <CommentList/>
          </div>
        </main>
      </div>
    );
}
  