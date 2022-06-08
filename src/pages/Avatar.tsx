import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonIcon,
  IonGrid,
  IonCol,
  IonImg,
  IonRow,
  IonFab,
} from "@ionic/react";
import { useLocation } from "react-router";
import { ICharacter } from "../interfaces/character-interface";
import { arrowForward } from "ionicons/icons";
import { usePhotoGallery } from '../hooks/usePhotoGallery';
import { UserPhoto } from "../interfaces/avatar-photo-interface";
import { useState } from "react";

const Avatar: React.FC = () => {
  const location = useLocation();
  const character = location.state as ICharacter;

  const { photos, takePhoto } = usePhotoGallery();
  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Avatar</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Avatar</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h1>TAKE A PICTURE</h1>

        <IonButton
          expand="block"
          shape="round"
          type="button"
          class="forward-button"
          onClick={takePhoto}
        >
          Take Avatar Picture
          <IonIcon slot="end" icon={arrowForward} />
        </IonButton>
        
        <IonGrid>
    <IonRow>
      {photos.map((photo, index) => (
        <IonCol size="6" key={index}>
          <IonImg src={photo.webviewPath} />
          <p>{photo.filepath}</p>
        </IonCol>
      ))}
    </IonRow>
  </IonGrid>
   {/* <!-- <IonFab> markup  --></IonFab> */}
        
      </IonContent>
    </IonPage>
  );
};

export default Avatar;
