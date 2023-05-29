import * as React from "react";
import {useDropzone} from "react-dropzone";

interface Props {
    onFileUpload: (file: File) => void;
}

export const MyDropzone: React.FC<Props> = ({ onFileUpload }) => {
    const onDrop = React.useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles && acceptedFiles.length > 0) {
            onFileUpload(acceptedFiles[0]);
        }
    }, [onFileUpload]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div
            {...getRootProps()}
            className={`dropzone${isDragActive ? " active" : ""}`}
        >
            <input {...getInputProps()} />
            <p>{isDragActive ? "Drop the file here" : "Drag 'n' drop a file here"}</p>
        </div>
    );
};

export default MyDropzone;