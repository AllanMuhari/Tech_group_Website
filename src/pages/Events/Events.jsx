import React from "react";

const Events = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Weekly Schedule</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <EventDay
          day="Monday"
          activity="Cyber Security"
          timeSlots={[
            { startTime: "7am", endTime: "9am" },
            { startTime: "12pm", endTime: "2pm" },
            { startTime: "6pm", endTime: "8pm" },
          ]}
          location="Computer lab F04"
          leader="Webster Ifedha"
        />
        <EventDay
          day="Tuesday"
          activity="UI/UX Design"
          timeSlots={[
            { startTime: "8am", endTime: "10am" },
            { startTime: "1pm", endTime: "3pm" },
            { startTime: "6pm", endTime: "8pm" },
          ]}
          location="Computer lab F04"
          leader="Manase Gunga"
        />
        <EventDay
          day="Wednesday"
          activity="Web Development"
          timeSlots={[
            { startTime: "9am", endTime: "11am" },
            { startTime: "12pm", endTime: "2pm" },
            { startTime: "4pm", endTime: "6pm" },
          ]}
          location="Computer lab F04"
          leader="Carolyne Githenduka"
        />
        <EventDay
          day="Thursday"
          activity="Mobile Apps Development"
          timeSlots={[
            { startTime: "10am", endTime: "12pm" },
            { startTime: "2pm", endTime: "4pm" },
            { startTime: "7pm", endTime: "9pm" },
          ]}
          leader="Stanley Amunze"
        />
        <EventDay
          day="Friday"
          activity="Cloud Engineering"
          timeSlots={[
            { startTime: "9am", endTime: "11am" },
            { startTime: "1pm", endTime: "3pm" },
            { startTime: "5pm", endTime: "7pm" },
          ]}
          location="Computer lab F04"
          leader="Paul Karanja"
        />
        <EventDay
          day="Saturday"
          activity="Power Platform"
          timeSlots={[
            { startTime: "10am", endTime: "12pm" },
            { startTime: "2pm", endTime: "4pm" },
            { startTime: "6pm", endTime: "8pm" },
          ]}
          location="Computer lab F04"
          leader="Evyonn Mbithe"
        />
        <EventDay
          day="Sunday"
          activity="Software Testing"
          timeSlots={[
            { startTime: "11am", endTime: "1pm" },
            { startTime: "3pm", endTime: "5pm" },
            { startTime: "7pm", endTime: "9pm" },
          ]}
          location="Computer lab F04"
          leader="John Doe"
        />
      </div>
    </div>
  );
};

const EventDay = ({ day, activity, timeSlots, location, leader }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-2">{day}</h2>
      <p>
        <span className="font-bold">Activity:</span> {activity}
      </p>
      <p>
        <span className="font-bold">Time:</span>{" "}
        {timeSlots
          .map((slot) => `${slot.startTime} - ${slot.endTime}`)
          .join(", ")}
      </p>
      {location && (
        <p>
          <span className="font-bold">Location:</span> {location}
        </p>
      )}
      <p>
        <span className="font-bold">Leader:</span> {leader}
      </p>
    </div>
  );
};

export default Events;
