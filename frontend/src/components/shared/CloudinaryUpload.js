import {openUploadWidget} from "../../utils/CloudinaryService";
import { cloudinary_upload_present } from "../../config";

const  CloudinaryUpload = ({setName, setUrl}) => {
    const uploadImageWidget = () => {
        let myUploadWidget = openUploadWidget(
            {
                cloudName: "dqpifrgev",  //my cloud name
                uploadPreset: cloudinary_upload_present, // upload presenr name
                sources: ["local"],  // only from local system
            },
            function (error, result) {
                if (!error && result.event === "success") {
                   setUrl(result.info.secure_url);
                   setName(result.info.original_filename);
                } else {
                    if (error) {
                        console.log(error);
                    }
                }
            }
        );
        myUploadWidget.open();
    };

    return (
        <button
            className="bg-white text-black rounded-full px-4 py-2 font-semibold hover:bg-[#1cd85e]"
            onClick={uploadImageWidget}
        >
            select track
        </button>
    );
};

export default CloudinaryUpload;