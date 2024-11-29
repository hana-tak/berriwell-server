import express from 'express';
import cors from "cors";
import usersRoutes from './routes/users.js';
import journalsRoutes from './routes/journals.js';
import sensitivitiesRoutes from './routes/sensitivities.js';
import healthPlanRoutes from './routes/healthPlan.js';
import appointmentsRoutes from './routes/appointments.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/users', usersRoutes);
app.use('/symptom-journal', journalsRoutes);
app.use('/sensitivities', sensitivitiesRoutes);
app.use('/health-plan', healthPlanRoutes);
app.use('/appointments', appointmentsRoutes);

const PORT = 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));