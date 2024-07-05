import { useTranslation } from 'next-i18next';
import GlowButton from '@/components/Button/GlowButton';
import CommentList from '../components/CommentList';
import LatestComment from '../components/LatestComments';

export default function Index() {
    const { t } = useTranslation('common');
    return (
      <div className='flex h-full w-full justify-center items-center'>
          <div className="grid w-full grid-cols-8 gap-4 mt-4">
            <div className='dummy-div'></div> 
            <div className="col-span-4">
              <div className="bg-white p-4 shadow-md">
                <h2 className="text-xl font-bold mb-4">Article List</h2>
                <ul>
                  <li className="mb-2">Article 1</li>
                  <li className="mb-2">Article 2</li>
                  <li className="mb-2">Article 3</li>

                </ul>
              </div>
            </div>
            <div className="col-span-2">
              <div className="bg-white p-4 shadow-md">
                <h2 className="text-xl font-bold mb-4">Latest Comments</h2>
                <ul>
                  <CommentList/>
                </ul>
              </div>
            </div>
            <div className='dummy-div'></div>
          </div>
      </div>
    );
}
  