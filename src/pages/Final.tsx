import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";
import { useLocation } from "react-router";
import { ICharacter } from "../interfaces/character-interface";

const Final: React.FC = () => {  
  const location = useLocation();
  const character = location.state as ICharacter;

    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Character</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Physics</IonTitle>
            </IonToolbar>
          </IonHeader>
          <h1>Character succesfully created!</h1>
          <h2>{character.name}</h2>
          <p><strong>Origin</strong>: {character.origin}</p>
          <p><strong>Race</strong>: {character.race}</p>
          <p><strong>Gender</strong>: {character.gender}</p>
          
          <div></div>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Final;