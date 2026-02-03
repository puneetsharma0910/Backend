import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({
  cloud_name: 'daxkzfykk',
  api_key: import.meta.env.CLOUDINARY_KEY ,
  api_secret:import.meta.env.CLOUDINARY_SECRET,
});