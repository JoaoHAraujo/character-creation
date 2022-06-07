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
import { arrowForward } from "ionicons/icons";
import { useState } from "react";
import { useHistory } from "react-router";
import { ICharacter } from "../interfaces/character-interface";
import "./Race.css";

const Race: React.FC = () => {

  let history = useHistory();

  let [characterFirstStep] = useState<ICharacter>();
  const [race, setRace] = useState<string>();
  const [origin, setOrigin] = useState<string>();

  function mountCharacter(race: string, origin: string) {
    characterFirstStep = {
      race,
      origin,
    }

    return characterFirstStep
  }

  function handleClick() {
    mountCharacter(race as string, origin as string);

    history.push({
      pathname: '/Traits',
      state: characterFirstStep
    });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Choose a Race</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="small">Race</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem class="Select">
          <IonLabel>Pick a Race</IonLabel>
          <IonSelect
            name="Race"
            value={race}
            onIonChange={(e) => setRace(e.detail.value!)}
          >
            <IonSelectOption value="Human">Human</IonSelectOption>
            <IonSelectOption value="Elf">Elf</IonSelectOption>
            <IonSelectOption value="Dwarf">Dwarf</IonSelectOption>
            <IonSelectOption value="Giant">Giant</IonSelectOption>
            <IonSelectOption value="Goblin">Goblin</IonSelectOption>
            <IonSelectOption value="Orc">Orc</IonSelectOption>
            <IonSelectOption value="Fairy">Fairy</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem class="Select">
          <IonLabel>Pick an Origin</IonLabel>
          <IonSelect
            name="Origin"
            value={origin}
            onIonChange={(e) => setOrigin(e.detail.value!)}
          >
            <IonSelectOption value="Artrea">Artrea</IonSelectOption>
            <IonSelectOption value="Aerath">Aerath</IonSelectOption>
            <IonSelectOption value="Dallara">Dallara</IonSelectOption>
            <IonSelectOption value="Draigtir">Draigtir</IonSelectOption>
            <IonSelectOption value="Draisor">Draisor</IonSelectOption>
            <IonSelectOption value="Karrnath">Karrnath</IonSelectOption>
            <IonSelectOption value="Riedra">Riedra</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonButton
          expand="block"
          shape="round"
          type="submit"
          class="forward-button"
          onClick={handleClick}
        >
          Traits <IonIcon slot="end" icon={arrowForward} />
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Race;
