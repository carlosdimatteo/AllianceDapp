import React, { useState } from "react";
import "./App.css";
import { Calendar } from "./components/Calendar";
import { MeetingCard } from "./components/MeetingCard";
import { MeetingCardList } from "./components/MeetingCardList";
import { ModalComponent } from "./components/Modal";
import { LoadingTransaction } from "./components/Modal/components/LoadingTransaction";
import { TimeList } from "./components/TimeList";
import { MOCK_MEETINGS, MOCK_TIMES } from "./mock";
import { Input } from "./components/Input";
import { Home } from "./containers/Home";
import { Header } from "./components/Header";
import AvailableDaysComponent from "./components/AvailableDays/AvailableDaysParentContainer";
import { Button } from "./components/Button";
import { Profile } from "./components/Input/profile";
export default function App() {
  const [selectedTime, setselectedTime] = useState(null);

  // Keeping modal logic in this level for testing purposes
  const [showModal, setShowModal] = useState(false);
  function handleCloseModal() {
    setShowModal(false);
  }
  return (
    <main
    style={{
      background: "#333333",
      width: "vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      overflowY:"scroll"
    }}
    >
    <Header />

    <Home />
    <Input />
      <Calendar
          onChange={(date) => {
            console.log(date);
          }}
        />
        
        <TimeList
          selectedTime={selectedTime}
          onChange={(time) => {
            setselectedTime(time);
          }}
          times={MOCK_TIMES}
          duration={60}
        />
        <Button
          onClick={() => setShowModal(true)}
        >
          Test Modal!
        </Button>
          <ModalComponent showModal={showModal} closeModal={handleCloseModal}>
              <LoadingTransaction />
          </ModalComponent>
          <MeetingCardList meetings={MOCK_MEETINGS} />
          {/* <AvailableDaysComponent/> */}
          
    </main>
  );
}
