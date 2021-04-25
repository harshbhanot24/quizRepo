import * as express from "express";
import adminRouter from './routes/admin.router';
import userRouter from './routes/user.router';
const router = express.Router();

router.get("/ping",  (req, res)=>{
    return res.send('Server is up and running');
});

router.use('/admin', adminRouter);

router.use('/user', userRouter);
export default router;
