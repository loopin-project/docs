import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { Button, Flex, Image } from 'antd';

interface CheckResponse {
    exists: boolean;
    image?: string;
}


export default function ImageStyleTransfer() {
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [processedImage, setProcessedImage] = useState<string | null>(null);
    const [uuid, setUuid] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const url = "https://playground-comfyui-clay.loopin.network"

    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/png': ['.png'],
        },
        onDrop: (acceptedFiles: File[]) => {
            const file = acceptedFiles[0];
            setImageFile(file);
        }
    });

    let interval: NodeJS.Timeout;

    useEffect(() => {
        if (uuid) {
            interval = setInterval(() => {
                checkImage(uuid);
            }, 3000);
        }

        return () => clearInterval(interval);
    }, [uuid]);

    async function sendImage(file: File) {
        // Convert file to base64
        setIsLoading(true);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = async () => {
            const base64Data = reader.result;
            if (typeof base64Data === 'string') {
                try {
                    const response = await axios.post(url + '/generate', {
                        image_data: base64Data,
                    }, {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
                    setUuid(response.data.uuid);
                } catch (error) {
                    console.error('Error uploading image:', error);
                }
            }
        };
        reader.onerror = error => {
            console.error('Error converting image to base64:', error);
        };
    }

    async function checkImage(uuid: string) {
        try {
            const response = await axios.get<CheckResponse>(url + `/check?uuid=${uuid}`);
            if (response.data.exists && response.data.image) {
                setProcessedImage(`data:image/png;base64,${response.data.image}`);
                setIsLoading(false);
                clearInterval(interval);
            } else {
                setIsLoading(true);
            }
        } catch (error) {
            console.error('Error checking image:', error);
        }
    }

    return (
        <Layout title="AI Image Style Transfer" description="Upload and stylize your images">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
                <div style={{ textAlign: 'center' }}>
                    <div {...getRootProps()} style={{ border: '2px dashed gray', padding: '20px', cursor: 'pointer' }}>
                        <input {...getInputProps()} />
                        <div>Drag & drop your .png image here, or click to select</div>
                    </div>
                    <Flex vertical >
                        {imageFile && <img src={URL.createObjectURL(imageFile)} alt="Uploaded" style={{ width: '400px', height: 'auto', margin: '20px' }} />}
                        {imageFile && <Button type="primary" disabled={isLoading} onClick={() => sendImage(imageFile)}>Convert</Button>}
                    </Flex>
                </div>
                <div style={{ textAlign: 'center' }}>
                    {isLoading && <p style={{ width: '400px', height: 'auto', margin: '20px' }}>Loading...</p>}
                    {!isLoading && processedImage && <Image src={processedImage} alt="Processed" style={{ width: '500px', height: 'auto', margin: '20px' }} />}
                </div>
            </div>
        </Layout>
    );
}