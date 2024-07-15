import { useState } from "react";

const TimeSlotPicker = () => {
  const [slots, setSlots] = useState([
    { day: "Sunday", startTime: "", endTime: "" },
    { day: "Wednesday", startTime: "", endTime: "" },
    { day: "Thursday", startTime: "", endTime: "" },
    { day: "Friday", startTime: "", endTime: "" },
  ]);

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const handleAddSlot = () => {
    setSlots([...slots, { day: "Sunday", startTime: "", endTime: "" }]);
  };

  const handleRemoveSlot = (index: number) => {
    const newSlots = slots.filter((_, i) => i !== index);
    setSlots(newSlots);
  };

  const handleChange = (index: number, field: string, value: string) => {
    const newSlots = slots.map((slot, i) =>
      i === index ? { ...slot, [field]: value } : slot
    );
    setSlots(newSlots);
  };

  const handleClearAll = () => {
    setSlots([]);
  };

  return (
    <div>
      <button onClick={handleAddSlot}>Add new</button>
      <button onClick={handleClearAll}>Clear all</button>
      {slots.map((slot, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <label>
            Day:
            <select
              value={slot.day}
              onChange={(e) => handleChange(index, "day", e.target.value)}
            >
              {daysOfWeek.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </label>
          <label>
            Start time:
            <input
              type="time"
              value={slot.startTime}
              onChange={(e) => handleChange(index, "startTime", e.target.value)}
            />
          </label>
          <label>
            End time:
            <input
              type="time"
              value={slot.endTime}
              onChange={(e) => handleChange(index, "endTime", e.target.value)}
            />
          </label>
          <button onClick={() => handleRemoveSlot(index)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default TimeSlotPicker;
