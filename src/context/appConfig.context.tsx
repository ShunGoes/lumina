import { createContext, ReactNode, useContext, useState } from "react";

export const AppConfigContext = createContext<{
    toggleCamera: () => void;
    isCameraOpen: boolean;
    togglePictureOptions: () => void;
    isPictureOptionOpen: boolean;
    uploadedFileUrl: string;
    uploadToCloudinary: (
        image: File | Blob,
        onSuccessCallback: (e: string) => void,
    ) => void;
}>({
    isCameraOpen: false,
    toggleCamera: () => null,
    togglePictureOptions: () => null,
    isPictureOptionOpen: false,
    uploadedFileUrl: "",
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    uploadToCloudinary: (_image: File | Blob) => null,
});

export const AppConfigProvider = ({ children }: { children: ReactNode }) => {
    const [isCameraOpen, setCameraOpen] = useState<boolean>(false);
    const [isPictureOptionOpen, setIsPictureOptionOpen] = useState(false);
    const [uploadedFileUrl, setUploadedFileUrl] = useState<string>("");

    const toggleCamera = () => {
        setCameraOpen(!isCameraOpen);
    };

    const togglePictureOptions = () => {
        setIsPictureOptionOpen(!isPictureOptionOpen);
    };

    const uploadToCloudinary = async (
        file: Blob | File,
        onSuccessCallback: (e: string) => void,
    ) => {
        setUploadedFileUrl("");
        const cloudinary_name = import.meta.env.VITE_CLOUDINARY_NAME;
        const cloudinary_preset = import.meta.env.VITE_UPLOAD_PRESET;

        const image = new FormData();
        image.append("file", file);
        image.append("cloud_name", cloudinary_name);
        image.append("upload_preset", cloudinary_preset);

        try {
            const response = await fetch(
                `https://api.cloudinary.com/v1_1/${cloudinary_name}/upload`,
                {
                    method: "POST",
                    body: image,
                },
            );

            const data = await response.json();

            setUploadedFileUrl(data.url);
            onSuccessCallback(data.url);
        } catch (error) {
            console.log("An Error occured uploading image:", error);
        }
    };

    const value = {
        toggleCamera,
        isCameraOpen,
        togglePictureOptions,
        isPictureOptionOpen,
        uploadedFileUrl,
        uploadToCloudinary,
    };

    return (
        <AppConfigContext.Provider value={value}>
            {children}
        </AppConfigContext.Provider>
    );
};
// eslint-disable-next-line react-refresh/only-export-components
export const useAppConfig = () => useContext(AppConfigContext);
