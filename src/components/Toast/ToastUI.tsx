import { ToastUIProps } from "@/interfaces/ToastInterface";

const ToastUI: React.FC<ToastUIProps> = ({ toast, }) => {
    return toast.message && <div className="toast-screen-wrapper w-screen h-screen 
        fixed flex items-center justify-center z-70">
            <div className="toast-message absolute bg-secondary-200 w-fit h-fit p-8
                    items-center justify-center flex">
                    <strong className='text-4xl text-black  w-full h-full z-999'>
                        {toast.message}
                    </strong>
                </div>
            <div className="pastel-intersection w-fit h-fit relative overflow-hidden p-8
            ">
                {/** 曾經的霓虹背景 */}
                {/* <div className="w-full h-full absolute inset-0 bg-gradient-to-br
                    from-[rgb(248,205,211)] via-[rgb(254,247,237)]
                    to-[rgb(255,250,243)]
                    border-12 border-opacity-30
                    "></div>
                <div className="w-full h-full absolute inset-0 bg-gradient-to-tl
                    from-[rgb(244,255,184)] via-[rgb(250,239,225)]
                    to-[rgb(255,255,255)]
                    border-12 border-opacity-30
                    "></div> */}
                
            </div>
        </div>                     
};

export default ToastUI;
