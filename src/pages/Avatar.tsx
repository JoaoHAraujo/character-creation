import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { useLocation } from "react-router";
import { Camera, CameraResultType } from '@capacitor/camera';
import { ICharacter } from "../interfaces/character-interface";
import { arrowForward } from "ionicons/icons";

const Avatar: React.FC = () => {
  const location = useLocation();
  const character = location.state as ICharacter;

  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
}

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
          onClick={takePicture}
        >
          Take Avatar Picture
          <IonIcon slot="end" icon={arrowForward} />
        </IonButton>
        

        <div></div>
      </IonContent>
    </IonPage>
  );
};

export default Avatar;
