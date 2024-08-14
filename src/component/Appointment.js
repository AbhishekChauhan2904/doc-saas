import React from "react";

const Appointment = () => {
    const appointments = [
    ];

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Appointment Table</h2>
            <h6 style={{ fontWeight: 'lighter', textAlign: 'center' }}>(Appointment of paitent visit in hospital through the portal.)</h6>
            <table style={{ width: '80%', margin: 'auto', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Contact Number</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Service</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Service Type</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appointment, index) => (
                        <tr key={index}>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{appointment.name}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{appointment.contact}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{appointment.service}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{appointment.serviceType}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{appointment.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Appointment;
