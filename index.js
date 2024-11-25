import express from 'express';
import usersRoutes from './routes/users';
import journalsRoutes from './routes/journals';
import sensitivitiesRoutes from './routes/sensitivities';
import healthPlanRoutes from './routes/healthPlan';
import appointmentsRoutes from './routes/appointments.js';

const app = express();

app.use(express.json());

app.use('/users', usersRoutes);
app.use('/journals', journalsRoutes);
app.use('/sensitivities', sensitivitiesRoutes);
app.use('/health-plan', healthPlanRoutes);
app.use('/appointments', appointmentsRoutes);

const PORT = 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));