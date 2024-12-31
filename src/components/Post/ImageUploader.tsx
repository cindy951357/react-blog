import { useState, useRef, } from 'react';
import { useTranslation } from 'react-i18next';
import { setImagesToUpload, } from '@/features/postSlice';
import { useDispatch } from 'react-redux';

const ImageUploader: React.FC = () => {
    const dispatch = useDispatch();
    const [images, setImages] = useState<(string | null)[]>([null, null]);
    const inputRefs = [
      useRef<HTMLInputElement>(null),
      useRef<HTMLInputElement>(null),
    ];
    const { t } = useTranslation('');
  
    const handleImageChange = (
      index: number,
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      const file = event.target.files && event.target.files[0];
      // 轉成blob
      const blobUrl = event.target.files && URL.createObjectURL(event.target.files[0]);
      
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const newImages = [...images];
          newImages[index] = reader.result as string;
          setImages(newImages);
          dispatch(setImagesToUpload({
            index,
            blobUrl,
          }));
        };
        reader.readAsDataURL(file);
      }
      // reader.onloadend = () => { ... }
      // 這行代碼為 FileReader 物件的 onloadend 事件設置了
      // 一個回調函數。onloadend 事件在讀取操作完成時
      // （無論成功或失敗）觸發。
      // 當讀取操作完成時，這個回調函數會被執行。
  
      // reader.result 包含了讀取完成後的結果。在這個情況下，
      // 它包含了圖片文件的數據 URL（Base64 格式的字符串）。
  
      // reader.readAsDataURL(file);
      // 這行代碼啟動讀取操作，FileReader 物件開始讀取指定的 file，
      // 並將文件內容讀取為 Base64 編碼的數據 URL。
      // 當讀取操作完成後，onloadend 事件會被觸發，並執行前面設置的回調函數。
    };
  
    const handleImageRemove = (index: number) => {
      const newImages = [...images];
      newImages[index] = null;
      setImages(newImages);
    };
  
    const handleDivClick = (index: number) => {
      if (inputRefs[index].current) {
        inputRefs[index].current.click();
      }
    };
    return (
      <div className="img-uploader flex sm:flex-col md:flex-row gap-4 justify-center">
        {images.map((image, index) => (
          <div
            key={index}
            className="img-container relative w-40 h-40
            aspect-square border-2
            border-dashed border-gray-300 rounded-xxl
            flex justify-center items-center cursor-pointer"
            onClick={() => handleDivClick(index)}
          >
            {image ? (
              <div className="relative w-40 h-40 rounded-xxl">
                <img
                  src={image}
                  alt={`Uploaded ${index}`}
                  className="w-full h-full object-cover w-full h-full
                      object-cover rounded-xxl"
                />
                <button
                  className="btn-img-upload absolute top-2 right-2 bg-red-500 text-white
                  rounded-xxl w-6 h-6 flex items-center justify-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleImageRemove(index);
                  }}
                >
                  X
                </button>
              </div>
            ) : (
              <span className="btn-text-upload-img">{t('Common.ClickUpload')}</span>
            )}
            <input
              type="file"
              accept="image/*"
              className="input-img-upload hidden"
              ref={inputRefs[index]}
              onChange={(e) => handleImageChange(index, e)}
            />
          </div>
        ))}
      </div>
    );
  };
  
  export default ImageUploader;