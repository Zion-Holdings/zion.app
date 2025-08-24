import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useCallback } from 'react';
import { Upload, X, File, Image, FileText, Music, Video, Archive, CheckCircle, AlertCircle } from 'lucide-react';
const getFileIcon = (type) => {
    if (type.startsWith('image/'))
        return Image;
    if (type.startsWith('video/'))
        return Video;
    if (type.startsWith('audio/'))
        return Music;
    if (type.includes('pdf') || type.includes('document'))
        return FileText;
    if (type.includes('zip') || type.includes('rar') || type.includes('tar'))
        return Archive;
    return File;
};
const formatFileSize = (bytes) => {
    if (bytes === 0)
        return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};
const validateFile = (file, maxSize, accept) => {
    if (maxSize && file.size > maxSize) {
        return `File size exceeds ${formatFileSize(maxSize)}`;
    }
    if (accept) {
        const acceptedTypes = accept.split(',').map(type => type.trim());
        const fileType = file.type;
        const fileName = file.name;
        const isValidType = acceptedTypes.some(type => {
            if (type.startsWith('.')) {
                return fileName.toLowerCase().endsWith(type.toLowerCase());
            }
            if (type.endsWith('/*')) {
                return fileType.startsWith(type.slice(0, -1));
            }
            return fileType === type;
        });
        if (!isValidType) {
            return `File type not allowed. Accepted types: ${accept}`;
        }
    }
    return null;
};
export const FileUpload = ({ onFilesSelected, onFileUpload, onFileRemove, multiple = false, accept, maxSize, maxFiles, showPreview = true, dragAndDrop = true, className = '' }) => {
    const [files, setFiles] = useState([]);
    const [isDragOver, setIsDragOver] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef(null);
    const addFiles = useCallback((newFiles) => {
        const fileArray = Array.from(newFiles);
        const validFiles = [];
        const errors = [];
        fileArray.forEach(file => {
            const error = validateFile(file, maxSize, accept);
            if (error) {
                errors.push(`${file.name}: ${error}`);
            }
            else {
                validFiles.push(file);
            }
        });
        if (errors.length > 0) {
            alert(`Some files could not be added:\n${errors.join('\n')}`);
        }
        if (validFiles.length > 0) {
            const newFileInfos = validFiles.map(file => ({
                id: Math.random().toString(36).substr(2, 9),
                file,
                name: file.name,
                size: file.size,
                type: file.type,
                progress: 0,
                status: 'uploading',
                preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : undefined
            }));
            setFiles(prev => {
                const updatedFiles = [...prev, ...newFileInfos];
                if (maxFiles && updatedFiles.length > maxFiles) {
                    return updatedFiles.slice(0, maxFiles);
                }
                return updatedFiles;
            });
            onFilesSelected(validFiles);
            // Simulate upload if onFileUpload is provided
            if (onFileUpload) {
                newFileInfos.forEach(async (fileInfo) => {
                    try {
                        await onFileUpload(fileInfo);
                        setFiles(prev => prev.map(f => f.id === fileInfo.id
                            ? Object.assign(Object.assign({}, f), { status: 'completed', progress: 100 }) : f));
                    }
                    catch (error) {
                        setFiles(prev => prev.map(f => f.id === fileInfo.id
                            ? Object.assign(Object.assign({}, f), { status: 'error', error: error instanceof Error ? error.message : 'Upload failed' }) : f));
                    }
                });
            }
        }
    }, [maxSize, accept, maxFiles, onFilesSelected, onFileUpload]);
    const handleFileSelect = (event) => {
        const selectedFiles = event.target.files;
        if (selectedFiles) {
            addFiles(selectedFiles);
            // Reset input value to allow selecting the same file again
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        }
    };
    const handleDragOver = (event) => {
        event.preventDefault();
        setIsDragOver(true);
    };
    const handleDragLeave = (event) => {
        event.preventDefault();
        setIsDragOver(false);
    };
    const handleDrop = (event) => {
        event.preventDefault();
        setIsDragOver(false);
        const droppedFiles = event.dataTransfer.files;
        if (droppedFiles.length > 0) {
            addFiles(droppedFiles);
        }
    };
    const removeFile = (fileId) => {
        setFiles(prev => {
            const fileToRemove = prev.find(f => f.id === fileId);
            if (fileToRemove === null || fileToRemove === void 0 ? void 0 : fileToRemove.preview) {
                URL.revokeObjectURL(fileToRemove.preview);
            }
            return prev.filter(f => f.id !== fileId);
        });
        onFileRemove === null || onFileRemove === void 0 ? void 0 : onFileRemove(fileId);
    };
    const openFileSelector = () => {
        var _a;
        (_a = fileInputRef.current) === null || _a === void 0 ? void 0 : _a.click();
    };
    const getStatusIcon = (status) => {
        switch (status) {
            case 'completed':
                return _jsx(CheckCircle, { className: "w-4 h-4 text-green-500" });
            case 'error':
                return _jsx(AlertCircle, { className: "w-4 h-4 text-red-500" });
            default:
                return _jsx(Upload, { className: "w-4 h-4 text-blue-500 animate-pulse" });
        }
    };
    const getStatusColor = (status) => {
        switch (status) {
            case 'completed':
                return 'border-green-200 bg-green-50';
            case 'error':
                return 'border-red-200 bg-red-50';
            default:
                return 'border-blue-200 bg-blue-50';
        }
    };
    return (_jsxs("div", { className: `space-y-4 ${className}`, children: [_jsx("input", { ref: fileInputRef, type: "file", multiple: multiple, accept: accept, onChange: handleFileSelect, className: "hidden" }), dragAndDrop && (_jsxs("div", { className: `
            border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer
            ${isDragOver
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'}
          `, onDragOver: handleDragOver, onDragLeave: handleDragLeave, onDrop: handleDrop, onClick: openFileSelector, children: [_jsx(Upload, { className: "w-12 h-12 text-gray-400 mx-auto mb-4" }), _jsx("p", { className: "text-lg font-medium text-gray-900 mb-2", children: "Drop files here or click to browse" }), _jsxs("p", { className: "text-sm text-gray-500", children: [accept ? `Accepted types: ${accept}` : 'All file types accepted', maxSize && ` • Max size: ${formatFileSize(maxSize)}`, maxFiles && ` • Max files: ${maxFiles}`] })] })), !dragAndDrop && (_jsxs("button", { onClick: openFileSelector, className: "w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg text-center hover:border-gray-400 hover:bg-gray-50 transition-colors", children: [_jsx(Upload, { className: "w-8 h-8 text-gray-400 mx-auto mb-2" }), _jsx("p", { className: "text-lg font-medium text-gray-900", children: "Click to select files" })] })), files.length > 0 && (_jsxs("div", { className: "space-y-3", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900", children: "Selected Files" }), files.map((fileInfo) => {
                        const Icon = getFileIcon(fileInfo.type);
                        return (_jsx("div", { className: `border rounded-lg p-4 ${getStatusColor(fileInfo.status)}`, children: _jsxs("div", { className: "flex items-center space-x-3", children: [_jsx("div", { className: "flex-shrink-0", children: showPreview && fileInfo.preview ? (_jsx("img", { src: fileInfo.preview, alt: fileInfo.name, className: "w-12 h-12 object-cover rounded" })) : (_jsx(Icon, { className: "w-12 h-12 text-gray-400" })) }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsxs("div", { className: "flex items-center space-x-2 mb-1", children: [getStatusIcon(fileInfo.status), _jsx("h4", { className: "text-sm font-medium text-gray-900 truncate", children: fileInfo.name })] }), _jsxs("div", { className: "flex items-center space-x-4 text-xs text-gray-500", children: [_jsx("span", { children: formatFileSize(fileInfo.size) }), _jsx("span", { children: fileInfo.type })] }), fileInfo.status === 'uploading' && (_jsxs("div", { className: "mt-2", children: [_jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: _jsx("div", { className: "bg-blue-600 h-2 rounded-full transition-all duration-300", style: { width: `${fileInfo.progress}%` } }) }), _jsxs("span", { className: "text-xs text-gray-500", children: [fileInfo.progress, "%"] })] })), fileInfo.status === 'error' && fileInfo.error && (_jsx("p", { className: "text-sm text-red-600 mt-1", children: fileInfo.error }))] }), _jsx("button", { onClick: () => removeFile(fileInfo.id), className: "flex-shrink-0 p-1 hover:bg-red-100 rounded-full transition-colors", children: _jsx(X, { className: "w-4 h-4 text-red-500" }) })] }) }, fileInfo.id));
                    })] }))] }));
};
