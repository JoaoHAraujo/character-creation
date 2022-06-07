import { useState } from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Traits.css";
import { arrowForward } from "ionicons/icons";
import { useHistory, useLocation } from "react-router";
import { ICharacter } from "../interfaces/character-interface";

const Traits: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const tempCharacter = location.state as ICharacter;

  const [traits, setTraits] = useState<string[]>();
  let [character] = useState<ICharacter>();

  function mountCharacter(traits: string[]) {
    character = {
      ...tempCharacter,
      traits,
    };

    return character;
  }

  function handleClick() {
    mountCharacter(traits as string[]);

    history.push({
      pathname: "/Physics",
      state: character,
    });
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Traits</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Traits</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem class="Select">
          <IonLabel>Pick some traits</IonLabel>
          <IonSelect
            name="Traits"
            multiple
            value={traits}
            onIonChange={(e) => setTraits(e.detail.value!)}
          >
            <IonSelectOption value="Loyal">Loyal</IonSelectOption>
            <IonSelectOption value="Book worm">Book worm</IonSelectOption>
            <IonSelectOption value="Evasive">Evasive</IonSelectOption>
            <IonSelectOption value="Morally ambiguous">
              Morally ambiguous
            </IonSelectOption>
            <IonSelectOption value="Faithful">Faithful</IonSelectOption>
            <IonSelectOption value="Skeptic">Skeptic</IonSelectOption>
            <IonSelectOption value="Selfish">Selfish</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonButton
          expand="block"
          shape="round"
          type="submit"
          class="forward-button"
          onClick={handleClick}
        >
          Define your physics
          <IonIcon slot="end" icon={arrowForward} />
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Traits;
