import { ToastUIProps } from "@/interfaces/ToastInterface";

const ToastUI: React.FC<ToastUIProps> = ({ toast, }) => {
    return toast.message && <div className="toast-screen-wrapper w-screen h-screen 
        fixed flex items-center justify-center">
            <div className="pastel-intersection w-fit h-fit relative
                rounded-xxl overflow-hidden p-8
            ">
                <div className="w-full h-full absolute inset-0 bg-gradient-to-br
                    from-[#f8cdd3] via-[#fef7ed] to-[#fffaf3] opacity-50
                    border-12 border-opacity-30
                    "></div>
                <div className="w-full h-full absolute inset-0 bg-gradient-to-tl
                    from-[#f4ffb8] via-[#faefe1] to-[#ffffff] opacity-50
                    border-12 border-opacity-30
                    "></div>
                <div className="toast-message w-full h-full
                    items-center justify-center flex">
                    <strong className='text-xl text-black  w-full h-full z-999'>
                        {toast.message}
                    </strong>
            </div>
            </div>                     
      </div>  
};

export default ToastUI;
