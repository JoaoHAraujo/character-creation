import { useState } from "react";

import {
  Camera,
  CameraResultType,
  CameraSource,
} from "@capacitor/camera";
import { UserPhoto } from "../interfaces/avatar-photo-interface";

export function usePhotoGallery() {
  const [photos, setPhotos] = useState<UserPhoto[]>([]);
  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
    const fileName = new Date().getTime() + ".jpeg";
    const newPhotos = [
      {
        filepath: fileName,
        webviewPath: photo.webPath,
      },
      ...photos,
    ];
    setPhotos(newPhotos);
  };

  return {
    photos,
    takePhoto,
  };
}
