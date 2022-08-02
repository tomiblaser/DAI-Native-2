import tensorflow from '@tensorflow/tfjs'
import teachablemachine from '@teachablemachine/image'
    
    // More API functions here:
    // https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

    // the link to your model provided by Teachable Machine export panel
    const URL = "https://teachablemachine.withgoogle.com/models/2dL1kcnIf/";

    let model, webcam, labelContainer, maxPredictions;

    // Load the image model and setup the webcam
    export async function init() {
        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";

        // load the model and metadata
        // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
        // or files from your local hard drive
        // Note: the pose library adds "tmImage" object to your window (window.tmImage)
        model = await tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();

        
        const devices = await navigator.mediaDevices.enumerateDevices()


        // Convenience function to setup a webcam
        const flip = false; // whether to flip the webcam
        webcam = new tmImage.Webcam( document.body.clientWidth,  document.body.clientWidth, flip); // width, height, flip
        await webcam.setup({ facingMode: "environment" }); // request access to the webcam
            await webcam.play();
            window.requestAnimationFrame(loop);

        // append elements to the DOM
        document.getElementById("webcam-container").appendChild(webcam.canvas);
        labelContainer = document.getElementById("label-container");
        for (let i = 0; i < maxPredictions; i++) { // and class labels
            labelContainer.appendChild(document.createElement("div"));
        }
    }

    export async function loop() {
        webcam.update(); // update the webcam frame
        await predict();
        window.requestAnimationFrame(loop);
    }

    // run the webcam image through the image model
    export async function predict() {
        // predict can take in an image, video or canvas html element
        var objMasAlto;
        const prediction = await model.predict(webcam.canvas);
        for (let i = 0; i < maxPredictions; i++) {
            if(prediction[i].probability>0.85 && prediction[i]!=objMasAlto){
                const classPrediction =
                    prediction[i].className;
                labelContainer.innerHTML = prediction[i].className;
                objMasAlto=classPrediction;
            }else if(prediction[i]<0.85){
                labelContainer.innerHTML =`No reconozco` ;
            }
        }
    }