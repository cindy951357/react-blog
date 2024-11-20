'use client'

import React, { useState, useRef, useEffect, memo } from "react";
import { useRouter } from 'next/navigation';
import { useToast } from "../../context/ToastContext";
import { useTranslation,  } from "next-i18next";
import { MAX_POST_TITLE_LENGTH } from "@/constant";
import { IErrorPost, IPost, } from "@/interfaces/PostInterface";
import RippleButton from "../Button/RippleButton";
import { PostProvider, usePosts } from "@/context/PostContext";
import { v4 as uuidv4 } from 'uuid';
import { delay, } from '@/util/timeUtil';

const ImageUploader: React.FC = () => {
  const [images, setImages] = useState<(string | null)[]>([null, null]);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];
  const { t } = useTranslation('common');

  const handleImageChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImages = [...images];
        newImages[index] = reader.result as string;
        setImages(newImages);
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
    <div className="img-uploader flex flex-col md:flex-row gap-4 justify-center">
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
            <span className="btn-text-upload-img">{t('ClickUpload')}</span>
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

// useState：

// 使用 useState 鉤子來儲存圖片的內容，初始值為 [null, null]。
// useRef：

// 使用 useRef 鉤子來獲取文件輸入元素的引用。
// handleImageChange：

// 當選擇圖片時，這個函數會讀取圖片並將其設置為預覽圖。
// handleImageRemove：

// 當點擊右上角的 X 按鈕時，這個函數會移除對應的圖片。
// handleDivClick：

// 當點擊 div 時，這個函數會觸發文件輸入元素的點擊事件，以打開文件選擇對話框。
// 布局：

// 使用 flex 來控制佈局，當裝置寬度在 md 或更大時，divs 會左右排列；當裝置寬度在 xs 時，divs 會上下排列。
// 使用 aspect-square 類確保虛線框框和預覽圖片是正方形。
// 這樣的實現方式可以確保虛線框框和預覽圖片都是正方形，並且大小一致。這樣，當點擊 div 後，
// 可以打開上傳圖片的對話框，選擇圖片後可以預覽圖片，並且可以在圖片的右上方點擊 X 按鈕來刪除圖片。

const AddPost = memo(({}) => {
  const IDString = uuidv4();
  const { addPost, posts, } = usePosts();
  const [inputPost, setInputPost] = useState<IPost>(
    {
      id: IDString.toString(),
      postTitle: '',
      content: '',
      time: '',
      imgUrls: [],
      numLikes: 0,
    }
  );
  const [isEditStatusLocked, setIstEditStatusLocked] = useState(false);
  const [errorPost, setPostError] = useState<IErrorPost>({
    titleError: [false, 'Title cannot be empty.'],
    contentError: [false, ''],
    imageError: [[false, ''],]
  });
  const router = useRouter();
  const [prevPostsLen, setPrevPostLen] = useState<number>(posts.length);

  const { showToast } = useToast();

  const onTitleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setInputPost(oldInput => {
      return {
        ...oldInput,
        postTitle: event.target.value,
      }
    });
  };

  const onContentChange = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputPost(oldInput => {
      return {
        ...oldInput,
        content: event.target.value,
      }
    });
  };

  const validateInput = () => {
    //TODO:
  };

  const handleSave = async() => {
    //驗證輸入合法性
    validateInput();
    await addPost(inputPost);
    setIstEditStatusLocked(true);
    showToast(`Post saved successfully!`);
    await delay(4000);
  };
  

  useEffect(() => {
    if(posts.length > prevPostsLen) {
      //確認陣列長度有增加才存到localStorage
      localStorage.setItem('posts', JSON.stringify(posts));
      router.push('/');
    }    
  }, [posts.length, isEditStatusLocked]);

  return (
    <div className="add-post flex justify-center">
      <div className="input-add-post w-full h-full flex rounded-xl flex-col gap-4 justilfy-center">
      {/* <div className="text-lg">{posts.length}</div> TODO: DELETE THIS*/}
      <div className="input-titile-and-error">
        <input value={inputPost.postTitle} type="text" name="input-post-title" autoFocus={true} id="input_post_title" 
          className="w-full rounded-xxl outline-none border-2 border-gray text-lg h-10 p-4"
          onChange={(event) => {onTitleChange(event)}}
          maxLength={MAX_POST_TITLE_LENGTH} placeholder="Title here😎"
          disabled={isEditStatusLocked}
        />
        <span className='title-error flex pl-4 text-[#d15864]'>
          {errorPost.titleError[1]}
        </span>
      </div>      
        <textarea value={inputPost.content} onChange={event => {onContentChange(event)}}
          className="textarea-post text-left flex outline-none w-full h-60 md:h-100
            p-4 rounded-xxl resize-none border-2 border-gray bg-[#ffffff]"
            disabled={isEditStatusLocked}
        />
        <ImageUploader />
        <div
          className="btn-save btn-bg bg-slate-100 w-full rounded-xxl relative"
          onClick={handleSave}
        >
          <RippleButton
            displayText={"Save"}
            detail={false}
            withBg={true}
            onClick={handleSave}
          />
        </div>
      </div>
    </div>
  );
});

export default AddPost;
