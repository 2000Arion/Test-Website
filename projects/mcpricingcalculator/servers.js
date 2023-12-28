// Server data
const serverData = {
    standard: [
        { id: 'CAX11', vCPU: 2, RAM: 3, SSD: 30, hourly: 0.0070, monthly: 4.51 },
        { id: 'CAX21', vCPU: 4, RAM: 7, SSD: 70, hourly: 0.0120, monthly: 7.72 },
        { id: 'CAX31', vCPU: 8, RAM: 15, SSD: 150, hourly: 0.0240, monthly: 14.86 },
        { id: 'CAX41', vCPU: 16, RAM: 30, SSD: 310, hourly: 0.0470, monthly: 29.14 },
        // Add other standard servers here
    ],
    premium: [
        { id: 'CX21', vCPU: 2, RAM: 3, SSD: 30, hourly: 0.0104, monthly: 6.37 },
        { id: 'CPX21', vCPU: 3, RAM: 3, SSD: 70, hourly: 0.0143, monthly: 8.98 },
        { id: 'CX31', vCPU: 2, RAM: 7, SSD: 70, hourly: 0.0182, monthly: 11.54 },
        { id: 'CPX31', vCPU: 4, RAM: 7, SSD: 150, hourly: 0.0261, monthly: 16.18 },
        { id: 'CX41', vCPU: 4, RAM: 15, SSD: 150, hourly: 0.0340, monthly: 20.71 },
        { id: 'CPX21', vCPU: 8, RAM: 15, SSD: 230, hourly: 0.0496, monthly: 29.99 },
        { id: 'CX51', vCPU: 8, RAM: 30, SSD: 230, hourly: 0.0653, monthly: 39.15 },
        { id: 'CPX51', vCPU: 16, RAM: 30, SSD: 350, hourly: 0.1047, monthly: 65.33 },
        // Add other premium servers here
    ],
    dedicated: [
        { id: 'CCX13', vCPU: 2, RAM: 7, SSD: 70, hourly: 0.0238, monthly: 14.86 },
        { id: 'CCX23', vCPU: 4, RAM: 15, SSD: 150, hourly: 0.0466, monthly: 29.14 },
        { id: 'CCX33', vCPU: 8, RAM: 30, SSD: 230, hourly: 0.0925, monthly: 57.70 },
        { id: 'CCX43', vCPU: 16, RAM: 62, SSD: 350, hourly: 0.1840, monthly: 114.82 },
        { id: 'CCX53', vCPU: 32, RAM: 125, SSD: 590, hourly: 0.3671, monthly: 229.06 },
        { id: 'CCX63', vCPU: 48, RAM: 185, SSD: 950, hourly: 0.5501, monthly: 343.30 },
        // Add other dedicated servers here
    ],
};
