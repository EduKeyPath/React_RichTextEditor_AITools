import React, {useState, useEffect} from "react";
import { createWorker } from "tesseract.js";
import './image-to-text.css';

export default function ImageToText(){ 
    const [ocr, setOcr] = useState("");
    const [imageData, setImageData] = useState(null);
    // const [progress, setProgress] = useState(0);  

    const worker = createWorker({
        logger: (m) => {
            // console.log(m);
            // setProgress(parseInt(m.progress * 100));
        }
    });

    const convertImageToText = () => {
        if (!imageData) return;
        worker.then(async (res) => {
            console.log(res)
            await res.load();
            await res.loadLanguage("eng");
            await res.initialize("eng");
            const {
            data: { text },
            } = await res.recognize(imageData);
            setOcr(text);
        })
    };

    useEffect(() => {
        convertImageToText();
    }, [imageData]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if(!file)return;
        const reader = new FileReader();
        reader.onloadend = () => {
          const imageDataUri = reader.result;
        //   console.log({ imageDataUri });
          setImageData(imageDataUri);
        };
        reader.readAsDataURL(file);
    }

    return(
        <>
            <div className="row image-converter">
                <div className="col-6">
                    <div className="mb-3 form-group">
                        <label className="input-label">Choose an Image</label>
                        <input
                            className="form-control"
                            type="file"
                            name=""
                            id=""
                            onChange={handleImageChange}
                            accept="image/*"
                        />
                    </div>
                    <div className="image-box">
                        {
                            !! imageData ?
                            <img src={imageData} alt="" srcSet="" />
                            : <span className="material-icons-outlined image-icon">image</span>
                        }
                    </div>
                </div>
                <div className="col-6">
                    <div className="converted-content-body pt-1">
                        <h3 className="hdng">Content</h3>
                        <div className="content-box">
                            {
                                !! ocr ?
                                <p>{ocr}</p>
                                : 
                                <div className="content-box-icon">
                                    <span className="material-icons-outlined content-icon">description</span>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* {progress < 100 && progress > 0 && <div>
                <div className="progress-label">Progress ({progress}%)</div>
                <div className="progress-bar">
                <div className="progress" style={{width: `${progress}%`}} ></div>
                </div>
            </div>} */}
        </>
    )
}