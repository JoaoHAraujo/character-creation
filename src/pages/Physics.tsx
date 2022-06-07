import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonRange,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { arrowForward } from "ionicons/icons";
import { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { ICharacter } from "../interfaces/character-interface";
import "./Physics.css";

const Physics: React.FC = () => {

  const location = useLocation();
  const history = useHistory();

  let [character] = useState<ICharacter>();
  const tempCharacter = location.state as ICharacter;

  const [strength, setStrength] = useState<any>();
  const [intelligence, setIntelligence] = useState<any>();
  const [willpower, setWillpower] = useState<any>();
  const [cunning, setCunning] = useState<any>();
  const [agility, setAgility] = useState<any>();
  const [faith, setFaith] = useState<any>();

  function mountCharacter(
    strength: number,
    intelligence: number,
    willpower: number,
    cunning: number,
    agility: number,
    faith: number
  ) {
    character = {
      ...tempCharacter,
      physics: {
        strength,
        intelligence,
        willpower,
        cunning,
        agility,
        faith,
      },
    };

    return character;
  }

  function handleClick() {
    mountCharacter(
      strength as number,
      intelligence as number,
      willpower as number,
      cunning as number,
      agility as number,
      faith as number
    );

    history.push({
      pathname: "/Name",
      state: character,
    });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Physics</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Physics</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem class="RangeSelect">
          <IonLabel>Strength</IonLabel>
          <IonRange
            color="primary"
            pin={true}
            value={strength}
            onIonChange={(e) => setStrength(e.detail.value)}
          ></IonRange>
        </IonItem>

        <IonItem class="RangeSelect">
          <IonLabel>Intelligence</IonLabel>
          <IonRange
            color="primary"
            pin={true}
            value={intelligence}
            onIonChange={(e) => setIntelligence(e.detail.value)}
          ></IonRange>
        </IonItem>
        <IonItem class="RangeSelect">
          <IonLabel>Willpower</IonLabel>
          <IonRange
            color="primary"
            pin={true}
            value={willpower}
            onIonChange={(e) => setWillpower(e.detail.value)}
          ></IonRange>
        </IonItem>
        <IonItem class="RangeSelect">
          <IonLabel>Cunning</IonLabel>
          <IonRange
            color="primary"
            pin={true}
            value={cunning}
            onIonChange={(e) => setCunning(e.detail.value)}
          ></IonRange>
        </IonItem>
        <IonItem class="RangeSelect">
          <IonLabel>Agility</IonLabel>
          <IonRange
            color="primary"
            pin={true}
            value={agility}
            onIonChange={(e) => setAgility(e.detail.value)}
          ></IonRange>
        </IonItem>
        <IonItem class="RangeSelect">
          <IonLabel>Faith</IonLabel>
          <IonRange
            color="primary"
            pin={true}
            value={faith}
            onIonChange={(e) => setFaith(e.detail.value)}
          ></IonRange>
        </IonItem>
        <IonButton
          expand="block"
          shape="round"
          type="submit"
          class="forward-button button"
          onClick={handleClick}
        >
          Name your Character
          <IonIcon slot="end" icon={arrowForward} />
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Physics;
