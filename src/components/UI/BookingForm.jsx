import React, { useState } from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";
import { getDatabase, ref, set } from "firebase/database";
import { useAuth } from '../../pages/AuthContext';
import { useNavigate } from 'react-router-dom';

const BookingForm = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [startAddress, setStartAddress] = useState("");
  const [endAddress, setEndAddress] = useState("");
  const [personCount, setPersonCount] = useState("1 person");
  const [luggageCount, setLuggageCount] = useState("1 luggage");
  const [travelDate, setTravelDate] = useState("");
  const [travelTime, setTravelTime] = useState("");
  const [notes, setNotes] = useState("");
  const [notice, setNotice] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();
    if (user) {
      const bookingData = {
        firstName,
        lastName,
        email,
        phone,
        startAddress,
        endAddress,
        personCount,
        luggageCount,
        travelDate,
        travelTime,
        notes,
      };

      try {
        const db = getDatabase();
        const userBookingRef = ref(db, 'bookings/' + user.uid + '/' + Date.now());
        await set(userBookingRef, bookingData);
        setNotice("Booking saved successfully!");
        navigate('/home'); // Redirigir a la página de inicio después de guardar los datos
      } catch (error) {
        console.error("Error saving booking data:", error);
        setNotice("There was an error saving your booking. Please try again.");
      }
    } else {
      setNotice("You need to be logged in to make a booking.");
    }
  };

  return (
    <Form onSubmit={submitHandler}>
      {notice && <div className="notice">{notice}</div>}
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="number" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="Inicio Dirección" value={startAddress} onChange={(e) => setStartAddress(e.target.value)} required />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Fin Dirección" value={endAddress} onChange={(e) => setEndAddress(e.target.value)} required />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <select value={personCount} onChange={(e) => setPersonCount(e.target.value)} required>
          <option value="1 person">1 Person</option>
          <option value="2 person">2 Person</option>
          <option value="3 person">3 Person</option>
          <option value="4 person">4 Person</option>
          <option value="5+ person">5+ Person</option>
        </select>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <select value={luggageCount} onChange={(e) => setLuggageCount(e.target.value)} required>
          <option value="1 luggage">1 luggage</option>
          <option value="2 luggage">2 luggage</option>
          <option value="3 luggage">3 luggage</option>
          <option value="4 luggage">4 luggage</option>
          <option value="5+ luggage">5+ luggage</option>
        </select>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="date" placeholder="Tiempo de Viaje" value={travelDate} onChange={(e) => setTravelDate(e.target.value)} required />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="time" placeholder="Tiempo de Viaje" className="time__picker" value={travelTime} onChange={(e) => setTravelTime(e.target.value)} required />
      </FormGroup>

      <FormGroup>
        <textarea rows={5} type="textarea" className="textarea" placeholder="Write" value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>
      </FormGroup>

      <button type="submit" className="booking__submit-btn">Reserve Now</button>
    </Form>
  );
};

export default BookingForm;