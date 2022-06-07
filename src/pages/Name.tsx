import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
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
import { useHistory, useLocation } from "react-router";
import { ICharacter } from "../interfaces/character-interface";
import "./Name.css";

const Name: React.FC = () => {
  const location = useLocation();
  const history = useHistory();

  const [name, setName] = useState<any>();
  const [gender, setGender] = useState<any>();

  let [character] = useState<ICharacter>();
  const tempCharacter = location.state as ICharacter;

  function mountCharacter(name: string, gender: string) {
    character = {
      ...tempCharacter,
      name,
      gender,
    };

    return character;
  }

  function handleClick() {
    mountCharacter(name as string, gender as string);

    history.push({
      pathname: "/Avatar",
      state: character,
    });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Name and Gender</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Physics</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem class="Input">
            <IonLabel position="floating" class="Label">Name: </IonLabel>
            <IonInput
              color="danger"
              type="text"
              value={name}
              onIonChange={(e) => setName(e.detail.value!)}
            ></IonInput>
        </IonItem>
        <IonItem class="Select">
          <IonLabel>Gender</IonLabel>
          <IonSelect
            name="Gender"
            value={gender}
            onIonChange={(e) => setGender(e.detail.value!)}
          >
            <IonSelectOption value="Male">Male</IonSelectOption>
            <IonSelectOption value="Female">Female</IonSelectOption>
            <IonSelectOption value="Neutral Gender">Neutral Gender</IonSelectOption>
            <IonSelectOption value="Fluid Gender">Fluid Gender</IonSelectOption>
            <IonSelectOption value="Hermaphrodite">Hermaphrodite</IonSelectOption>
            <IonSelectOption value="Secret">Secret</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonButton
          expand="block"
          shape="round"
          type="submit"
          class="forward-button"
          onClick={handleClick}
        >
          Take Avatar Picture
          <IonIcon slot="end" icon={arrowForward} />
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Name;
