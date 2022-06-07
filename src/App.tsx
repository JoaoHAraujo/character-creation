import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  IonTabBar,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Race from "./pages/Race";
import Traits from "./pages/Traits";
import Physics from "./pages/Physics";
import Name from "./pages/Name";
import Avatar from "./pages/Avatar";
import Final from "./pages/Final";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/race" component={Race}>
            <Race />
          </Route>
          <Route exact path="/traits" component={Traits}>
            <Traits />
          </Route>
          <Route exact path="/physics" component={Physics}>
            <Physics />
          </Route>
          <Route exact path="/name" component={Name}>
            <Name />
          </Route>
          <Route exact path="/avatar" component={Avatar}>
            <Avatar />
          </Route>
          <Route exact path="/final" component={Final}>
            <Final />
          </Route>
          <Route exact path="/">
            <Redirect to="/race" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          {/* <IonTabButton tab="race" disabled href="/race">
            <IonIcon icon={person} />
            <IonLabel>Race and Origin</IonLabel>
          </IonTabButton>
          <IonTabButton tab="traits" disabled href="/traits">
            <IonIcon icon={star} />
            <IonLabel>Traits</IonLabel>
          </IonTabButton>
          <IonTabButton tab="physics" disabled href="/physics">
            <IonIcon icon={body} />
            <IonLabel>Physics</IonLabel>
          </IonTabButton>
          <IonTabButton tab="name" disabled href="/name">
            <IonIcon icon={atOutline} />
            <IonLabel>Name</IonLabel>
          </IonTabButton> */}
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
