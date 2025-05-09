import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaUpload, FaImage, FaTimesCircle } from 'react-icons/fa';

const ImageUploader = ({ onUpload, accept, maxSize = 5242880, title, subtitle }) => {
  const [preview, setPreview] = useState(null);

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        const reader = new FileReader();
        
        reader.onload = () => {
          setPreview(reader.result);
          onUpload(file);
        };
        
        reader.readAsDataURL(file);
      }
    },
    [onUpload]
  );

  const { getRootProps, getInputProps, isDragActive, fileRejections } = useDropzone({
    onDrop,
    accept,
    maxSize,
    maxFiles: 1,
  });

  const clearImage = (e) => {
    e.stopPropagation();
    setPreview(null);
    onUpload(null);
  };

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <div key={file.path} className="text-red-500 mt-2 text-sm">
      {errors.map(e => (
        <p key={e.code}>{e.message}</p>
      ))}
    </div>
  ));

  return (
    <div className="mb-6">
      <div
        {...getRootProps()}
        className={`dropzone ${isDragActive ? 'dropzone-active' : ''} ${
          preview ? 'border-[#5718e3] bg-purple-50' : ''
        }`}
      >
        <input {...getInputProps()} />
        
        {preview ? (
          <div className="relative">
            <button
              onClick={clearImage}
              className="absolute top-2 right-2 text-red-500 bg-white rounded-full p-1 shadow-md hover:bg-red-100 transition-colors"
            >
              <FaTimesCircle className="text-xl" />
            </button>
            <img src={preview} alt="Preview" className="image-preview max-h-64" />
          </div>
        ) : (
          <div className="text-center">
            {isDragActive ? (
              <FaUpload className="mx-auto text-4xl text-[#5718e3] mb-3" />
            ) : (
              <FaImage className="mx-auto text-4xl text-[#5718e3] mb-3" />
            )}
            <h4 className="text-lg font-medium mb-1">{title || 'Upload Image'}</h4>
            <p className="text-gray-500 text-sm mb-3">
              {subtitle || 'Drag & drop an image here, or click to select'}
            </p>
            <p className="text-xs text-gray-400">
              Accepted formats: {Object.values(accept).join(', ')}
            </p>
            <p className="text-xs text-gray-400">
              Max size: {Math.round(maxSize / 1024 / 1024)}MB
            </p>
          </div>
        )}
      </div>
      {fileRejectionItems}
    </div>
  );
};

export default ImageUploader;
