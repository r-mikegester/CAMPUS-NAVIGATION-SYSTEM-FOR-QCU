import { IonContent, IonPage } from "@ionic/react";
import { useHistory } from "react-router-dom";
import "../assets/css/Campuses.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import SanBartolome from '../components/campus/SanBartolome';
import SanFransisco from '../components/campus/SanFransisco';
import { Icon } from '@iconify/react';
import Dock from "../components/controls/navigationControls/dock";
import sample from "../assets/imgs/selectCampus/sample.png";
import devPlan from "../assets/imgs/selectCampus/developmentalPlan.png";
import sb from "../assets/imgs/selectCampus/SanBartolome.webp";
import b from "../assets/imgs/selectCampus/Batasan.webp";
import sf from "../assets/imgs/selectCampus/SanFransisco.webp";
interface ContainerProps {
  name: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ion-icon": any; // Add this declaration for ion-icon
    }
  }
}

const SelectCampus: React.FC<ContainerProps> = ({ name }) => {
  const history = useHistory();
  const { t } = useTranslation();

  const ClickSB = () => {
    // Redirect to the "/Map" route
    history.push("/SanBartolome");
  };
  return (
    <IonPage>
      <IonContent fullscreen className="bg-sc">
        <main className="shadow-none">
          <section className="m-4 md:m-8 pb-40">
            <div className="container mx-auto p-4 my-6 space-y-2 text-center">
              <h2 className="text-5xl font-bold">Campus</h2>
              <p className="dark:text-gray-400">All Quezon City University Campus</p>
            </div>
            <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center p-4" onClick={ClickSB}>
                <img src={sb} className="w-96 h-64 rounded-2xl hover:scale-110 duration-150 cursor-pointer" />
                <h3 className="my-3 text-3xl font-semibold">San Bartolome</h3>
                <div className="space-y-1 leadi">

                </div>
              </div>
              <div className="flex flex-col items-center p-4">
                <img src={b} className="w-96 h-64 rounded-2xl hover:scale-110 duration-150 cursor-pointer" />
                <h3 className="my-3 text-3xl font-semibold">Batasan</h3>
                <div className="space-y-1 leadi">

                </div>
              </div>
              <div className="flex flex-col items-center p-4">
                <img src={sf} className="w-96 h-64 rounded-2xl hover:scale-110 duration-150 cursor-pointer" />
                <h3 className="my-3 text-3xl font-semibold">San Francisco</h3>
                <div className="space-y-1 leadi">

                </div>
              </div>


            </div>
            <div className="container mx-auto p-4 my-6 space-y-2 text-center">
              <h2 className="text-5xl font-bold">Other Maps</h2>
              <p className="dark:text-gray-400">other maps of quezon city university</p>
            </div>
            <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center p-4">
                <img src={sample} className="w-96 h-64 rounded-2xl hover:scale-110 duration-150 cursor-pointer" />
                <h3 className="my-3 text-3xl font-semibold text-center">San Bartolome Evacuation Plan</h3>
                <div className="space-y-1 leadi">

                </div>
              </div>
              <div className="flex flex-col items-center p-4">
                <img src={devPlan} className="w-96 h-64 rounded-2xl hover:scale-110 duration-150 cursor-pointer" />
                <h3 className="my-3 text-3xl font-semibold text-center">San Bartolome Developmental Plan</h3>
                <div className="space-y-1 leadi">

                </div>
              </div>



            </div>
          </section>
          <Dock />
        </main>

      </IonContent>
    </IonPage>
  );
};

export default SelectCampus;