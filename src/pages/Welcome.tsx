import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { arrowForward } from "ionicons/icons";
import { useHistory } from "react-router";
import "./Welcome.css";

const Welcome: React.FC = () => {
  const history = useHistory();
  function handleClick() {
    history.push({
      pathname: "/Race",
    });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle >Character Creation App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="small">Welcome</IonTitle>
          </IonToolbar>
        </IonHeader>


        <h1>Bem-vindo ao Char UP!</h1>

        <p id="description">Um app para montagens de características para personagens, voltado ao mundo RPG.</p>

        <p>Deixe a magia te dominar!</p>
        
        <IonButton
          expand="block"
          shape="round"
          type="submit"
          class="forward-button"
          onClick={handleClick}
        >
          Start <IonIcon slot="end" icon={arrowForward} />
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
