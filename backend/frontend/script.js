document.addEventListener('DOMContentLoaded', async function() {
    const doctor = {
        image: 'doctor.jpg',
        name: 'Dr. John Doe',
        specialty: 'Cardiology',
        age: 45,
        fee: 100
    };

    document.querySelector('.doctor-image').src = doctor.image;
    document.getElementById('doctor-name').innerText = doctor.name;
    document.getElementById('doctor-specialty').innerText = `Specialist in ${doctor.specialty}`;
    document.getElementById('doctor-age').innerText = `Age: ${doctor.age}`;
    document.getElementById('consultation-fee').innerText = `Consultation Fee: $${doctor.fee}`;

    const slotsContainer = document.getElementById('slots-container');
    const slots = generateTimeSlots('09:30', '17:30', '13:00', '14:00', 30);

    slots.forEach(slot => {
        const slotButton = document.createElement('button');
        slotButton.classList.add('slot-button');
        slotButton.innerText = slot;
        slotButton.addEventListener('click', () => {
            alert(`You selected the ${slot} slot`);
        });
        slotsContainer.appendChild(slotButton);
    });
});

function generateTimeSlots(startTime, endTime, breakStart, breakEnd, interval) {
    const slots = [];
    let currentTime = new Date(`1970-01-01T${startTime}:00`);
    const end = new Date(`1970-01-01T${endTime}:00`);
    const breakStartTime = new Date(`1970-01-01T${breakStart}:00`);
    const breakEndTime = new Date(`1970-01-01T${breakEnd}:00`);

    while (currentTime < end) {
        if (currentTime >= breakStartTime && currentTime < breakEndTime) {
            currentTime = new Date(currentTime.getTime() + interval * 60000); // Skip break time
            continue;
        }
        slots.push(currentTime.toTimeString().substr(0, 5));
        currentTime = new Date(currentTime.getTime() + interval * 60000);
    }

    return slots;
}
