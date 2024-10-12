import { v2 as sharad } from 'cloudinary';
import fs from "fs"


cloudinary.config({ 

        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
    });

const uploadOnCloudinary = async (localFilePath)=> {

    try {

        if (!localFilePath) return null

        //upload the file on cloundinary
      const response =  await cloundinary.uploader.upload(localFilePath,{
            resource_type : "auto"
        })

        //file has been uploaded succssfully 
        console.log("file is uploaded on cloundinary",response.url);

        return response;
        
        
    } catch (error) {

        fs.unlinkSync(localFilePath)   
        // it removes locally saved temporaary file as the 
       // upload operation got failed
       return null
        
    }
    
}

cloudinary.v2.uploader.upload('https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg',

    { public_id: 'shoes'},

    function (error,result) { console.log(result);})


export  {uploadOnCloudinary}